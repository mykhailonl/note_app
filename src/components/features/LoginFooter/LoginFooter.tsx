export const LoginFooter = () => {
  return (
    <footer className="flex flex-col">
      <span className="h-[1px] bg-neutral-200" />

      <div className="flex flex-col gap-200 pt-300">
        <p className="text-preset-5 text-center font-sans text-neutral-600">
          Or log in with:
        </p>

        <button className="rounded-8 text-preset-3 focus:shadow-button-focus flex content-center items-center justify-center border border-neutral-300 px-200 py-150 text-neutral-950 hover:bg-neutral-100">
          <img
            src="src/assets/images/icon-google.svg"
            alt="Login with Google"
            className="flex"
          />
          <span className="flex px-200">Google</span>
        </button>
      </div>
    </footer>
  );
};
