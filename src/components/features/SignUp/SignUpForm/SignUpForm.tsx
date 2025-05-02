import React, { useState } from 'react';

import { PageFormWrapper } from '../../../common/PageFormWrapper';
import { EmailField } from '../../../common/EmailField';
import { PasswordField } from '../../../common/PasswordField';
import { PrimaryButton } from '../../../common/PrimaryButton';

export const SignUpForm = () => {
  // TODO
  const [email, setEmail] = useState('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // TODO
  const [password, setPassword] = useState('');
  const handlePasswordChange = () => {
    setPassword('');
  };

  // TODO
  const handleSignUpClick = () => {};

  // TODO
  const handleFormSubmit = () => {};

  return (
    <PageFormWrapper formAction={handleFormSubmit}>
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

      <PasswordField
        label={'Password'}
        value={password}
        onChange={handlePasswordChange}
        uiOptions={{
          hint: 'At lease 8 characters',
        }}
      />

      <PrimaryButton
        buttonText={{
          textValue: 'Sign up',
          styles: 'text-neutral-0 text-preset-3',
        }}
        onClick={handleSignUpClick}
        buttonStyles={
          'focus:shadow-primarybutton-focus bg-blue-500 px-200 py-150 hover:bg-blue-700 focus:bg-blue-500'
        }
      />
    </PageFormWrapper>
  );
};
