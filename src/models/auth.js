import { login } from "../services/authService";

export const auth = {
  state: {
    id: null,
    logged: false,
    name: "",
    email: "",
    token: "",
    message: "",
    test: "aaa",
  },

  reducers: {
    UPDATE: (state, key, value) => {
      return {
        ...state,
        [key]: value,
      };
    },
    loginSuccess(state, data) {
      console.log(data);
      return {
        ...state,
        id: data.Id,
        logged: true,
        name: data.Name,
        email: data.Email,
        token: data.Token,
        message: "successful login",
      };
    },
    loginFail(state) {
      return {
        ...state,
        logged: false,
        message: "login failed",
      };
    },
  },

  effects: (dispatch) => ({
    async asyncLogin(credentials) {
      try {
        let resData = await login(credentials);
        // console.log(resData.data.data);
        dispatch.auth.loginSuccess(resData.data.data);
      } catch (err) {
        //  dispatch.auth.loginFail(resData.data); Handle Error Here
        console.error(err);
      }
    },
  }),
};
