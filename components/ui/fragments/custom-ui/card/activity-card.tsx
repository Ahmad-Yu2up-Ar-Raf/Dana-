import { Image } from 'react-native';
import React from 'react';
import { HistoryCardProps } from './history-card';
import { Button } from '../../shadcn-ui/button';
import { cn } from '@/lib/utils';
import { router } from 'expo-router';
import { batasiHuruf } from '@/hooks/useWord';
import { Separator } from '../../shadcn-ui/separator';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';
import { THEME } from '@/lib/theme';
import { formatDistance, format } from 'date-fns';
import { id } from 'date-fns/locale';
export default function ActivityCard({
  Img,
  label,
  date,
  amount,
  status,
  isLastStep,
}: HistoryCardProps & { isLastStep: boolean }) {
  const titleHistory = batasiHuruf(label, 18);
  const dateFormated = format(date, 'EEEE, MMMM do, yyyy', { locale: id });
  return (
    <Button
      variant={'ghost'}
      className={cn(
        // buttonVariants({ variant: 'ghost' }),

        'h-[4.7em] w-full flex-row justify-between py-4 active:bg-accent'
      )}>
      <View className="relative h-fit flex-row items-center gap-3">
        <View
          style={{ backgroundColor: THEME.light.card }}
          className="o relative z-20 flex h-full w-fit flex-col content-center items-center justify-center rounded-xl border border-border bg-card p-2">
          <Image
            source={Img}
            resizeMode={label == 'PLN Token' ? 'cover' : 'contain'}
            className="z-2 m-auto size-7 overflow-hidden rounded-xl bg-card"
            // style={LOGO_STYLE}
          />
          {!isLastStep && (
            <Separator
              orientation="vertical"
              className="absolute bottom-[-1.78em] z-10 h-full bg-muted-foreground/30"
            />
          )}
        </View>
        <View>
          <Text variant={'h3'} className="text-foreground/70">
            {titleHistory}
          </Text>
          <Text variant={'small'} className="text-xs tracking-wide text-muted-foreground/50">
            {dateFormated}
          </Text>
        </View>
      </View>
      <Text
        variant={'large'}
        className={cn(
          status === 'income' ? 'text-green-500' : 'text-red-500',
          'text-sm font-semibold'
        )}>
        {status === 'income' ? '+' : '-'} Rp {amount}
      </Text>
    </Button>
  );
}
