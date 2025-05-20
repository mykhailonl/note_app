import { Divider } from '../Divider';
import { SecondaryButton } from '../SecondaryButton';

export const FormFooter = () => {
  // TODO
  const handleButtonClick = () => {};

  return (
    <footer className="flex flex-col">
      <Divider />

      <div className="flex flex-col gap-200 pt-300">
        <p className="text-preset-5 text-center text-text-secondary">Or log in with:</p>

        <SecondaryButton
          buttonText={{
            textValue: 'Google',
            styles: ' text-preset-4 px-200',
          }}
          icon={{
            name: 'google',
          }}
          buttonStyles={
            'text-text-primary flex items-center justify-center py-150 px-200'
          }
          onClick={handleButtonClick}
          disabled={false}
        />
      </div>
    </footer>
  );
};
