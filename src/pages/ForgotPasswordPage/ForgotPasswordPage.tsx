import { useState } from 'react';

import { FormHeader } from '../../components/common/FormHeader';
import { EmailField } from '../../components/common/EmailField';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { PageWrapper } from '../../components/common/PageWrapper';
import { PageFormWrapper } from '../../components/common/PageFormWrapper';

export const ForgotPasswordPage = () => {
  // TODO
  const [email, setEmail] = useState('');
  const handleEmailChange = () => {
    setEmail('');
  };

  // TODO
  const handleButtonClick = () => {};

  // TODO formAction
  const submitAction = () => {};

  return (
    <PageWrapper>
      <FormHeader
        textBlock={{
          headerText: 'Forgotten your password?',
          pText: 'Enter your email below, and we’ll send you a link to reset it.',
        }}
      />

      <PageFormWrapper formAction={submitAction}>
        <EmailField
          label={{
            labelText: 'Email Address',
            labelFor: 'email',
          }}
          input={{
            value: email,
            onChange: handleEmailChange,
          }}
        />

        <PrimaryButton
          buttonText={{
            textValue: 'Send Reset Link',
            styles: 'text-neutral-0 text-preset-3',
          }}
          onClick={handleButtonClick}
          buttonStyles={
            'focus:shadow-primarybutton-focus bg-blue-500 px-200 py-150 hover:bg-blue-700 focus:bg-blue-500'
          }
        />
      </PageFormWrapper>
    </PageWrapper>
  );
};

export default ForgotPasswordPage;
