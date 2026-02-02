import * as React from 'react';
import { View } from '@/components/ui/fragments/shadcn-ui/view';
import StatusCard from '@/components/ui/fragments/custom-ui/card/status-card';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
import {
  BanknoteArrowUp,
  CircleDollarSign,
  CircleFadingArrowUp,
  Coins,
  HandCoinsIcon,
} from 'lucide-react-native';
import MenuCard from '@/components/ui/fragments/custom-ui/card/menu-card';

export default function Screen() {
  return (
    <View className="flex-1 items-center   my-[3em] gap-3 p-4">
      <StatusCard />

      <View className="bottom-safe h-[4.4em] flex-row items-center justify-center gap-x-2 bg-background px-1 py-3">
        <Button className="ap-2.5 h-full w-1/2 px-5">
          <Icon as={CircleFadingArrowUp} size={21} className="text-primary-foreground" />
          <Text className="text-[15.5px] font-semibold">Send</Text>
        </Button>
        <Button variant={'outline'} className="h-full w-1/2 gap-2.5 px-5">
          <Icon as={CircleDollarSign} size={21} />
          <Text className="text-[15.5px] font-semibold">Request</Text>
        </Button>
      </View>
      <MenuCard />
    </View>
  );
}
