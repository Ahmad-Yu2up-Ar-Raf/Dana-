import { Onboarding, useOnboarding } from '@/components/ui/fragments/shadcn-ui/onboarding';

import { Redirect } from 'expo-router';
import Onboarding1 from '@/assets/svg/onboarding/onboarding-1';
import Onboarding2 from '@/assets/svg/onboarding/onboarding-2';
import Onboarding3 from '@/assets/svg/onboarding/onboarding-3';
import Onboarding4 from '@/assets/svg/onboarding/onboarding-4';
import { View } from '../../fragments/shadcn-ui/view';

export const OnboardingPresets = {
  welcome: [
    {
      id: 'welcome',
      title: 'Selamat Datang di DANA',
      description: 'Kelola uangmu, bayar, dan terima dengan mudah.',
      icon: (
        <View className="flex h-fit scale-[.55] content-center items-center justify-start overflow-hidden">
          <Onboarding1 className=" " />
        </View>
      ),
    },
    {
      id: 'features',
      title: 'Bayar & Kirim Cepat',
      description: 'Transaksi instan untuk belanja, tagihan, dan transfer.',
      icon: (
        <View className="flex h-fit scale-[.55] content-center items-center justify-start overflow-hidden">
          <Onboarding2 className=" " />
        </View>
      ),
    },
    {
      id: 'personalize',
      title: 'Atur Sesuai Kamu',
      description: 'Personalisasi fitur dan notifikasi sesuai kebutuhan.',
      icon: (
        <View className="flex h-fit scale-[.50] content-center items-center justify-start overflow-hidden">
          <Onboarding3 className=" " />
        </View>
      ),
    },
    {
      id: 'ready',
      title: 'Siap Digunakan',
      description: 'Mulai pakai DANA — aman, cepat, dan terpercaya.',
      icon: (
        <View className="flex h-fit scale-[.55] content-center items-center justify-start overflow-hidden">
          <Onboarding4 className=" " />
        </View>
      ),
    },
  ],
};


export function OnboardingDemo() {
  const { hasCompletedOnboarding, completeOnboarding, skipOnboarding } = useOnboarding();

  if (hasCompletedOnboarding) {
    return <Redirect href={'/(auth)/sign-in'} />;
  }

  return (
    <>
      <Onboarding
        steps={OnboardingPresets.welcome}
        onComplete={completeOnboarding}
        onSkip={skipOnboarding}
        showSkip={true}
        showProgress={true}
        swipeEnabled={true}
        primaryButtonText="Get Started"
        skipButtonText="Skip"
        nextButtonText="Next"
        backButtonText="Back"
      />
      {/* <View className="absolute z-10 h-full w-full bg-card" /> */}
    </>
  );
}
