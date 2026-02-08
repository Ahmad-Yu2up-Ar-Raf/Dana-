import BelanceCard from '@/components/ui/fragments/custom-ui/card/belance-card';
import FeatureCard from '@/components/ui/fragments/custom-ui/card/feature-card';
import ProfileCard from '@/components/ui/fragments/custom-ui/card/profile-card';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import { Wrapper } from '../(home)';
import { Image } from '@/components/ui/fragments/shadcn-ui/image';
import { it } from 'date-fns/locale';
import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
import { ChevronDown } from 'lucide-react-native';

interface WalletProps {
  title?: string;
  totalCard?: string;
  imageSource?: any;
  Wallet_Height?: number;
}
const width = Dimensions.get('window').width;

const walletData: WalletProps[] = [
  {
    title: 'Metode Pembayaran',
    totalCard: '4 KARTU',
    imageSource: require('@/assets/images/wallet/wallet-2.png'),
  },
  {
    title: 'Dompet Digital',
    totalCard: '5 KARTU',
    imageSource: require('@/assets/images/wallet/wallet-1.png'),
  },
];

const Index = () => {
  const Wallet_Height = (width / 7.5) * 4.4;

  return (
    <Wrapper edges={['bottom']} className=' pt-14 gap-10'>
      {walletData.map((item, index) => (
        <View key={index} className="relative flex-1 gap-4">
          <View className="w-full flex-row items-center justify-between px-5">
            <Text className="text-sm font-semibold uppercase text-muted-foreground/80">
              {item.title}
            </Text>
            <Text className="text-sm font-semibold text-muted-foreground/80">{item.totalCard}</Text>
          </View>
          <Image
            source={item.imageSource}
            width={width}
            height={item.Wallet_Height || Wallet_Height}
            contentFit="contain"
            showLoadingIndicator={true}
            showErrorFallback={true}
          />
          <Button
            variant={'outline'}
            size={'sm'}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2 items-center rounded-full">
            <Icon as={ChevronDown} size={18} />
            <Text>Buka</Text>
          </Button>
        </View>
      ))}
    </Wrapper>
  );
};

export default Index;
