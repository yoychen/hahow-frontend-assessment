import { connect } from "react-redux";
import { fetchHeroes } from "../../slices/heroes";
import List from "./List";

const mapStateToProps = ({ heroes }) => ({
  heroes,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: () => dispatch(fetchHeroes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
