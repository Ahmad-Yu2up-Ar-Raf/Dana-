import { Platform, View, ColorValue, ImageSourcePropType, DynamicColorIOS } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';
import { UserMenu } from '@/components/ui/core/feature/auth/user-menu';
import { Link, Stack, Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/Feather';
import { MoonStarIcon, XIcon, SunIcon, House, Settings, Book } from 'lucide-react-native';
import { NAV_THEME, THEME } from '@/lib/theme';
import {
  Badge,
  Label,
  NativeTabs,
  VectorIcon,
  Icon as TabIcon,
} from 'expo-router/unstable-native-tabs';

import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';

import React from 'react';

import { theme } from '../../theme';

import { isLiquidGlassAvailable } from 'expo-glass-effect';
import useThemeColor from '@/components/Themed';

type VectorIconFamily = {
  getImageSource: (name: string, size: number, color: ColorValue) => Promise<ImageSourcePropType>;
};

const SCREEN_OPTIONS = {
  header: () => (
    <View
      pointerEvents="box-none"
      className="top-safe absolute left-0 right-0 flex-row justify-between px-4 py-2 web:mx-2">
      <ThemeToggle />
      <UserMenu />
    </View>
  ),
};
export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  // const navTheme = NAV_THEME[colorScheme ?? 'light'];

  // const bookmarks = useBookmarkStore((state) => state.bookmarks);
  // const hasBookmarks = bookmarks.length > 0;
  const tintColor = useThemeColor({ light: THEME.light.primary, dark: THEME.dark.primary });
  const backgroundColor = useThemeColor({
    light: THEME.light.background,
    dark: THEME.dark.background,
  });
  const backgroundColorIndicator = useThemeColor({
    light: THEME.light.mutedForeground,
    dark: THEME.dark.mutedForeground,
  });
  const inactiveTintColor = useThemeColor({
    light: THEME.light.mutedForeground,
    dark: THEME.dark.mutedForeground,
  });

  const labelSelectedStyle = Platform.OS === 'ios' ? { color: tintColor } : { color: tintColor };

  // Native (iOS/Android) — use NativeTabs
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <NativeTabs
        backgroundColor={backgroundColor}
        badgeBackgroundColor={tintColor}
        labelStyle={{
          fontWeight: '800',
          fontSize: 15,
          color:
            Platform.OS === 'ios' && isLiquidGlassAvailable()
              ? DynamicColorIOS({
                  light: theme.colorBlack,
                  dark: theme.colorWhite,
                })
              : inactiveTintColor,
        }}
        iconColor={
          Platform.OS === 'ios' && isLiquidGlassAvailable()
            ? DynamicColorIOS({
                light: theme.colorBlack,
                dark: theme.colorWhite,
              })
            : inactiveTintColor
        }
        tintColor={
          Platform.OS === 'ios'
            ? DynamicColorIOS({ light: THEME.light.primary, dark: THEME.dark.primary })
            : inactiveTintColor
        }
        labelVisibilityMode="labeled"
        indicatorColor={backgroundColorIndicator}
        disableTransparentOnScrollEdge={true} // Used to prevent transparent background on iOS 18 and older
      >
        <NativeTabs.Trigger name="(home)/index">
          {Platform.select({
            ios: <TabIcon sf="house.fill" />,
            android: (
              <TabIcon
                src={<VectorIcon family={MaterialCommunityIcons as VectorIconFamily} name="home" />}
                selectedColor={tintColor}
              />
            ),
          })}
          <Label selectedStyle={labelSelectedStyle}>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="(news)/index">
          {Platform.select({
            ios: <TabIcon sf="newspaper.fill" />,
            android: (
              <TabIcon
                src={
                  <VectorIcon
                    family={MaterialCommunityIcons as VectorIconFamily}
                    name="newspaper"
                  />
                }
                selectedColor={tintColor}
              />
            ),
          })}
          <Label selectedStyle={labelSelectedStyle}>News</Label>
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
