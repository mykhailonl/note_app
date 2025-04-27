import { LoginHeader } from '../../components/features/LoginHeader';
import { LoginFooter } from '../../components/features/LoginFooter';
import { LoginForm } from '../../components/features/LoginForm';

export const LoginPage = () => {
  // TODO optimize func, create logic
  const handleSignUp = () => {};
  return (
    <div className="rounded-12 bg-neutral-0 tablet:col-start-2 tablet:col-end-8 tablet:px-400 desktop:px-600 tablet:py-600 desktop:col-start-4 desktop:col-end-10 col-span-full flex flex-col gap-200 self-center border border-neutral-200 px-200 py-500">
      <LoginHeader />

      <LoginForm />

      <LoginFooter />

      <span className="h-[1px] bg-neutral-200" />

      <div className="flex justify-center">
        <p className="text-preset-5 text-neutral-600">No account yet? </p>

        <button
          className="text-preset-5 text-neutral-950"
          onClick={handleSignUp}
        >
          &nbsp;Sign up
        </button>
      </div>
    </div>
  );
};
