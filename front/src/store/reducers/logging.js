const initialState = {
  logging: ""
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_LOGGING":
      return { ...state, logging: payload };

    default:
      return state;
  }
};
