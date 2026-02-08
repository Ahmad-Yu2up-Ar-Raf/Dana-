import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import {
  GroupedInput,
  GroupedInputItem,
} from '@/components/ui/fragments/custom-ui/form/input-form';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { Spinner } from '@/components/ui/fragments/shadcn-ui/spinner';
import * as React from 'react';
import { useForgotPassword } from '@/hooks/Useforgotpassword ';

export function ForgotPasswordForm() {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    emailRef,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForgotPassword();

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
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
      </GroupedInput>

      <Button disabled={isSubmitting} className="w-full gap-2" onPress={handleSubmit}>
        {isSubmitting && <Spinner className="text-primary-foreground" size="sm" />}
        <Text>{isSubmitting ? 'Sending...' : 'Reset your password'}</Text>
      </Button>
    </>
  );
}
