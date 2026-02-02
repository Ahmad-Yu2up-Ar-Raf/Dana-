import * as React from 'react';
import { View } from '@/components/ui/fragments/shadcn-ui/view';
import StatusCard from '@/components/ui/fragments/custom-ui/card/status-card';

export default function Screen() {
  return (
    <>
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <StatusCard />
      </View>
    </>
  );
}
