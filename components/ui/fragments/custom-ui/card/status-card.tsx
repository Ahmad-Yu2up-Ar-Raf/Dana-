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
const StatusCard = () => {
  return (
    <Card className="w-full max-w-sm rounded-b-none bg-primary/70 text-primary-foreground">
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle className="text-primary-foreground">Your Balance</CardTitle>
          <CardDescription className="text-primary-foreground">
            Rp 234.420
          </CardDescription>
        </View>
      </CardHeader>
      <CardContent>
        <View className="w-full justify-center gap-4"></View>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <Text>Subscribe</Text>
        </Button>
        <Button variant="outline" className="w-full">
          <Text>Later</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
