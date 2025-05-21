import React, { useState } from 'react';

import { InputField } from '../../../common/InputField';
import { PageFormWrapper } from '../../../common/PageFormWrapper';
import { PrimaryButton } from '../../../common/PrimaryButton';

/*
 * TODO isPending state,
 *  actual realisation of useActionState,
 * deal with focus, pointers on links and buttons
 * formAction action
 * */

// todo text in case of validation error, check design files

export const LoginForm = () => {
  // const [result, submitAction, isPending] = useActionState(
  //   async (previousState, formData) => {
  //     const email = formData.get('email');
  //     const name = formData.get('password');
  //
  //     if (!name || !email) {
  //       return {
  //         type: 'error',
  //         message: `Please fill in your name and email.`,
  //       };
  //     }
  //
  //     // await fakeSendEmail();
  //
  //     return {
  //       type: 'success',
  //       message: `You have successfully subscribed!`,
  //     };
  //   },
  //   null,
  // );
  //
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
  const handleLoginClick = () => {};

  // TODO
  const handleFormSubmit = () => {
    setEmailError(false);
    setPasswordError(false);
  };

  return (
    <PageFormWrapper formAction={handleFormSubmit}>
      <InputField
        label={{ labelText: 'Email Address' }}
        input={{
          value: email,
          onChange: handleEmailChange,
          type: 'email',
          placeholderText: 'email@example.com',
          disabled: false,
          inputIconShown: 'none',
        }}
        hint={{
          hintShown: false,
        }}
        validation={{
          error: emailError,
        }}
      />

      <InputField
        label={{ labelText: 'Password', labelForgotShown: true }}
        input={{
          value: password,
          onChange: handlePasswordChange,
          type: 'password',
          disabled: false,
          inputIconShown: 'right',
        }}
        hint={{
          hintShown: false,
        }}
        validation={{
          error: passwordError,
        }}
      />

      <PrimaryButton
        buttonText={{
          textValue: 'Login',
          styles: 'text-neutral-0 text-preset-3',
        }}
        onClick={handleLoginClick}
        buttonStyles={'justify-center items-center flex bg-blue-500 px-200 py-150'}
      />
    </PageFormWrapper>
  );
};

export default LoginForm;
