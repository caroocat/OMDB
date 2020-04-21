import React from "react";
import { connect } from "react-redux";
import Card from "../components/card";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.setState({ movies: this.props.search });
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div
        style={{
          margin: 30,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {movies.length >= 1 ? (
          movies.map((movie, key) => {
            return (
              <div
                key={`${key} + ${movie}`}
                style={{
                  width: "25%",
                  height: "35%",
                  display: "block",
                  paddingBottom: 2
                }}
              >
                <Card info={movie} {...this.props} />
              </div>
            );
          })
        ) : (
          <div>
            <h1>Disculpe pero no encontramos su pelicula</h1>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  search: state.search.search.Search,
  movie: state.movie.movie
});

export default connect(mapStateToProps)(Movies);
