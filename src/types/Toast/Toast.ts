export interface ToastStyles {
  containerStyles?: string;
  checkmarkIconStyles?: string;
  crossIconStyles?: string;
  textStyles?: string;
}

export interface ToastProps {
  toastText: string;
  styles?: ToastStyles;
  onClose: () => void;
}
