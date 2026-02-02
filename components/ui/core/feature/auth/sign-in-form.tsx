import { Button } from '@/components/ui/fragments/shadcn-ui/button';

import {
  GroupedInput,
  GroupedInputItem,
} from '@/components/ui/fragments/custom-ui/form/input-form';

import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { useToast } from '@/components/ui/fragments/shadcn-ui/toast';
import { useSignIn } from '@clerk/clerk-expo';
import { Eye, EyeOffIcon, Lock, Mail } from 'lucide-react-native';
import * as React from 'react';
import { TextInput } from 'react-native';

import { useFormValidation, validationRules } from '@/hooks/Useformvalidation';
import { Icon } from '@/components/ui/fragments/shadcn-ui/icon';
import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/fragments/shadcn-ui/link';
import { Spinner } from '@/components/ui/fragments/shadcn-ui/spinner';

export function SignInForm() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const { success, error: showError } = useToast();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  // 🔥 Field refs for auto-focus
  const emailRef = React.useRef<TextInput>(null!);
  const passwordRef = React.useRef<TextInput>(null!);

  // 🔥 REAL-TIME FORM VALIDATION
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    registerField,
    setFieldError,
  } = useFormValidation({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      if (!isLoaded) return;

      try {
        const signInAttempt = await signIn.create({
          identifier: values.email,
          password: values.password,
        });

        if (signInAttempt.status === 'complete') {
          await setActive({ session: signInAttempt.createdSessionId });
          success('Welcome back!', 'You have successfully signed in.');
          return;
        }

        console.error(JSON.stringify(signInAttempt, null, 2));
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          const isEmailMessage =
            err.message.toLowerCase().includes('identifier') ||
            err.message.toLowerCase().includes('email');

          if (isEmailMessage) {
            setFieldError('email', err.message);
          } else {
            setFieldError('password', err.message);
          }
          showError('Sign In Failed', err.message);
          return;
        }
        console.error(JSON.stringify(err, null, 2));
        setLoading(false);
        showError('Error', 'An unexpected error occurred. Please try again.');
      }
    },
  });

  // Register fields with validation rules
  React.useEffect(() => {
    registerField({ name: 'email', rules: validationRules.email, ref: emailRef });
    registerField({ name: 'password', rules: validationRules.password, ref: passwordRef });
  }, [registerField]);

  return (
    <>
      <GroupedInput>
        <GroupedInputItem
          disabled={isLoading}
          ref={emailRef}
          label="Email"
          // showError={false}
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
          disabled={isLoading}
          ref={passwordRef}
          label="Password"
          placeholder="••••••"
          // showError={false}
          value={formData.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={touched.password ? errors.password : undefined}
          secureTextEntry={!showPassword}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          rightComponent={
            <Button
              disabled={isLoading}
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
        <Link href={'/(auth)/forgot-password'} className="underline text-sm underline-offset-4">
          Forgot Password ?
        </Link>
      </GroupedInput>

      <Button disabled={isLoading} className="w-full gap-5" onPress={handleSubmit}>
        {isLoading && <Spinner className="size-2" variant="default" size="sm" />}
        <Text>{isLoading ? 'Signing In...' : 'Sign In'}</Text>
      </Button>
    </>
  );
}
