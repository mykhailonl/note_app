import { useState } from 'react';
import { EmailInput } from '../../common/EmailInput';
import { PrimaryButton } from '../../common/PrimaryButton';
import { PageFormWrapper } from '../../common/PageFormWrapper';
import { PasswordField } from '../../common/PasswordField';

/*
 * TODO isPending state,
 *  actual realisation of useActionState,
 * deal with focus, pointers on links and buttons
 * formAction action
 * */

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
  const [password, setPassword] = useState('');

  // TODO
  const handleLoginClick = () => {};

  return (
    <PageFormWrapper formAction={() => {}}>
      <EmailInput />

      <PasswordField
        label={'Password'}
        value={password}
        onChange={setPassword}
        uiOptions={{
          showForgotLink: true,
        }}
      />

      <PrimaryButton
        buttonText={{
          textValue: 'Login',
        }}
        onClick={handleLoginClick}
      />
    </PageFormWrapper>
  );
};
