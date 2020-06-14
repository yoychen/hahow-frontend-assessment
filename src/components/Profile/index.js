import { connect } from "react-redux";
import {
  fetchProfile,
  updateAbility,
  availablePointsSelector,
  clearProfile,
} from "../../slices/profile";
import Profile from "./Profile";

const mapStateToProps = (state) => ({
  profile: state.profile,
  availablePoints: availablePointsSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: (heroId) => dispatch(fetchProfile({ heroId })),
    clearProfile: () => dispatch(clearProfile()),
    onAbilityChange: (name, newCount) => dispatch(updateAbility({ name, newCount })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
