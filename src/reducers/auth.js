export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.access_token)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      
      return {
        ...state,
        isAuth: true,
        token: action.payload.access_token,
        user: action.payload.user,
      };

    case "UPDATE":
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };

    
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
