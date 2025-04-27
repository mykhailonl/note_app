/*
 * TODO styles for another resolution
 */

import { LogoHeader } from '../../common/LogoHeader';

export const LoginHeader = () => {
  return (
    <header className="flex flex-col gap-y-4">
      <LogoHeader />

      <div className="flex flex-col gap-y-2 text-center">
        <h1 className="text-preset-1 font-sans text-neutral-950">
          Welcome to Note
        </h1>

        <p className="text-preset-5 font-normal text-neutral-600">
          Please log in to continue
        </p>
      </div>
    </header>
  );
};
