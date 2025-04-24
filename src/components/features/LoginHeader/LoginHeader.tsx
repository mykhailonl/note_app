/*
* TODO add link on logo, styles for another resolution
*/

export const LoginHeader = () => {
  return (
    <header className="flex flex-col gap-y-4">
      <div className="flex flex-col items-center pb-100">
        <a>
          <img src="src/assets/images/logo.svg" alt="NoteApp logo"/>
        </a>
      </div>

      <div className="flex flex-col gap-y-2 text-center">
        <h1 className="font-sans text-preset-1 text-neutral-950">
          Welcome to Note
        </h1>

        <p className="text-preset-5 text-neutral-600 font-normal">
          Please log in to continue
        </p>
      </div>
    </header>
  );
}