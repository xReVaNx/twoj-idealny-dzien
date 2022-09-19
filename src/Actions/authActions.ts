export const authActions = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

export const signIn = () => {
  return {
    type: authActions.SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: authActions.SIGN_OUT,
  };
};
