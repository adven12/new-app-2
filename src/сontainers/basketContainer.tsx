import { RootState } from "../redux/rootReducer";
import  BasketComponent   from "../сomponents/basket/basketComponent";
import { connect } from "react-redux";
import { doBasket, doBasketBook } from "../redux/basket/actions";

const mapStateToProps = (state: RootState) => ({
    buyProduct:state.products.dataProducts,
    addToBasket: state.products.data,
    dataArr: state.products.dataArr,
});

export default connect(
  mapStateToProps,
  { doBasket, doBasketBook }
)(BasketComponent);