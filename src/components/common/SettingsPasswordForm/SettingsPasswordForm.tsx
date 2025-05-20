import React, { useState } from 'react';

import { InputField } from '../InputField';

export const SettingsPasswordForm = () => {
  //#region oldPassword
  const [oldPassword, setOldPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState(false);

  const handleOldPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(event.target.value);
  };
  //#endregion

  //#region newPassword
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState(false);

  const handleNewPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };
  //#endregion

  //#region confirmationPassword
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [confirmationPasswordError, setConfirmationPasswordError] = useState(false);

  const handleConfirmationPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmationPassword(event.target.value);
  };
  //#endregion

  // todo form logic, add formAction, check button
  const handleFormSubmission = () => {
    setOldPasswordError(false);
    setNewPasswordError(false);
    setConfirmationPasswordError(false);
  }

  return (
    <form className="flex flex-col gap-300" onSubmit={handleFormSubmission}>
      <InputField
        label={{
          labelText: 'Old Password',
        }}
        input={{
          value: oldPassword,
          onChange: handleOldPassChange,
          id: 'oldPassword',
          type: 'password',
          inputIconShown: 'right',
          disabled: false,
        }}
        hint={{
          hintShown: false,
        }}
        validation={{
          error: oldPasswordError,
        }}
      />

      <InputField
        label={{
          labelText: 'New Password',
        }}
        input={{
          value: newPassword,
          onChange: handleNewPassChange,
          id: 'newPassword',
          type: 'password',
          inputIconShown: 'right',
          disabled: false,
        }}
        hint={{
          hintShown: true,
          hintText: 'At least 8 characters',
        }}
        validation={{
          error: newPasswordError,
        }}
      />

      <InputField
        label={{
          labelText: 'Confirm New Password',
        }}
        input={{
          value: confirmationPassword,
          onChange: handleConfirmationPassChange,
          id: 'confirmationPassword',
          type: 'password',
          inputIconShown: 'right',
          disabled: false,
        }}
        hint={{
          hintShown: false,
        }}
        validation={{
          error: confirmationPasswordError,
        }}
      />
    </form>
  );
};
