import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import {
  GroupedInput,
  GroupedInputItem,
} from '@/components/ui/fragments/custom-ui/form/input-form';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/fragments/shadcn-ui/spinner';
import { Eye, EyeOffIcon } from 'lucide-react-native';
import * as React from 'react';
import { useSignIn } from '@/hooks/UseSignin';

export function SignInForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    formData,
    errors,
    touched,
    isSubmitting,
    emailRef,
    passwordRef,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useSignIn();

  return (
    <>
      <GroupedInput>
        <GroupedInputItem
          disabled={isSubmitting}
          ref={emailRef}
          label="Email"
          placeholder="m@example.com"
          value={formData.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={touched.email ? errors.email : undefined}
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <GroupedInputItem
          disabled={isSubmitting}
          ref={passwordRef}
          label="Password"
          placeholder="••••••"
          value={formData.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={touched.password ? errors.password : undefined}
          secureTextEntry={!showPassword}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          rightComponent={
            <Button
              disabled={isSubmitting}
              variant="ghost"
              className="absolute right-0 bg-none"
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Icon
                  className={cn(
                    errors.password && touched.password
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                  )}
                  as={Eye}
                  size={22}
                />
              ) : (
                <Icon
                  className={cn(
                    errors.password && touched.password
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                  )}
                  as={EyeOffIcon}
                  size={22}
                />
              )}
            </Button>
          }
        />
      </GroupedInput>

      <Button disabled={isSubmitting} className="w-full gap-2" onPress={handleSubmit}>
        {isSubmitting && <Spinner className="text-primary-foreground" size="sm" />}
        <Text>{isSubmitting ? 'Signing In...' : 'Sign In'}</Text>
      </Button>
    </>
  );
}
