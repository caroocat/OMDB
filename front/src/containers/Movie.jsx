import React from "react";
import { connect } from "react-redux";
import CardID from "../components/cardID";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: "" };
  }
  render() {
    const { movie } = this.props;
    console.log(this.props.movie);
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CardID info={movie} {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  search: state.search.search.Search,
  movie: state.movie.movie
});
export default connect(mapStateToProps)(Movie);
