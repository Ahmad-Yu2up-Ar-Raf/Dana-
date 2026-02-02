import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import {
  GroupedInput,
  GroupedInputItem,
} from '@/components/ui/fragments/custom-ui/form/input-form';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { useToast } from '@/components/ui/fragments/shadcn-ui/toast';
import { useSignIn } from '@clerk/clerk-expo';
import { router, useLocalSearchParams } from 'expo-router';
import { Mail } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';

export function ForgotPasswordForm() {
  const { email: emailParam = '' } = useLocalSearchParams<{ email?: string }>();
  const { signIn, isLoaded } = useSignIn();
  const { success, error: showError } = useToast();

  const [email, setEmail] = React.useState(emailParam);
  const [error, setError] = React.useState('');

  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Invalid email format');
      return false;
    }

    setError('');
    return true;
  };

  const onSubmit = async () => {
    if (!validateForm()) {
      showError('Validation Error', 'Please enter a valid email address.');
      return;
    }

    if (!isLoaded) return;

    try {
      await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      });

      success('Code Sent', 'Please check your email for the reset code.');
      router.push(`/(auth)/reset-password?email=${email}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        showError('Reset Failed', err.message);
        return;
      }
      console.error(JSON.stringify(err, null, 2));
      showError('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <GroupedInput>
        <GroupedInputItem
          label="Email"
          placeholder="m@example.com"
          icon={Mail}
          value={email}
          onChangeText={setEmail}
          error={error}
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={onSubmit}
        />
      </GroupedInput>

      <Button className="w-full" onPress={onSubmit}>
        <Text>Reset your password</Text>
      </Button>
    </>
  );
}
