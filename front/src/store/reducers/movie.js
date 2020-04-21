const initialState = {
  movie: ""
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_MOVIE":
      return { ...state, movie: payload };

    default:
      return state;
  }
};
