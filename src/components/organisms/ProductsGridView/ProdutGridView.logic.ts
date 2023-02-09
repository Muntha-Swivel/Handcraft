import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { getProuduct } from "../../../features/product/product.slice";

const onClickEdit = (dispatch: any, navigate: NavigateFunction, id: string) => {
  navigate(`/admin/edit-product/${id}`);
  dispatch(getProuduct(id));
};

export { onClickEdit };
