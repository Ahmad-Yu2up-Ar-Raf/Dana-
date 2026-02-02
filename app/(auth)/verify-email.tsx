import { VerifyEmailForm } from '@/components/ui/core/feature/auth/verify-email-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
 
import VerifyEmailSvg from '@/assets/svg/auth/verify-email';
export default function VerifyEmailScreen() {
  return (
    <AuthLayout
      signInGoogleButton={false}
      description="Enter the verification code sent to your email"
      title="Verify your email"
      svg={<VerifyEmailSvg />}>
      <VerifyEmailForm />
    </AuthLayout>
  );
}
