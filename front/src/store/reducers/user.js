const initialState = {
  user: false
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_DATA":
      return { ...state, user: payload };

    default:
      return state;
  }
};
