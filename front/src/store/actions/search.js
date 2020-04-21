export const searchMovies = names => dispatch => {
  fetch(`https://www.omdbapi.com/?apikey=20dac387&s=${names}`)
    .then(Response => Response.json())
    .then(movies => dispatch({ type: "GET_SEARCH", payload: movies }));
};

export const getMovie = title => dispatch => {
  fetch(`https://www.omdbapi.com/?apikey=20dac387&t=${title}`)
    .then(Response => Response.json())
    .then(movie => dispatch({ type: "GET_MOVIE", payload: movie }));
};
