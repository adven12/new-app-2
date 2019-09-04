import { RootState } from "../redux/rootReducer";
import  ProductsComponent  from "../сomponents/products/productsComponent";
import { connect } from "react-redux";
import { doProducts } from "../redux/products/actions";



const mapStateToProps = (state: RootState) => ({
  isLog: state.login.isLog,
  dataProducts: state.products.dataProducts,
  role: state.products.role,
});

export default connect(
  mapStateToProps,
  { doProducts }
)(ProductsComponent);