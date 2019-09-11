import { RootState } from "../rootReducer";
import { ProductsState } from "./types";
import { string } from "prop-types";

export const initialState: ProductsState = {
  dataProducts: "",
  addToBasket: "",
  data: "",
  dataArr: [],
  search: "",
  redirectDescription: 0,
};

export function productsReducer(state: ProductsState = initialState, action: any) {
  switch (action.type) {
    case `@@products/DATAPRODUCTS_INIT`: {
      return initialState;
    }
    case `@@products/DATAPRODUCTS_LOADED`: {
      const {dataProducts} = action.payload;
      return {
        ...state,
        dataProducts,
      };
    }
    case `@@DATAPRODUCTS_ERROR`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    case `@@products/DO_PRODUCTS_TO_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState);
      console.log(action);
      
      const {data} = action;
      console.log(action);
      console.log(data.addToBasket);
      newState.dataArr.push(data)
       console.log(newState);
       console.log(action);
      return {
        ...state,
        data,
        dataArr:newState.dataArr
      };
    }
    case `@@basket/CLEAN_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState);
      console.log(newState.dataArr);
      newState.dataArr.splice(0);
      console.log(newState.dataArr);
      
      return {
        ...state,
        // data,
        dataArr:newState.dataArr
      };
    }
    case `@@basket/CLEAN_BASKET_BOOK`: {
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState.dataArr);
      console.log(newState.dataArr);
      console.log("EEE",action.data.id);
      // debugger;
        newState.dataArr.map((text:any, index:any) => (
        text.addToBasket == action.data.id ?  
        newState.dataArr.splice(text,1) 
        :console.log("!!!")
        
        ))
      return {
        ...state,
        dataArr:newState.dataArr
      };
    }


    default:
      return state;
  }
}


export const products = (state: RootState) => state.products;