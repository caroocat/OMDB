const initialState = {
  register: ""
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_REGISTER":
      return { ...state, register: payload };

    default:
      return state;
  }
};
