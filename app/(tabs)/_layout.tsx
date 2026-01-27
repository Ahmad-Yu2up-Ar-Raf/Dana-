import { Platform, View } from 'react-native';

import { useColorScheme } from 'nativewind';
import { UserMenu } from '@/components/ui/core/feature/auth/user-menu';
import { Link, Stack, Tabs } from 'expo-router';

import { MoonStarIcon, XIcon, SunIcon, House, Settings, Book } from 'lucide-react-native';

import { Badge, Label, NativeTabs, VectorIcon, Icon as TabIcon } from 'expo-router/unstable-native-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
const SCREEN_OPTIONS = {
  header: () => (
    <View pointerEvents="box-none" className="top-safe absolute left-0 right-0 flex-row justify-between px-4 py-2 web:mx-2">
      <ThemeToggle />
      <UserMenu />
    </View>
  ),
};
export default function TabsLayout() {
  // Render web-friendly Tabs when running in web (avoid native-only code paths)
  if (Platform.OS === 'web') {
    return (
      <>
        <Stack.Screen options={SCREEN_OPTIONS} />
        <Tabs>
          <Tabs.Screen
            name="(home)/index"
            options={{
              headerShown: false,
              title: 'Home',
              tabBarIcon: () => <MaterialCommunityIcons name="home" size={20} />,
            }}
          />
          <Tabs.Screen
            name="(news)/index"
            options={{
              headerShown: false,
              title: 'News',
              tabBarIcon: () => <MaterialCommunityIcons name="book" size={20} />,
            }}
          />
        </Tabs>
      </>
    );
  }

  // Native (iOS/Android) — use NativeTabs
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <NativeTabs
        minimizeBehavior="onScrollDown"
        labelStyle={{
          default: { color: 'var(--color-primary)' },
          selected: { color: 'var(--color-foreground)' },
        }}
        iconColor={{
          default: 'var(--color-primary)',
          selected: 'var(--color-foreground)',
        }}
        badgeBackgroundColor={'var(--color-destructive)'}
        labelVisibilityMode="labeled"
        disableTransparentOnScrollEdge={true}>
        <NativeTabs.Trigger name="(home)/index">
          <TabIcon src={<MaterialCommunityIcons name="home" size={20} />} />
          <Label>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="(news)/index">
          <TabIcon src={<MaterialCommunityIcons name="book" size={20} />} />
          <Label>News</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button onPress={toggleColorScheme} size="icon" variant="ghost" className="rounded-full">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-6" />
    </Button>
  );
}
