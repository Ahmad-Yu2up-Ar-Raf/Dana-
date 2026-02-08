import { Dimensions, Image } from 'react-native';
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
import { cn } from '@/lib/utils';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';
import { Href } from 'expo-router';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { THEME } from '@/lib/theme';
import {
  Banknote,
  CircleStar,
  Crosshair,
  Gamepad,
  Gamepad2,
  Goal,
  Grid,
  LayoutDashboard,
  Lightbulb,
  Lock,
  LucideIcon,
  Phone,
  Star,
  Target,
  TicketPercent,
  Wallet,
} from 'lucide-react-native';

interface MenuCardProps {
  href?: Href;
  label: string;
  Icon: LucideIcon;
  className?: string;
}

/* ---------------- Group A (8 items) ---------------- */
export const MenuGroupA: MenuCardProps[] = [
  { href: '/(tabs)/(home)', label: 'Pulsa Data', Icon: Phone, className: 'text-teal-500' },
  { href: '/(tabs)/(home)', label: 'DANA Goals', Icon: Goal, className: 'text-red-500' },
  { href: '/(tabs)/(home)', label: 'Listrik PLN', Icon: Lightbulb, className: 'text-yellow-500' },
  { href: '/(tabs)/(home)', label: 'Game Digital', Icon: Gamepad2, className: 'text-cyan-500' },
  { href: '/(tabs)/(home)', label: 'Tarik Tunai', Icon: Banknote, className: 'text-green-500' },
  { href: '/(tabs)/(home)', label: 'Saldo Digital', Icon: Wallet, className: 'text-purple-500' },
  { href: '/(tabs)/(home)', label: 'DANA Emas', Icon: CircleStar, className: 'text-amber-400' },
  {
    href: '/(tabs)/(home)',
    label: 'Deals Promo',
    Icon: TicketPercent,
    className: 'text-orange-500',
  },
];

/* ---------------- Group B (8 items) ---------------- */
export const MenuGroupB: MenuCardProps[] = [
  { href: '/(tabs)/(home)', label: 'Top Up', Icon: Wallet, className: 'text-sky-500' },
  {
    href: '/(tabs)/(home)',
    label: 'Bayar Tagihan',
    Icon: LayoutDashboard,
    className: 'text-indigo-500',
  },
  { href: '/(tabs)/(home)', label: 'Invest Dana', Icon: Grid, className: 'text-rose-500' },
  { href: '/(tabs)/(home)', label: 'Asuransi Protek', Icon: Lock, className: 'text-pink-500' },
  {
    href: '/(tabs)/(home)',
    label: 'Voucher Toko',
    Icon: TicketPercent,
    className: 'text-amber-500',
  },
  {
    href: '/(tabs)/(home)',
    label: 'Cashback Saldo',
    Icon: CircleStar,
    className: 'text-emerald-500',
  },
  { href: '/(tabs)/(home)', label: 'Riwayat ', Icon: Crosshair, className: 'text-lime-500' },
  { href: '/(tabs)/(home)', label: 'Favorit Merchant', Icon: Star, className: 'text-fuchsia-500' },
];

/* ---------------- Group C (8 items) ---------------- */
export const MenuGroupC: MenuCardProps[] = [
  { href: '/(tabs)/(home)', label: 'Scan Bayar', Icon: Target, className: 'text-cyan-600' },
  { href: '/(tabs)/(home)', label: 'Kirim Uang', Icon: Banknote, className: 'text-emerald-600' },
  { href: '/(tabs)/(home)', label: 'Auto Save', Icon: Goal, className: 'text-violet-500' },
  {
    href: '/(tabs)/(home)',
    label: 'Top Merchant',
    Icon: LayoutDashboard,
    className: 'text-blue-600',
  },
  { href: '/(tabs)/(home)', label: 'Tagihan PLN', Icon: Lightbulb, className: 'text-yellow-600' },
  { href: '/(tabs)/(home)', label: 'Game Voucher', Icon: Gamepad, className: 'text-slate-600' },
  { href: '/(tabs)/(home)', label: 'Promo Baru', Icon: TicketPercent, className: 'text-red-400' },
  { href: '/(tabs)/(home)', label: 'Cari Merchant', Icon: Grid, className: 'text-indigo-400' },
];

/* ---------------- Group D (8 items) ---------------- */
export const MenuGroupD: MenuCardProps[] = [
  { href: '/(tabs)/(home)', label: 'Scan QR', Icon: Crosshair, className: 'text-teal-600' },
  {
    href: '/(tabs)/(home)',
    label: 'Bayar Cicil',
    Icon: TicketPercent,
    className: 'text-orange-400',
  },
  { href: '/(tabs)/(home)', label: 'Saldo Limit', Icon: Wallet, className: 'text-purple-600' },
  { href: '/(tabs)/(home)', label: 'Donasi Cepat', Icon: Star, className: 'text-pink-400' },
  { href: '/(tabs)/(home)', label: 'Token PLN', Icon: Lightbulb, className: 'text-amber-300' },
  { href: '/(tabs)/(home)', label: 'Isi Voucher', Icon: Gamepad, className: 'text-cyan-400' },
  { href: '/(tabs)/(home)', label: 'PayLater Cicil', Icon: Lock, className: 'text-rose-400' },
  { href: '/(tabs)/(home)', label: 'Customer Care', Icon: Phone, className: 'text-lime-400' },
];

