import '@/global.css';

import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';
import { NAV_THEME } from '@/lib/theme';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ToastProvider } from '@/components/ui/fragments/shadcn-ui/toast';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  // ✅ FORCE LIGHT MODE - No dark mode support
  // colorScheme will always be 'light'

  return (
    <ClerkProvider tokenCache={tokenCache}>
      {/* ✅ Always use light theme */}
      <ThemeProvider value={NAV_THEME.light}>
        {/* ✅ Always use dark status bar (for light background) */}
        <StatusBar style="dark" />
        <ToastProvider>
          <Routes />
        </ToastProvider>
        <PortalHost />
      </ThemeProvider>
    </ClerkProvider>
  );
}

// ✅ Splash Screen Configuration
SplashScreen.preventAutoHideAsync();
function Routes() {
  const { isSignedIn, isLoaded } = useAuth();

  React.useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Stack>
      {/* Screens only shown when the user is NOT signed in */}
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="index" options={SIGN_IN_SCREEN_OPTIONS} />
        <Stack.Screen name="(auth)/sign-in" options={SIGN_IN_SCREEN_OPTIONS} />
        <Stack.Screen name="(auth)/sign-up" options={SIGN_UP_SCREEN_OPTIONS} />
        <Stack.Screen name="(auth)/verify-email" options={DEFAULT_AUTH_SCREEN_OPTIONS} />
        <Stack.Screen name="(auth)/reset-password" options={DEFAULT_AUTH_SCREEN_OPTIONS} />
        <Stack.Screen name="(auth)/forgot-password" options={DEFAULT_AUTH_SCREEN_OPTIONS} />
      </Stack.Protected>

      {/* Screens only shown when the user IS signed in */}
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      {/* Screens outside the guards are accessible to everyone (e.g. not found) */}
    </Stack>
  );
}

const SIGN_IN_SCREEN_OPTIONS = {
  headerShown: false,
  title: 'Sign in',
};

const SIGN_UP_SCREEN_OPTIONS = {
  title: 'Sign up',
  headerShown: false,
} as const;

const DEFAULT_AUTH_SCREEN_OPTIONS = {
  title: '',
  headerShown: false,
};
