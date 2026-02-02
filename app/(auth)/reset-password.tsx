import ResetPassword from '@/assets/svg/auth/reset-password';
import { ResetPasswordForm } from '@/components/ui/core/feature/auth/reset-password-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import * as React from 'react';

export default function ResetPasswordScreen() {
  return (
    <AuthLayout
      svg={<ResetPassword />}
      signInGoogleButton={false}
      title="Reset your password"
      className='mb-4'
      description="Enter your new password to reset it">
      <ResetPasswordForm />
    </AuthLayout>
  );
}