/* ---------------- Group E (8 items) ---------------- */
export const MenuGroupE: MenuCardProps[] = [
  { href: '/(tabs)/(home)', label: 'Split Bill', Icon: Gamepad2, className: 'text-cyan-500' },
  { href: '/(tabs)/(home)', label: 'Gift Kirim', Icon: CircleStar, className: 'text-amber-500' },
  {
    href: '/(tabs)/(home)',
    label: 'Pembayaran Instan',
    Icon: LayoutDashboard,
    className: 'text-indigo-600',
  },
  { href: '/(tabs)/(home)', label: 'Marketplace App', Icon: Grid, className: 'text-sky-400' },
  { href: '/(tabs)/(home)', label: 'Scan Merchant', Icon: Target, className: 'text-teal-400' },
  { href: '/(tabs)/(home)', label: 'Transaksi Baru', Icon: Crosshair, className: 'text-gray-700' },
  { href: '/(tabs)/(home)', label: 'Notifikasi Baru', Icon: Star, className: 'text-pink-600' },
  { href: '/(tabs)/(home)', label: 'Pengaturan Akun', Icon: Lock, className: 'text-slate-500' },
];

/* Optional combined export */
// export const ALL_MENUS = [...MenuGroupA, ...MenuGroupB, ...MenuGroupC, ...MenuGroupD, ...MenuGroupE];

/**
 * Optional convenience export if lo mau gabung semua:
 * export const ALL_MENUS = [...MenuGroupA, ...MenuGroupB, ...MenuGroupC, ...MenuGroupD, ...MenuGroupE];
 */

const MenuLinkGrouped: MenuCardProps[][] = [
  MenuGroupA,
  // MenuGroupB,
  MenuGroupC,
  MenuGroupD,
  // MenuGroupE,
];

const width = Dimensions.get('window').width;
const CARD_WIDTH = width * 0.9; // You can adjust the card width as needed

export default function MenuCard() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <Card className="w-full max-w-sm gap-3 rounded-3xl bg-card pb-5 pt-3 text-primary-foreground shadow-sm">
      <CardHeader className="m-auto w-full px-2.5">
        <View className="s flex-row items-center justify-between rounded-2xl border border-border bg-card p-3 pr-2">
          <View className="flex-row items-center gap-5">
            <Image
              source={require('@/assets/images/icon/reward.png')}
              resizeMode="contain"
              className="size-10"
              // style={LOGO_STYLE}
            />
            <View className="gap-1">
              <CardTitle className="font-semibold">Alipay+ Bonus</CardTitle>
              <CardDescription className="text-[12.5px] tracking-wide text-orange-500">
                Berhadiah 2,5 Jt!
              </CardDescription>
            </View>
          </View>
          <Button size={'sm'}>
            <Text className="text-sm text-primary-foreground">Ambil Sekarag</Text>
          </Button>
        </View>
      </CardHeader>
      <CardContent className="w-full overflow-hidden p-0">
        <Carousel
          ref={ref}
          loop={false}
          width={CARD_WIDTH}
          height={width / 2.4}
          autoPlay
          autoPlayInterval={2900}
          onProgressChange={progress}
          scrollAnimationDuration={800}
          data={MenuLinkGrouped}
          renderItem={({ item }) => (
            <View className="flex h-full w-full flex-row flex-wrap justify-between gap-x-0 gap-y-4 px-3 py-1">
              {item.map((item, index) => (
                <Button
                  key={index}
                  variant={'ghost'}
                  // href={item.href || '/(tabs)/(home)'}
                  className={cn(
                    // buttonVariants({ variant: 'ghost' }),

                    'px-0 py-2 active:bg-accent'
                  )}
                  style={{ width: (CARD_WIDTH - 48) / 4, height: (width / 2.4 - 32) / 2 }}>
                  <View className="flex-col items-center justify-center gap-2">
                    <Icon
                      as={item.Icon}
                      size={27}
                      className={cn('rounded-xl', item.className ? item.className : 'text-red-500')}
                    />
                    <Text
                      variant={'small'}
                      className="text-[12px] font-medium capitalize tracking-tighter text-foreground">
                      {item.label}
                    </Text>
                  </View>
                </Button>
              ))}
            </View>
          )}
        />
        <Pagination.Basic
          size={5}
          progress={progress}
          data={MenuLinkGrouped}
          activeDotStyle={{
            overflow: 'hidden',
            backgroundColor: THEME.light.primary,
          }}
          dotStyle={{ backgroundColor: THEME.light.mutedForeground, borderRadius: 20 }}
          containerStyle={{ gap: 4, marginTop: 10 }}
          onPress={onPressPagination}
        />
      </CardContent>
    </Card>
  );
}
