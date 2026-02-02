import React from 'react';
import { View } from '../../shadcn-ui/view';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Button } from '../../shadcn-ui/button';
import { Text } from '../../shadcn-ui/text';
import { Icon } from '../../shadcn-ui/icon';
import { Copy, Plus } from 'lucide-react-native';
import { Image } from 'react-native';
const StatusCard = () => {
  return (
    <Card className="w-full max-w-sm rounded-b-none rounded-t-3xl bg-primary py-4 px-3.5   text-primary-foreground">
      <CardHeader className="w-full flex-row items-center justify-between p-0">
        <Image
          source={require('@/assets/images/logo-white.png')}
          resizeMode="contain"
          className="size-10"
          // style={LOGO_STYLE}
        />
        <View className="flex flex-row items-center gap-2">
          <Text className="text-sm font-medium leading-none tracking-tight text-primary-foreground">
            0123123123123
          </Text>
          <Button
            variant="secondary"
            size={'sm'}
            className="relative flex h-fit w-fit justify-center rounded-[4px] p-[4.5px]">
            <View
              className="relative -left-0.5 top-0.5 z-20 size-2.5 rounded-[3px] border border-background bg-primary fill-primary"
              style={{
                backgroundColor: '#108bea',
              }}
            />
            <View
              className="absolute bottom-[7px] right-[3.5px] z-10 size-2 rounded-[2px] bg-primary fill-primary"
              style={{
                backgroundColor: '#108bea',
              }}
            />
            {/* <Icon as={Copy} size={12} className="text-primary" /> */}
          </Button>
        </View>
      </CardHeader>
      <CardContent>
        <View className="w-full justify-center gap-4"></View>
      </CardContent>
      <CardFooter className="flex-row items-end p-0">
        <View className="flex-1 gap-1">
          <CardDescription className="text-[14.5px] font-light tracking-wide text-primary-foreground">
            Your Balance
          </CardDescription>
          <CardTitle className="text-[31px] text-primary-foreground">Rp 238.420</CardTitle>
        </View>
        <Button size={'sm'} variant="secondary" className="h-[35px] gap-1.5 px-4">
          <Icon as={Plus} size={18} className="text-primary" />
          <Text className="text-primary text-sm">Top Up</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
