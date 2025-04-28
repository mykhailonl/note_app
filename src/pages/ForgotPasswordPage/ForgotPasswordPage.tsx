import { FormHeader } from '../../components/common/FormHeader';
import { EmailField } from '../../components/common/EmailField';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { PageWrapper } from '../../components/common/PageWrapper';
import { PageFormWrapper } from '../../components/common/PageFormWrapper';

export const ForgotPasswordPage = () => {
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
        <EmailField />

        <PrimaryButton
          buttonText={{
            textValue: 'Send Reset Link',
          }}
          onClick={handleButtonClick}
        />
      </PageFormWrapper>
    </PageWrapper>
  );
};
