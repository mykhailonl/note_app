import { FormHeader } from '../../components/common/FormHeader';
import { LoginFooter } from '../../components/features/LoginFooter';
import { LoginForm } from '../../components/features/LoginForm';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Divider } from '../../components/common/Divider';

export const LoginPage = () => {
  // TODO optimize func, create logic
  const handleSignUp = () => {};

  return (
    <PageWrapper>
      <FormHeader
        textBlock={{
          headerText: 'Welcome to Note',
          pText: 'Please log in to continue',
        }}
      />

      <LoginForm />

      <LoginFooter />

      <Divider />

      <div className="flex justify-center">
        <p className="text-preset-5 text-neutral-600">No account yet? </p>

        <button className="text-preset-5 text-neutral-950" onClick={handleSignUp}>
          &nbsp;Sign up
        </button>
      </div>
    </PageWrapper>
  );
};
