import { useState } from 'react';

import { FormHeader } from '../../components/common/FormHeader';
import { PageFormWrapper } from '../../components/common/PageFormWrapper';
import { PageWrapper } from '../../components/common/PageWrapper';
import { PasswordField } from '../../components/common/PasswordField';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { ValidationError } from '../../types/PasswordInput/ValidationOptions.ts';

// TODO handleFormSumbit,
// error check on input field blur

export const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [passwordError] = useState<ValidationError>(null);
  // TODO replace back to get rid of eslint errors
  // const [passwordError, setPasswordError] = useState<ValidationError>(null);

  const [confirmation, setConfirmation] = useState('');
  const [confirmationError] = useState<ValidationError>(null);
  // TODO replace back to get rid of eslint errors

  // const [confirmationError, setConfirmationError] = useState<ValidationError>(null);

  //TODO
  const handleButtonClick = () => {};
  // TODO
  const handleFormSubmit = () => {};

  return (
    <PageWrapper>
      <FormHeader
        textBlock={{
          headerText: 'Reset Your Password',
          pText: 'Choose a new password to secure your account.',
        }}
      />

      <PageFormWrapper formAction={handleFormSubmit}>
        <PasswordField
          value={password}
          label={'New Password'}
          onChange={setPassword}
          validationError={passwordError}
          uiOptions={{
            hint: 'At least 8 characters',
          }}
        />

        <PasswordField
          value={confirmation}
          label={'Confirm New Password'}
          onChange={setConfirmation}
          validationError={confirmationError}
        />

        <PrimaryButton
          buttonText={{
            textValue: 'Reset Password',
            styles: 'text-neutral-0 text-preset-3',
          }}
          onClick={handleButtonClick}
          buttonStyles={
            'flex items-center justify-center bg-blue-500 px-200 py-150'
          }
        />
      </PageFormWrapper>
    </PageWrapper>
  );
};

export default ResetPasswordPage;
