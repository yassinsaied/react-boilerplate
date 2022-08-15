import http from "./http";
import { API_ATH } from "./api_endpoint";

export const login = async (credentials) => {
  try {
    let response = await http.post(API_ATH.LOGIN, credentials);

    return response;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const register = async (credentials) => {
  try {
    // console.log(API_ATH.REGISTER);
    let response = await http.get(API_ATH.REGISTER, credentials);

    return response;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
