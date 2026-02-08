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
  ArrowDown,
  ArrowUp,
  Banknote,
  ChevronRight,
  CircleStar,
  CreditCardIcon,
  Crosshair,
  Gamepad,
  Gamepad2,
  Goal,
  GoalIcon,
  Grid,
  LayoutDashboard,
  Lightbulb,
  LucideIcon,
  Phone,
  Plus,
  Target,
  TicketPercent,
  UsersRound,
  Wallet,
} from 'lucide-react-native';
import { cn } from '@/lib/utils';
import { View } from '../../shadcn-ui/view';
import { Text } from '../../shadcn-ui/text';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Separator } from '../../shadcn-ui/separator';
import { Progress } from '../../shadcn-ui/progress';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { THEME } from '@/lib/theme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/fragments/shadcn-ui/avatar';
interface DanaGoalProps {
  targetAmount: string | number;

  title: string;
  progress: number;
}

const DANA_GOAL: DanaGoalProps[] = [
  {
    title: 'Kawinan',
    targetAmount: '1.500.000',

    progress: 40,
  },
  {
    title: 'Ngopi',
    targetAmount: '1.500.000',

    progress: 40,
  },
];
const width = Dimensions.get('window').width;
const CARD_WIDTH = width * 0.41;
export default function BelanceCard() {
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
    <Card className="w-full max-w-sm gap-6 rounded-3xl bg-card px-0.5 pb-7 pt-4 text-primary-foreground shadow-sm">
      <CardHeader className="file: w-full flex-row items-end justify-between rounded-2xl px-4">
        <View className="flex-row items-center gap-2">
          <Image
            source={require('@/assets/images/brand/app/adaptive-icon.png')}
            resizeMode="contain"
            className="size-11"
            // style={LOGO_STYLE}
          />
          <View className="gap-0.5">
            <CardDescription className="text-xs font-medium text-muted-foreground/80">
              Saldo Utama
            </CardDescription>
            <CardTitle className="text-xl font-bold tracking-wide">Rp 238.420</CardTitle>
          </View>
        </View>
        <Button
          //   onPress={actionFunction}
          size={'sm'}
          className={cn(
            'h-[35px] gap-1.5 px-[23px]'
            // THEME[primaryColor].background,
          )}>
          {/* <Icon as={Plus} size={18} /> */}

          <Text className={cn('text-sm')}>Top Up</Text>
        </Button>
      </CardHeader>
      <CardContent className="gap-y-3.5 px-3">
        <View className="w-full flex-row items-center justify-between rounded-2xl border border-border px-3.5 py-2.5">
          <View className="w-1/2 flex-row items-center justify-start gap-2.5">
            <Button
              size={'sm'}
              variant={'ghost'}
              className="  h-fit w-fit rounded-full bg-green-100 p-1">
              <Icon as={ArrowUp} size={14} className="rounded-full text-green-500" />
            </Button>
            <View>
              <Text variant={'muted'} className="text-[11px] font-medium text-muted-foreground/70">
                Pemasukan
              </Text>
              <Text variant={'h3'} className="text-base font-medium text-green-500">
                Rp 1.500.000
              </Text>
            </View>
          </View>
          <Separator orientation="vertical" className="h-full bg-border" />
          <View className="w-1/2 flex-row items-center justify-end gap-2.5">
            <Button
              size={'sm'}
              variant={'destructive'}
              className="  h-fit w-fit rounded-full bg-red-100 p-1">
              <Icon as={ArrowDown} size={14} className="rounded-full text-destructive" />
            </Button>
            <View>
              <Text variant={'muted'} className="text-[11px] font-medium text-muted-foreground/70">
                Pengeluaran
              </Text>
              <Text variant={'h3'} className="text-base font-medium text-destructive">
                Rp 2.261.580
              </Text>
            </View>
          </View>
        </View>
        <View className="h-[9.5em] w-full flex-row items-center justify-between overflow-hidden">
          <Button
            variant={'ghost'}
            className="h-full w-[48.5%] flex-col items-start justify-start gap-3.5 overflow-hidden rounded-2xl border border-border p-0 py-2.5">
            <View className="flex-row items-center justify-start gap-3 px-3.5">
              <Icon as={GoalIcon} size={21} className="text-red-500" />

              <View>
                <Text variant={'h3'} className="text-[13px] font-medium">
                  Dana Goal
                </Text>
                <Text variant={'muted'} className="text-[10px] font-medium text-primary">
                  {DANA_GOAL.length} Tujuan Aktif
                </Text>
              </View>
            </View>
            <View className="flex-1">
              <Carousel
                ref={ref}
                loop={false}
                width={CARD_WIDTH}
                height={width / 6}
                autoPlay
                autoPlayInterval={2900}
                onProgressChange={progress}
                scrollAnimationDuration={800}
                data={DANA_GOAL}
                renderItem={({ item }) => (
                  <View className="h-fit w-full flex-col gap-3 rounded-none px-3">
                    <View className="w-full flex-row items-center justify-between">
                      <Text className="font-medium text-foreground/80">{item.title}</Text>
                      <Icon as={ChevronRight} size={15} className=" " />
                    </View>

                    <View className="w-full flex-col items-center justify-between gap-1.5">
                      <View className="w-full flex-row items-center justify-between">
                        <Text className="tracking-tighter text-primary">
                          Rp {item.targetAmount}
                        </Text>
                        <Text
                          variant={'muted'}
                          className="text-[11px] font-medium text-muted-foreground/70">
                          {item.progress}%
                        </Text>
                      </View>
                      <Progress value={item.progress} className="h-1 w-full" />
                    </View>
                  </View>
                )}
              />
              <Pagination.Basic
                size={5}
                progress={progress}
                data={DANA_GOAL}
                activeDotStyle={{
                  overflow: 'hidden',
                  backgroundColor: THEME.light.primary,
                }}
                dotStyle={{ backgroundColor: THEME.light.mutedForeground, borderRadius: 20 }}
                containerStyle={{ gap: 4, marginTop: 10 }}
                onPress={onPressPagination}
              />
            </View>
          </Button>
          <Button
            variant={'ghost'}
            className="h-full w-[48.5%] flex-col items-start justify-start gap-4 overflow-hidden rounded-2xl border border-border p-0 py-2.5">
            <View className="flex-row items-center justify-start gap-2.5 px-3.5">
              <Icon as={UsersRound} size={20} className="text-orange-500" />

              <View>
                <Text variant={'h3'} className="text-[13px] font-medium">
                  Rek. Bersama
                </Text>
                <Text variant={'muted'} className="text-[10px] font-medium text-primary">
                  Kamu pemiliknya
                </Text>
              </View>
            </View>
            <View className="flex-1">
              <Button
                variant="ghost"
                size={'sm'}
                className="h-fit w-full flex-row items-end justify-between gap-3 rounded-none">
                <View className="w-fit gap-0.5">
                  <Text
                    variant={'muted'}
                    className="text-left text-[11px] font-medium text-muted-foreground/70">
                    Balance{' '}
                  </Text>
                  <Text className="tracking-tighter text-primary">Rp 5.000.000</Text>
                </View>
                <Icon as={ChevronRight} size={15} className=" " />
              </Button>
            </View>
            <View className="w-full flex-row items-start justify-between pl-3 pr-6">
              <Text variant={'muted'} className="text-[11px] font-medium text-muted-foreground/70">
                Member
              </Text>
              <View className="flex-row">
                <Avatar
                  alt="@mrzachnugent"
                  className="-mr-2 size-6 border-2 border-background web:border-0 web:ring-2 web:ring-background">
                  <AvatarImage source={{ uri: 'https://github.com/mrzachnugent.png' }} />
                  <AvatarFallback>
                    <Text>ZN</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar
                  alt="@leerob"
                  className="-mr-2 size-6 border-2 border-background web:border-0 web:ring-2 web:ring-background">
                  <AvatarImage source={{ uri: 'https://github.com/leerob.png' }} />
                  <AvatarFallback>
                    <Text>LR</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar
                  alt="@evilrabbit"
                  className="-mr-2 size-6 border-2 border-background web:border-0 web:ring-2 web:ring-background">
                  <AvatarImage source={{ uri: 'https://github.com/evilrabbit.png' }} />
                  <AvatarFallback>
                    <Text>ER</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
            </View>
          </Button>
        </View>
        <View className="h-fit w-full flex-row items-center justify-between overflow-hidden">
          <Button
            variant={'outline'}
            className="h-full w-[48.5%] flex-col items-start justify-start gap-3.5 overflow-hidden rounded-2xl p-0 py-2.5">
            <View className="flex-row items-center justify-start gap-2.5 px-3.5">
              <Icon as={CircleStar} size={21} className="text-yellow-500" />

              <View>
                <Text variant={'h3'} className="text-[13px] font-medium">
                  eMas
                </Text>
                <Text variant={'muted'} className="text-[10px] font-medium text-primary">
                  tidak punya eMas
                </Text>
              </View>
            </View>
          </Button>
          <Button
            variant={'outline'}
            className="h-full w-[48.5%] flex-col items-start justify-start gap-3.5 overflow-hidden rounded-2xl border p-0 py-2.5">
            <View className="flex-row items-center justify-start gap-2.5 px-3.5">
              <Icon as={CreditCardIcon} size={21} className="text-primary" />

              <View>
                <Text variant={'h3'} className="text-[13px] font-medium">
                  Kartu Kredit
                </Text>
                <Text variant={'muted'} className="text-[10px] font-medium text-primary">
                  2 Kartu
                </Text>
              </View>
            </View>
          </Button>
        </View>
      </CardContent>
    </Card>
  );
}
