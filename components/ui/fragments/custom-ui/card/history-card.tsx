import { Image } from 'react-native';
import React, { SVGProps } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Button } from '../../shadcn-ui/button';

import { ChevronRight, History } from 'lucide-react-native';
import { cn } from '@/lib/utils';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';

import { Separator } from '../../shadcn-ui/separator';
import { Icon } from '../../shadcn-ui/icon';
import { router } from 'expo-router';

import ActivityCard from './activity-card';

export interface HistoryCardProps {
  label: string;
  date: string;
  amount: string;
  status?: 'income' | 'expense';
  Img: string | any;
}

export const HistoryLink: HistoryCardProps[] = [
  {
    label: 'Kopi Pelakor',
    Img: require('@/assets/images/brand/linkaja.png'),
    date: '2026-01-25 11:42:23.357',
    amount: '10.000',
    status: 'expense',
  },
  {
    label: 'GoFood Order',
    Img: require('@/assets/images/brand/gojek.png'),
    date: '2026-02-06 09:20:12.120',
    amount: '45.000',
    status: 'expense',
  },
  {
    label: 'Kirim ke Budi',
    Img: require('@/assets/images/brand/bca.jpg'),
    date: '2026-02-06 18:40:05.004',
    amount: '200.000',
    status: 'expense',
  },

  {
    label: 'Cashback Promo',
    Img: require('@/assets/images/brand/dana.png'),
    date: '2026-02-05 20:15:45.999',
    amount: '15.000',
    status: 'income',
  },
  {
    label: 'GrabFood Meal',
    Img: require('@/assets/images/brand/grabfood.jpg'),
    date: '2026-02-04 19:50:10.222',
    amount: '62.500',
    status: 'expense',
  },
  {
    label: 'ShopeePay Bayar',
    Img: require('@/assets/images/brand/shopeepay.jpg'),
    date: '2026-02-03 15:10:07.777',
    amount: '120.000',
    status: 'expense',
  },
  {
    label: 'OVO Topup',
    Img: require('@/assets/images/brand/ovo.jpg'),
    date: '2026-02-02 11:05:55.001',
    amount: '250.000',
    status: 'income',
  },
  {
    label: 'LinkAja Scan',
    Img: require('@/assets/images/brand/linkaja.png'),
    date: '2026-01-30 17:33:22.450',
    amount: '20.000',
    status: 'expense',
  },
  {
    label: 'Topup BCA',
    Img: require('@/assets/images/brand/bca.jpg'),
    date: '2026-02-01 09:05:33.111',
    amount: '500.000',
    status: 'income',
  },
  {
    label: 'Indomaret Belanja',
    Img: require('@/assets/images/brand/indomaret.jpg'),
    date: '2026-01-29 10:00:00.000',
    amount: '75.000',
    status: 'expense',
  },
  {
    label: 'Alfamart Bayar',
    Img: require('@/assets/images/brand/alfamart.jpg'),
    date: '2026-01-28 16:12:45.650',
    amount: '42.000',
    status: 'expense',
  },
  {
    label: 'PLN Token',
    Img: require('@/assets/images/brand/pln.jpg'),
    date: '2026-01-27 09:00:00.123',
    amount: '150.000',
    status: 'expense',
  },
  {
    label: 'BPJS Bayar',
    Img: require('@/assets/images/brand/bpjs.jpg'),
    date: '2026-01-25 08:30:12.999',
    amount: '35.000',
    status: 'expense',
  },
  {
    label: 'Tiket KAI',
    Img: require('@/assets/images/brand/traveloka.jpg'),
    date: '2026-01-24 19:00:01.321',
    amount: '95.000',
    status: 'expense',
  },
  {
    label: 'Netflix Langganan',
    Img: require('@/assets/images/brand/netflix.jpg'),
    date: '2026-01-23 09:00:00.010',
    amount: '59.000',
    status: 'expense',
  },
  {
    label: 'Spotify Premium',
    Img: require('@/assets/images/brand/spotify.jpg'),
    date: '2026-01-22 09:05:30.450',
    amount: '49.000',
    status: 'expense',
  },
  {
    label: 'Tokopedia Bayar',
    Img: require('@/assets/images/brand/tokopedia.jpg'),
    date: '2026-01-21 12:00:00.000',
    amount: '180.000',
    status: 'expense',
  },
  {
    label: 'Refund Order',
    Img: require('@/assets/images/brand/dana.png'),
    date: '2026-01-19 14:15:00.777',
    amount: '75.000',
    status: 'income',
  },
  {
    label: 'Promo Cashback',
    Img: require('@/assets/images/brand/shopeepay.jpg'),
    date: '2026-01-18 11:11:11.111',
    amount: '10.000',
    status: 'income',
  },
];

export default function HistoryCard() {
  return (
    <Card className="h-fit w-full max-w-sm gap-0 rounded-3xl bg-card pb-6 pt-6 text-primary-foreground shadow-sm">
      <CardHeader className="w-full flex-row items-center gap-3.5 rounded-2xl bg-card px-6 py-0">
        <Button variant={'outline'} size={'icon'} className="size-12 rounded-full">
          <Icon as={History} size={29} className="inline-block text-primary" />
        </Button>
        <View>
          <CardTitle className="p-0 text-xl font-semibold tracking-tight">Riwayat</CardTitle>

          <CardDescription className="p-0 text-sm tracking-wide text-muted-foreground">
            Aktivitas Terbaru{' '}
          </CardDescription>
        </View>
      </CardHeader>
      <Separator className="m-auto mb-1 mt-4 w-[19em]" />
      <CardContent className="flex flex-col justify-between gap-0 px-2 py-1">
        {HistoryLink.slice(0, 3).map((item, index) => {
          return (
            <ActivityCard
              key={index}
              Img={item.Img}
              label={item.label}
              date={item.date}
              amount={item.amount}
              status={item.status}
              isLastStep={index === 2}
            />
          );
        })}
      </CardContent>
      <Separator className="m-auto mb-4 mt-3 w-[19em]" />
      <Button
        onPress={() => router.push('/(tabs)/(activity)')}
        variant={'ghost'}
        className={cn('m-auto w-[19em] gap-2 border border-primary')}>
        <Text className={cn('mx-0 p-0 text-xs text-primary group-active:text-primary/80')}>
          Lihat Semua
        </Text>
        <Icon as={ChevronRight} size={15} className="mx-0 ml-0 text-primary" />
      </Button>
    </Card>
  );
}
