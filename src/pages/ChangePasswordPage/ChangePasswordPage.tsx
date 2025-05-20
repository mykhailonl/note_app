import { PrimaryButton } from '../../components/common/PrimaryButton';
import { SettingsHeaderBlock } from '../../components/common/SettingsHeadeBlock';
import { SettingsPasswordForm } from '../../components/common/SettingsPasswordForm';

export const ChangePasswordPage = () => {
  const handleSaveClick = () => {};

  return (
    <div className="bg-bg-primary rounded-12 tablet:px-400 tablet:py-300 desktop:p-0 flex h-full px-200 py-300">
      <div className="flex w-full flex-col gap-250">
        <SettingsHeaderBlock />

        <SettingsPasswordForm />

        <div className="flex justify-end self-stretch">
          <PrimaryButton
            buttonText={{ textValue: 'Save Password', styles: 'text-neutral-0 text-preset-4' }}
            onClick={handleSaveClick}
            buttonStyles={'bg-blue-500 flex items-center justify-center px-200 py-150'}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
