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
        logged: true,
        isAdmin: data.isAdmin,
        name: data.name,
        email: data.email,
        phone: data.phone,
        token: data.token,
        message: "",
      };
    },
    loginFail(state, messageError) {
      return {
        ...state,
        id: null,
        logged: false,
        name: "",
        email: "",
        token: "",
        message: messageError,
        // message: data.response.message,
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
        dispatch.auth.loginSuccess(resData.data.data);
        return true;
      } catch (errors) {
        dispatch.auth.loginFail(errors.response.data.message);
        return false;
      }
    },
  }),
};
