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
        logged: false,
        message: "login failed",
      };
    },
  },

  effects: (dispatch) => ({}),
};
