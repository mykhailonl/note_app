import { Divider } from '../../components/common/Divider';
import { FormFooter } from '../../components/common/FormFooter';
import { FormHeader } from '../../components/common/FormHeader';
import { PageWrapper } from '../../components/common/PageWrapper';
import { SignUpForm } from '../../components/features/SignUp/SignUpForm';

// TODO maybe move last block into reusable component?
// TODO change last button block?

export const SignUpPage = () => {
  // TODO
  const handleLogin = () => {};

  return (
    <PageWrapper>
      <FormHeader
        textBlock={{
          headerText: 'Create Your Account',
          pText: 'Sign up to start organizing your notes and boost your productivity.',
        }}
      />

      <SignUpForm />

      <FormFooter />

      <Divider />

      <div className="flex justify-center">
        <p className="text-preset-5 text-neutral-600">Already have an account? </p>

        <button className="text-preset-5 text-neutral-950" onClick={handleLogin}>
          &nbsp;Login
        </button>
      </div>
    </PageWrapper>
  );
};

export default SignUpPage;
