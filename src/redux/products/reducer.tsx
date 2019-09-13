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
  numberBooks: 1,
};

export function productsReducer(state: ProductsState = initialState, action: any) {
  switch (action.type) {
    case `GET_ALL_BOOKS`: {
      return initialState;
    }
    case `DELETE_BOOK`: {
      const { data, allBooks } = action;

      console.log(allBooks)
      console.log(data)
      allBooks.map((text: any, index: any) => (
        text.id == data ? (
          allBooks.splice(text, 1)
        ) : (null)
      ))
      return {
        ...state,
        dataProducts: allBooks

      }
    }
    case `LOADED_BOOKS`: {
      const { dataProducts } = action.payload;

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
   console.log(newState.dataProducts);
      const { book } = action;

      console.log(book);
      if (newState.dataArr.length === 0) {
        book.quantity = 1;
        newState.dataArr.push(book);
      }
      else {
          newState.dataArr.forEach((item: any) => {
            if (item.id === book.id) {
              item.quantity++
        }
      })}


      //     if(checkId){
      //       console.log( newState.dataArr);
      //       newState.dataArr.forEach((item:any) => {
      //         if(item.id === data.addToBasket.id) {
      //           item.addToBasket.quantity ++

      //     }else{
      //       newState.dataArr.push(data)
      //     }
      //   })
      // }
      console.log(newState.dataArr);

      return {
        ...state,
        dataArr: newState.dataArr
      };
    }
    case `@@basket/CLEAN_ALL_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState.dataArr);

      newState.dataArr.splice(0);

      return {
        ...state,
        dataArr: newState.dataArr
      };
    }
    case `@@basket/CLEAN_ONE_BASKET`: {
      let { data, numberBooks } = action;
      let newState = JSON.parse(JSON.stringify(state))
      if (numberBooks <= 1) {
        newState.dataArr.map((text: any, index: any) => (
          text.addToBasket == action.data.id ?
            newState.dataArr.splice(text, 1)
            : (null))
        )
      } else {
        numberBooks--;
      }
      return {
        ...state,
        dataArr: newState.dataArr,
        numberBooks: numberBooks
      };
    }
    case `@@basket/ADD_ONE_BASKET`: {
      // let newState = JSON.parse(JSON.stringify(state))
      //   newState.dataArr.map((text:any, index:any) => (
      //   text.addToBasket == action.data.id ?  
      //   newState.dataArr.splice(text,1) 
      //   :(null))
      //    )
      let newState = JSON.parse(JSON.stringify(state))
      console.log(newState);

      let { numberBooks } = action;
      numberBooks++;
      return {
        ...state,
        numberBooks: numberBooks
      };
    }


    default:
      return state;
  }
}


export const products = (state: RootState) => state.products;