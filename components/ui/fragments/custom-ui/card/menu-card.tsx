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
  Target,
  TicketPercent,
  Wallet,
} from 'lucide-react-native';
import { cn } from '@/lib/utils';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';
import { Href } from 'expo-router';

interface MenuCardProps {
  href?: Href;
  label: string;
  Icon: LucideIcon;
  className?: string;
}

const MenuLink: MenuCardProps[] = [
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
    label: 'Views All',
    Icon: LayoutDashboard,
    className: 'text-cyan-300 fill-cyan-500',
  },
];
export default function MenuCard() {
  return (
    <Card className="text-primary-foregroundpb-7 w-full max-w-sm gap-7 rounded-3xl bg-background px-3 py-4 pb-7">
      <CardHeader className="w-full flex-row items-center justify-between rounded-3xl border border-border p-3 pr-2">
        <View className="flex-row gap-5">
          <Image
            source={require('@/assets/images/reward.png')}
            resizeMode="contain"
            className="size-11"
            // style={LOGO_STYLE}
          />
          <View className="gap-1">
            <CardTitle className=" font-semibold ">Alipay+ Rewards</CardTitle>
            <CardDescription className="text-[14.5px] tracking-wide text-orange-500">
              Berhadiah 2,5 Jt!
            </CardDescription>
          </View>
        </View>
        <Button size={'sm'}>
          <Text className="px-1.5 text-primary-foreground">Claim Now</Text>
        </Button>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap justify-between gap-x-[1.261em] gap-y-7 px-3">
        {MenuLink.map((item, index) => (
          <Link
            key={index}
            href={item.href || '/(tabs)/(home)'}
            className={cn(
              // buttonVariants({ variant: 'ghost' }),

              'w-16.5 h-12 active:bg-accent'
            )}>
            <View className="flex-col items-center justify-center gap-2">
              <Icon
                as={item.Icon}
                size={27}
                className={cn('rounded-xl', item.className ? item.className : 'text-red-500')}
              />
              <Text
                variant={'small'}
                className="text-[12px] font-semibold capitalize tracking-tighter text-foreground/90">
                {item.label}
              </Text>
            </View>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
