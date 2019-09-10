import { RootState } from "../rootReducer";
import { BasketState } from "./types";


export const initialState: BasketState = {
    // buyProduct: "",
    // addToBasket: "",
    countBooks: 0,
};

export function basketReducer(state: BasketState = initialState, action: any) {
  switch (action.type) {
    case `@@basket/CLEAN_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState);
      const {data} = action;
      console.log(action);
    //   console.log(data.addToBasket);
    //   newState.dataArr.push(data)
    //    console.log(newState);
    //    console.log(action);
      return {
        ...state,
        // data,
        // dataArr:newState.dataArr
      };
    }
    default:
      return state;
  }
}


export const products = (state: RootState) => state.products;