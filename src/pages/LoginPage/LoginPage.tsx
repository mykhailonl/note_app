import { useNavigate } from 'react-router-dom';

import { Divider } from '../../components/common/Divider';
import { FormFooter } from '../../components/common/FormFooter';
import { FormHeader } from '../../components/common/FormHeader';
import { PageWrapper } from '../../components/common/PageWrapper';
import { LoginForm } from '../../components/features/Login/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  // TODO optimize func, create logic
  const handleSignUp = () => {
    navigate('/signup');
  };

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
        <p className="text-preset-5 text-text-secondary">No account yet? </p>

        <button className="text-preset-5 text-text-primary cursor-pointer" onClick={handleSignUp}>
          &nbsp;Sign up
        </button>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
