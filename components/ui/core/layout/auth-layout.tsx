import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Link } from '../../fragments/shadcn-ui/link';
import { SocialConnections } from '../feature/auth/social-connections';
import { Separator } from '../../fragments/shadcn-ui/separator';
import Wellcome from '@/assets/svg/auth/welcome';
import { View } from '../../fragments/shadcn-ui/view';
import { Text } from '../../fragments/shadcn-ui/text';
import { ScrollView } from 'react-native-gesture-handler';
import { cn } from '@/lib/utils';
type AuthLayoutProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  quote?: string;
  svg?: React.ReactNode;
  loading?: boolean;
  className?: string;
  numberOfIterations?: number;
  formType?: 'login' | 'register' | undefined; // ✅ Allow undefined
  signInGoogleButton?: boolean;
};
const AuthLayout = ({
  formType,
  numberOfIterations,
  className,
  svg = <Wellcome />,
  loading = false,
  signInGoogleButton = true,
  title = `Welcome Back!`,
  quote = `Your ideas are not just talk — make them happen.`,
  description = `The journey is about to begin`,
  ...props
}: AuthLayoutProps) => {
  const formTypeLabel = formType == 'register' ? 'Login' : 'Register';
  const formTypeLink = formType == 'register' ? '/(auth)/sign-in' : '/(auth)/sign-up';
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-18 sm:py-4 sm:p-6 mt-safe content-center "
      keyboardDismissMode="interactive">
      <Card className="relative flex h-fit w-full max-w-sm content-center   m-auto justify-center gap-5 overflow-hidden border-0 bg-background p-7 shadow-none sm:border-border dark:bg-foreground">
        <CardHeader className="relative mb-3 flex w-full flex-col gap-0 p-0">
          <View className="relative -mt-[8em] mb-4 flex h-fit max-h-[25em] w-full content-center items-center justify-center overflow-hidden">
            <View
              className={cn(
                'flex h-fit scale-[.45] content-center items-center overflow-hidden pt-[20em]',
                className
              )}>
              {svg}
            </View>
          </View>
          <CardTitle className="mb-0.5 text-center text-2xl sm:text-left">{title}</CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground sm:text-left dark:text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-0 gap-4 p-0 dark:bg-foreground">
          <View className="gap-5">{props.children}</View>
        </CardContent>
        {signInGoogleButton && (
          <>
            <CardFooter className="relative mt-0 flex w-full flex-col gap-4 overflow-hidden p-0">
              <View className="flex-row items-center">
                <Separator className="flex-1" />
                <Text className="px-4 text-sm text-muted-foreground">or continue with</Text>
                <Separator className="flex-1" />
              </View>
              <SocialConnections />
              {formType && (
                <Text className="mt-2 text-center text-sm text-muted-foreground dark:text-muted-foreground">
                  {formType == 'register' ? ` alredy have an account? ` : 'don`t have an account? '}
                  <Link href={formTypeLink} className="underline underline-offset-4">
                    {formTypeLabel}
                  </Link>
                </Text>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </ScrollView>
  );
};

export default AuthLayout;
