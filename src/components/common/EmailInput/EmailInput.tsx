export const EmailInput = () => {
  return (
    <>
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
    </>
  );
};
