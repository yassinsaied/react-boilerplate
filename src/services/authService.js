import { httpLogin } from "./http";
import { API_ATH } from "./api_endpoint";

export const login = async (credentials) => {
  let response = await httpLogin.post(API_ATH.LOGIN, credentials);
  return response;
};

export const register = async (credentials) => {
  try {
    // console.log(API_ATH.REGISTER);
    let response = await httpLogin.get(API_ATH.REGISTER, credentials);

    return response;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
