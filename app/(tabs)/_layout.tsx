import { Platform, ColorValue, ImageSourcePropType, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Stack } from 'expo-router';
import { THEME } from '@/lib/theme';
import { Label, NativeTabs, VectorIcon, Icon as TabIcon } from 'expo-router/unstable-native-tabs';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
import { View } from '@/components/ui/fragments/shadcn-ui/view';
import React, { useMemo } from 'react';
import { Link } from '@/components/ui/fragments/shadcn-ui/link';
import Logo from '@/assets/svg/brand/logo';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import Email from '@/assets/svg/icon/email';
 
type VectorIconFamily = {
  getImageSource: (name: string, size: number, color: ColorValue) => Promise<ImageSourcePropType>;
};

const SCREEN_OPTIONS = {
  header: () => (
    <View
      pointerEvents="box-none"
      className="top-safe sticky left-0 right-0 flex-row justify-between px-5 py-2 web:mx-2">
      <LogoApp />
      <Notif />
      
    </View>
  ),
};

export default function TabsLayout() {
  /**
   * ✅ LIGHT MODE ONLY - Direct THEME.light access
   */
  const tintColor = THEME.light.primary;
  const backgroundColor = THEME.light.background;
  const inactiveTintColor = THEME.light.mutedForeground;
  const borderColor = THEME.light.border;

  const labelSelectedStyle = { color: tintColor };

  const nativeLabelStyle = useMemo(() => {
    return {
      fontWeight: '700' as const,
      fontSize: 13,
      color: inactiveTintColor,
    };
  }, [inactiveTintColor]);

  // ✅ Tab bar style with border top
  const tabBarStyle = useMemo(() => {
    return {
      backgroundColor,
      borderTopWidth: 1,
      borderTopColor: borderColor,
      // Add elevation for Android
      ...Platform.select({
        android: {
          elevation: 8,
        },
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
        },
      }),
    };
  }, [backgroundColor, borderColor]);

  // cast NativeTabs to any to allow passing custom/unsupported props
  const AnyNativeTabs = NativeTabs as unknown as any;

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <AnyNativeTabs
        backgroundColor={backgroundColor}
        badgeBackgroundColor={tintColor}
        labelStyle={nativeLabelStyle}
        iconColor={inactiveTintColor}
        tintColor={tintColor}
        labelVisibilityMode="labeled"
        indicatorColor={THEME.light.muted}
        disableTransparentOnScrollEdge={true}
        // ✅ Apply custom tab bar style with border
        tabBarStyle={tabBarStyle}>
        <AnyNativeTabs.Trigger name="(home)/index">
          <TabIcon
            src={
              <VectorIcon
                family={MaterialCommunityIcons as VectorIconFamily}
                name="home"
                // ✅ Larger icon size (default is 24)
                // @ts-ignore - VectorIcon props typing may not include size but it is forwarded to the underlying icon
                size={28}
              />
            }
            selectedColor={tintColor}
          />
          <Label selectedStyle={labelSelectedStyle}>Home</Label>
        </AnyNativeTabs.Trigger>

        <AnyNativeTabs.Trigger name="(profile)/index">
          <TabIcon
            src={
              <VectorIcon
                family={MaterialCommunityIcons as VectorIconFamily}
                name="account"
                // ✅ Larger icon size (default is 24)
                // @ts-ignore - VectorIcon props typing may not include size but it is forwarded to the underlying icon
                size={28}
              />
            }
            selectedColor={tintColor}
          />
          <Label selectedStyle={labelSelectedStyle}>Profile</Label>
        </AnyNativeTabs.Trigger>
      </AnyNativeTabs>
    </>
  );
}

function LogoApp() {
  return (
    <Link href={'/(tabs)/(home)'} className="w-fit">
      <Logo width={88} height={28} className="size-6 text-foreground" />
    </Link>
  );
}

function Notif() {
  return (
    <Button variant={'ghost'} size={'icon'} className="relative size-6 rounded-full p-0">
      {/* ✅ No dark: classes needed - light mode only */}
      <Email width={24} height={24} className="size-6 opacity-10" />
      <View
        className="absolute -right-1 -top-0.5 size-2.5 rounded-full border-2 border-background bg-primary fill-primary"
        style={{
          backgroundColor: '#2563eb',
        }}
      />
    </Button>
  );
}
