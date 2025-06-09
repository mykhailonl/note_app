import cn from 'classnames';
import { Outlet } from 'react-router';
import { useLocation, useSearchParams } from 'react-router-dom';

import { BackButton } from '../../components/common/BackButton';
import { NewNoteButton } from '../../components/common/NewNoteButton';
import getPageTitle from '../../utils/getPageTitle.ts';

// todo check if placeholder shown styles are applying
export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const isTagsPage = pathname.includes('tags');
  const hasSelectedTags = !!searchParams.getAll('tags').length;

  const title = getPageTitle(pathname, searchParams);

  return (
    <>
      <div className="mobile-grid tablet:tablet-grid tablet:py-300 box-border h-full rounded-t-xl py-250">
        <div className="col-span-full flex flex-col items-start gap-200">
          {isTagsPage && hasSelectedTags && (
            <BackButton
              buttonText="Go Back"
              href="/tags"
              styles={{
                containerStyle: 'gap-050',
                iconStyle: 'h-[18px] w-[18px]',
                textStyle: 'text-preset-5',
              }}
            />
          )}

          <h1 className={cn(
            title.extraInfo ? 'text-hint-textColor' : 'text-text-primary',
            "text-preset-1 self-stretch"
          )}>
            {title.text}
            <span className='text-text-primary'>{title.extraInfo}</span>
          </h1>

          <Outlet />
        </div>
      </div>

      <NewNoteButton
        iconName="plus"
        styles={{
          buttonStyles:
            'fixed z-4 bottom-900 right-200 tablet:right-300 tablet:bottom-1200 outline-none focus-visible:shadow-defaultFocus',
        }}
      />
    </>
  );
};

export default HomePage;
