import { Divider } from '../Divider';
import { SecondaryButton } from '../SecondaryButton';

export const FormFooter = () => {
  // TODO
  const handleButtonClick = () => {};

  return (
    <footer className="flex flex-col">
      <Divider />

      <div className="flex flex-col gap-200 pt-300">
        <p className="text-preset-5 text-center font-sans text-neutral-600">Or log in with:</p>

        <SecondaryButton
          buttonText={{
            textValue: 'Google',
          }}
          img={{
            src: 'src/assets/images/icon-google.svg',
            altText: 'Login with Google',
          }}
          onClick={handleButtonClick}
        />
      </div>
    </footer>
  );
};

export default FormFooter;
