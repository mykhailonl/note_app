import { Divider } from '../../components/common/Divider';
import { FormFooter } from '../../components/common/FormFooter';
import { FormHeader } from '../../components/common/FormHeader';
import { PageWrapper } from '../../components/common/PageWrapper';
import { LoginForm } from '../../components/features/Login/LoginForm';

const LoginPage = () => {
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

      <FormFooter />

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

export default LoginPage;
