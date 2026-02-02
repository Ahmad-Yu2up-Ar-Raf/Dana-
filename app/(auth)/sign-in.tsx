import { SignInForm } from '@/components/ui/core/feature/auth/sign-in-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';

import * as React from 'react';

export default function SignInScreen() {
  return (
    <AuthLayout className="mb-10" formType="login">
      <SignInForm />
    </AuthLayout>
  );
}
