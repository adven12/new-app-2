import { RootState } from "../redux/rootReducer";
import  BasketComponent   from "../сomponents/basket/basketComponent";
import { connect } from "react-redux";
import { doHomeModal } from "../redux/home/actions";

const mapStateToProps = (state: RootState) => ({
  // dataProducts: state.products.dataProducts
//   isLog: state.login.isLog,
//   data: state.login.data,
  // avater: state.login.data,
});

export default connect(
  mapStateToProps,
//   { doHomeModal }
)(BasketComponent);