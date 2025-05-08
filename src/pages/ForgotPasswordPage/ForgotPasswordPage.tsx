import React, { useState } from 'react';

import { FormHeader } from '../../components/common/FormHeader';
import { InputField } from '../../components/common/InputField';
import { PageFormWrapper } from '../../components/common/PageFormWrapper';
import { PageWrapper } from '../../components/common/PageWrapper';
import { PrimaryButton } from '../../components/common/PrimaryButton';

export const ForgotPasswordPage = () => {
  //#region email
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  //#endregion

  // TODO
  const handleButtonClick = () => {};

  // TODO formAction
  const submitAction = () => {
    setEmailError(false); //todo remove after
  };

  return (
    <PageWrapper>
      <FormHeader
        textBlock={{
          headerText: 'Forgotten your password?',
          pText: 'Enter your email below, and we’ll send you a link to reset it.',
        }}
      />

      <PageFormWrapper formAction={submitAction}>
        <InputField
          label={{ labelText: 'Email Address' }}
          input={{
            value: email,
            onChange: handleEmailChange,
            type: 'email',
            inputIconShown: 'none',
            placeholderText: 'email@example.com',
            disabled: false,
          }}
          hint={{
            hintShown: false,
          }}
          validation={{
            error: emailError,
          }}
        />

        <PrimaryButton
          buttonText={{
            textValue: 'Send Reset Link',
            styles: 'text-neutral-0 text-preset-3',
          }}
          onClick={handleButtonClick}
          buttonStyles={'flex justify-center items-center bg-blue-500 px-200 py-150'}
        />
      </PageFormWrapper>
    </PageWrapper>
  );
};

export default ForgotPasswordPage;
