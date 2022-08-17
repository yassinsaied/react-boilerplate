import { login } from "../services/authService";

export const auth = {
  state: {
    id: null,
    logged: false,
    name: "",
    email: "",
    token: "",
    message: "",
  },

  reducers: {
    UPDATE: (state, key, value) => {
      return {
        ...state,
        [key]: value,
      };
    },
    loginSuccess(state, data) {
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
        id: null,
        logged: false,
        name: "",
        email: "",
        token: "",
        message: "invalid credentials",
      };
    },

    logout(state) {
      return {
        ...state,
        id: null,
        logged: false,
        name: "",
        email: "",
        token: "",
        message: "",
      };
    },
  },

  effects: (dispatch) => ({
    async asyncLogin(credentials) {
      try {
        let resData = await login(credentials);
        // console.log(resData.data.data);
        dispatch.auth.loginSuccess(resData.data.data);
      } catch (error) {
        dispatch.auth.loginFail();
        console.log(error);
      }
    },
  }),
};
