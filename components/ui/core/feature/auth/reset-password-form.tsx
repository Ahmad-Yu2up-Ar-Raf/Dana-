import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import {
  GroupedInput,
  GroupedInputItem,
} from '@/components/ui/fragments/custom-ui/form/input-form';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { Spinner } from '@/components/ui/fragments/shadcn-ui/spinner';
import * as React from 'react';
import { useResetPassword } from '@/hooks/Useresetpassword';

export function ResetPasswordForm() {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    passwordRef,
    codeRef,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useResetPassword();

  return (
    <>
      <GroupedInput>
        <GroupedInputItem
          disabled={isSubmitting}
          ref={passwordRef}
          label="New Password"
          placeholder="••••••••"
          value={formData.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={touched.password ? errors.password : undefined}
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => codeRef.current?.focus()}
        />
        <GroupedInputItem
          disabled={isSubmitting}
          ref={codeRef}
          label="Verification Code"
          placeholder="123456"
          value={formData.code}
          onChangeText={handleChange('code')}
          onBlur={handleBlur('code')}
          error={touched.code ? errors.code : undefined}
          keyboardType="numeric"
          autoComplete="sms-otp"
          textContentType="oneTimeCode"
          returnKeyType="send"
          maxLength={6}
          onSubmitEditing={handleSubmit}
        />
      </GroupedInput>

      <Button disabled={isSubmitting} className="w-full gap-2" onPress={handleSubmit}>
        {isSubmitting && <Spinner className="text-primary-foreground" size="sm" />}
        <Text>{isSubmitting ? 'Resetting...' : 'Reset Password'}</Text>
      </Button>
    </>
  );
}
