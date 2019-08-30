import { RootState } from "../redux/rootReducer";
import  HomeComponent   from "../сomponents/home/homeComponent";
import { connect } from "react-redux";
import { doHomeModal } from "../redux/home/actions";

const mapStateToProps = (state: RootState) => ({
  error: state.error,
  isLog: state.login.isLog,
  data: state.login.data,
  test: state.login.test,
});

export default connect(
  mapStateToProps,
  { doHomeModal }
)(HomeComponent);