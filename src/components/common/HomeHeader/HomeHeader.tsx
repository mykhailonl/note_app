import { LogoHeader } from '../LogoHeader';

// TODO sticky header? mobile-tablet only?

export const HomeHeader = () => {
  return (
    <header className="bg-homeHeader-bg mobile-grid tablet:tablet-grid tablet:py-200 py-150">
      <LogoHeader />
    </header>
  );
};
