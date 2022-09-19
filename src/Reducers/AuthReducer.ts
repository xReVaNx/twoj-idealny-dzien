import { authActions } from "../Actions/authActions";

export const authReducer = (state: Boolean = false, action: any) => {
  switch (action.type) {
    case authActions.SIGN_IN:
      return true;
    case authActions.SIGN_OUT:
      return false;
    default:
      return state;
  }
};
