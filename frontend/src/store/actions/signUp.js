import { CREATE_USER } from "../types";

export const signUpAction = (email) => ({
  type: CREATE_USER,
  payload: email,
});

export const signUpFunction = (email) => async (dispatch) => {
  console.log("in the email");
};
