import { http } from "./http";
import { API_ATH } from "./api_endpoint";

export const login = async () => {
  try {
    let response = await http.post(API_ATH.LOGIN);
    return response;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const register = async () => {
  try {
    let response = await http.post(API_ATH.LOGIN);
    return response;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
