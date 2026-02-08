// app/(tabs)/(home)/_layout.tsx - OPTION A (RECOMMENDED)
import { View } from 'react-native';
import React from 'react';
import { Link } from '@/components/ui/fragments/shadcn-ui/link';
import Email from '@/assets/svg/icon/email';
import Logo from '@/assets/svg/brand/logo';
import { Stack } from 'expo-router';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';

export default function PayLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={SCREEN_OPTIONS} />
      {/* Tambahkan screen lain di sini jika ada nested routes */}
    </Stack>
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
      <Email width={24} height={24} className="size-6 opacity-10" />
      <View
        className="absolute -right-1 -top-0.5 size-2.5 rounded-full border-2 border-background bg-primary fill-primary"
        style={{
          backgroundColor: '#108bea',
        }}
      />
    </Button>
  );
}

const SCREEN_OPTIONS = {
  header: () => (
    <View className="safe-area-inset-top left-0 right-0 top-5 h-fit flex-row justify-between bg-background px-5 py-8 web:mx-2">
      <LogoApp />
      <Notif />
    </View>
  ),
};
