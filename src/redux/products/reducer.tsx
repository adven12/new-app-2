import { RootState } from "../rootReducer";
import { ProductsState } from "./types";
import { string } from "prop-types";

export const initialState: ProductsState = {
  dataProducts: "",
  role: "",
};

export function productsReducer(state: ProductsState = initialState, action: any) {
  switch (action.type) {
    case `@@products/DATAPRODUCTS_INIT`: {
      return initialState;
    }
    case `@@products/DATAPRODUCTS_LOADED`: {
      const { dataProducts } = action.payload;
           
      return {
        ...state,
        dataProducts
      };
    }
    case `@@DATAPRODUCTS_ERROR`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    default:
      return state;
  }
}

export const products = (state: RootState) => state.products;