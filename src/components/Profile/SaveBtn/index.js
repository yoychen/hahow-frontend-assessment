import { connect } from "react-redux";
import SaveBtn from "./SaveBtn";
import { availablePointsSelector } from "../../../slices/profile";
import { updateProfile } from "../../../slices/updateProfileStatus";

const mapStateToProps = (state) => ({
  availablePoints: availablePointsSelector(state),
  isLoading: state.updateProfileStatus.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => dispatch(updateProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveBtn);
