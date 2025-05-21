import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { useToast } from '../../../hooks/useToast.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { ToastProps } from '../../../types/Toast/Toast.ts';

// todo undo functionality, f.e. when deleting a note, while toast is still present

export const Toast = ({ toastText, styles, onClose }: ToastProps) => {
  const { toastType } = useToast();
  const archivedToast = toastType === 'archived';

  //#region Icons
  const CheckmarkIcon = iconComponents['checkmark'];
  const CrossIcon = iconComponents['cross'];
  //#endregion

  return (
    <div
      className={cn(
        styles?.containerStyles,
        'rounded-8 bg-toast-bg border-toast-border flex items-center gap-100 border p-100',
      )}
    >
      <div className={cn(styles?.checkmarkIconStyles, 'text-green-500')}>
        <CheckmarkIcon className="h-200 w-200" />
      </div>

      <div className="flex grow gap-100 text-preset-6">
        <p className={cn(styles?.textStyles, 'grow')}>{toastText}</p>

        {archivedToast && (
          <NavLink to={'/archived'} className="underline">
            Archived notes
          </NavLink>
        )}
      </div>

      <div className={cn(styles?.crossIconStyles, 'text-neutral-400')} onClick={onClose}>
        <CrossIcon className="h-200 w-200" />
      </div>
    </div>
  );
};
