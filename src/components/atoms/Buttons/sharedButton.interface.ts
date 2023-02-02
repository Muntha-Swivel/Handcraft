export interface IButton {
  text: string;
  onClick: () => void;
  fullWidth?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}
