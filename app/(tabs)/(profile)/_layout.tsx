// app/(tabs)/(home)/_layout.tsx - OPTION A (RECOMMENDED)
import { View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={SCREEN_OPTIONS} />
      {/* Tambahkan screen lain di sini jika ada nested routes */}
    </Stack>
  );
}

const SCREEN_OPTIONS = {
  header: () => (
    <View className="left-0 right-0 top-0 h-fit flex-row justify-center bg-primary pb-3 pt-10">
      <ButtonTabs />
    </View>
  ),
  // headerTintColor: THEME.light.primaryForeground,
  // headerStyle: {
  //   backgroundColor: THEME.light.primary,
  // },
};

import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import { cn } from '@/lib/utils';

export function ButtonTabs() {
  const [value, setValue] = React.useState<'personal' | 'bisnis'>('personal');
  return (
    <View className="p h-[2.2em] flex-row items-center justify-center gap-2 rounded-lg bg-foreground/15 p-[2.7px]">
      <Button
        variant={value == 'personal' ? 'default' : 'ghost'}
        onPress={() => setValue('personal')}
        className={cn(
          'h-full w-[6em] rounded-lg py-0',
          value === 'bisnis' && 'group py-0 active:bg-primary active:text-primary-foreground'
        )}>
        <Text
          variant={'small'}
          className={cn(
            'text-sm',

            value == 'bisnis' &&
              'font-normal text-primary-foreground group-active:text-primary-foreground'
          )}>
          Personal
        </Text>
      </Button>
      <Button
        variant={value == 'bisnis' ? 'default' : 'ghost'}
        onPress={() => setValue('bisnis')}
        className={cn(
          'h-full w-[6em] rounded-lg py-0',
          value === 'personal' && 'group py-0 active:bg-primary active:text-primary-foreground'
        )}>
        <Text
          variant={'small'}
          className={cn(
            'text-sm',

            value == 'personal' &&
              'font-normal text-primary-foreground group-active:text-primary-foreground'
          )}>
          Bisnis
        </Text>
      </Button>
    </View>
  );
}
