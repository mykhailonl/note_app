import { ModalIconName } from '../Icons/IconsType.ts';

export interface ModalContent {
  iconName: ModalIconName;
  headerText: string;
  descriptionText: string;
  primaryButtonText: string;
}

export interface ModalStyles {
  containerStyles?: string;
  headerTextStyles?: string;
  descriptionTextStyles?: string;
  primaryButtonStyles?: string;
  secondaryButtonStyles?: string;
}

export interface ModalProps {
  content: ModalContent;
  styles?: ModalStyles;
  onClose: () => void;
  // todo add fn on primary button?
}
