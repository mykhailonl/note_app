import React, { useState } from 'react';

import { InputField } from '../../../common/InputField';
import { PageFormWrapper } from '../../../common/PageFormWrapper';
import { PrimaryButton } from '../../../common/PrimaryButton';

export const SignUpForm = () => {
  //#region email
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  //#endregion

  //#region password
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  //#endregion

  // TODO
  const handleSignUpClick = () => {};

  // TODO
  const handleFormSubmit = () => {
    //todo remove after
    setPasswordError(true);
    setEmailError(true);
  };

  return (
    <PageFormWrapper formAction={handleFormSubmit}>
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

      <InputField
        label={{ labelText: 'Password' }}
        input={{
          value: password,
          onChange: handlePasswordChange,
          type: 'password',
          inputIconShown: 'right',
          disabled: false,
        }}
        hint={{
          hintShown: true,
          hintText: 'At least 8 characters',
        }}
        validation={{
          error: passwordError,
        }}
      />

      <PrimaryButton
        buttonText={{
          textValue: 'Sign up',
          styles: 'text-neutral-0 text-preset-3',
        }}
        onClick={handleSignUpClick}
        buttonStyles={'bg-blue-500 px-200 py-150 flex items-center justify-center'}
      />
    </PageFormWrapper>
  );
};
