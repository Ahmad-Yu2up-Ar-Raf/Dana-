import { Image } from 'react-native';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Button, buttonTextVariants, buttonVariants } from '../../shadcn-ui/button';
import { Link } from '../../shadcn-ui/link';
import { Icon } from '../../shadcn-ui/icon';
import {
  Banknote,
  Crosshair,
  Gamepad,
  Gamepad2,
  Goal,
  Grid,
  LayoutDashboard,
  Lightbulb,
  LucideIcon,
  Phone,
  QrCode,
  ScanQrCode,
  Target,
  TicketPercent,
  Wallet,
} from 'lucide-react-native';
import { cn } from '@/lib/utils';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';
import { Href } from 'expo-router';
import { THEME } from '@/lib/theme';
import { UserAvatar } from '@/components/ui/core/feature/auth/user-menu';
import { useUser } from '@clerk/clerk-expo';

interface ProfileCardProps {
  href?: Href;
  label: string;
  Icon: LucideIcon;
  className?: string;
}

const MenuLink: ProfileCardProps[] = [
  {
    href: '/(tabs)/(home)',
    label: 'Pulsa & Data',
    Icon: Phone,
    className: 'text-red-300 fill-red-500',
  },
  {
    href: '/(tabs)/(home)',
    label: 'Dana Goals',
    Icon: Goal,
    className: '  text-teal-500 ',
  },
  {
    href: '/(tabs)/(home)',
    label: 'item digital',
    Icon: Gamepad2,
    className: 'text-amber-500  ',
  },
  {
    href: '/(tabs)/(home)',
    label: 'Tarik Tunai',
    Icon: Banknote,
    className: 'text-green-300 fill-green-500',
  },
  {
    href: '/(tabs)/(home)',
    label: 'dana deals',
    Icon: TicketPercent,
    className: 'text-orange-300 fill-orange-500',
  },
  {
    href: '/(tabs)/(home)',
    label: 'saldo digital',
    Icon: Wallet,
    className: 'text-purple-300 fill-purple-500',
  },
  {
    href: '/(tabs)/(home)',
    label: 'Listrik & PLN',
    Icon: Lightbulb,
    className: 'text-yellow-300 fill-yellow-500',
  },
  {
    href: '/(tabs)/(home)',
    label: 'Lainnya',
    Icon: LayoutDashboard,
    className: 'text-cyan-300 fill-cyan-500',
  },
];
export default function ProfileCard() {
  const { user } = useUser();
  return (
    <View style={{ backgroundColor: THEME.light.primary }} className="w-full gap-3">
      <View className="m-auto w-full max-w-sm flex-row items-end justify-between gap-5 px-4 py-6">
        <View className="w-fit flex-row items-center gap-5">
          <View>
            <UserAvatar className="size-14" />
          </View>
          <View className="gap-0 text-primary-foreground">
            <Image
              source={require('@/assets/images/brand/app/dana-premium.png')}
              resizeMode="contain"
              className="mb-0.5 h-5 w-[4.5em]"
              // style={LOGO_STYLE}
            />
            <Text variant={'large'} className="mb-1 text-xl font-medium text-primary-foreground">
              Bima Sakti
            </Text>
            <Text className="text-sm font-normal text-primary-foreground/85">081999069933</Text>
          </View>
        </View>
        <Button
          size={'sm'}
          variant="secondary"
          className={cn(
            'gap-0.5 px-2.5'
            // THEME[primaryColor].background,
          )}>
          <Icon as={ScanQrCode} size={18} className="text-primary" />

          <Text className={cn('text-sm font-semibold text-primary')}> Show QR</Text>
        </Button>
      </View>
    </View>
  );
}
