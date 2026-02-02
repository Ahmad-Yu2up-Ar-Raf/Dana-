import Accounting from '@/assets/svg/auth/register';
import { SignUpForm } from '@/components/ui/core/feature/auth/sign-up-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function SignUpScreen() {
  return (
    <AuthLayout
      className="scale-[.40]"
      formType="register"
      title="Lets Get Started!"
      description="Create an account to continue"
      svg={<Accounting />}>
      <SignUpForm />
    </AuthLayout>
  );
}
