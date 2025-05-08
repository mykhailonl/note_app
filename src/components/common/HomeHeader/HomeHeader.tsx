import { LogoHeader } from '../LogoHeader';

// TODO sticky header?

export const HomeHeader = () => {
  return (
    <header className="mobile-grid tablet:tablet-grid tablet:py-200 py-150">
      <LogoHeader />
    </header>
  );
};

export default HomeHeader;
