import React, { useActionState, useState } from 'react';

/*
 * TODO isPending state,
 *  actual realisation of useActionState,
 * deal with focus, pointers on links and buttons
 * */

export const LoginForm = () => {
  const [result, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const email = formData.get('email');
      const name = formData.get('password');

      if (!name || !email) {
        return {
          type: 'error',
          message: `Please fill in your name and email.`,
        };
      }

      // await fakeSendEmail();

      return {
        type: 'success',
        message: `You have successfully subscribed!`,
      };
    },
    null,
  );

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <form action={submitAction} className="flex flex-col gap-200 pt-300">
        <div className="gap-075 flex flex-col">
          <div className="flex items-start gap-100 self-stretch">
            <label
              htmlFor="name"
              className="text-preset-4 flex flex-1 text-neutral-950"
            >
              Email Address
            </label>
          </div>

          <input
            type="Email"
            id="Email"
            name="Email"
            placeholder="email@example.com"
            className="rounded-8 text-preset-5 bg-neutral-0 focus:shadow-input-focus flex items-center border border-neutral-300 px-200 py-150 text-neutral-500 hover:bg-neutral-50"
          />
        </div>

        <div className="gap-075 flex flex-col">
          <div className="flex items-start gap-100 self-stretch">
            <label
              htmlFor="password"
              className="text-preset-4 flex flex-1 text-neutral-950"
            >
              Password
            </label>

            <a className="text-preset-6 text-right text-neutral-600 underline">
              Forgot
            </a>
          </div>

          <div className="rounded-8 relative flex items-center gap-250 border border-neutral-300">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="text-preset-5 bg-neutral-0 focus:shadow-input-focus flex flex-1 px-600 py-150 text-neutral-500 hover:bg-neutral-50"
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 flex -translate-y-1/2 transform"
            >
              <img
                src={
                  showPassword
                    ? './src/assets/images/icon-hide-password.svg'
                    : './src/assets/images/icon-show-password.svg'
                }
                alt="Show password"
              />
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-8 text-neutral-0 text-preset-3 focus:shadow-primarybutton-focus bg-blue-500 px-200 py-150 hover:bg-blue-700 focus:bg-blue-500"
        >
          Login
        </button>
      </form>
    </>
  );
};
