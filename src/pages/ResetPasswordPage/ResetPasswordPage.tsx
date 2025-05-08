import React, { useState } from 'react';

import { FormHeader } from '../../components/common/FormHeader';
import { InputField } from '../../components/common/InputField';
import { PageFormWrapper } from '../../components/common/PageFormWrapper';
import { PageWrapper } from '../../components/common/PageWrapper';
import { PrimaryButton } from '../../components/common/PrimaryButton';

export const ResetPasswordPage = () => {
  //#region password
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  //#endregion

  //#region confirmation
  const [confirmation, setConfirmation] = useState('');
  const [confirmationError, setConfirmationError] = useState(false);

  const handleConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmation(event.target.value);
  };
  //#endregion

  //TODO
  const handleButtonClick = () => {};

  // TODO
  const handleFormSubmit = () => {
    //todo change after
    setPasswordError(false);
    setConfirmationError(false);
  };

  return (
    <PageWrapper>
      <FormHeader
        textBlock={{
          headerText: 'Reset Your Password',
          pText: 'Choose a new password to secure your account.',
        }}
      />

      <PageFormWrapper formAction={handleFormSubmit}>
        <InputField
          label={{ labelText: 'New Password' }}
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

        <InputField
          label={{ labelText: 'Confirm New Password' }}
          input={{
            value: confirmation,
            onChange: handleConfirmationChange,
            type: 'password',
            id: 'confirmation',
            inputIconShown: 'right',
            disabled: false,
          }}
          hint={{
            hintShown: false,
          }}
          validation={{
            error: confirmationError,
          }}
        />

        <PrimaryButton
          buttonText={{
            textValue: 'Reset Password',
            styles: 'text-neutral-0 text-preset-3',
          }}
          onClick={handleButtonClick}
          buttonStyles={'flex items-center justify-center bg-blue-500 px-200 py-150'}
        />
      </PageFormWrapper>
    </PageWrapper>
  );
};

export default ResetPasswordPage;
