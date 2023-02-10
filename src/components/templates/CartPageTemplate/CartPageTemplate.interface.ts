import { IProductCart } from "../../../shared";

export interface ICartTemplate {
  data: IProductCart[];
  total: number;
  checkoutBtnText: string;
  checkoutBtnDisabled: boolean;
  onClickAddToCart: () => void;
  refreshFeedback: boolean;
  error: boolean;
  success: boolean;
}
