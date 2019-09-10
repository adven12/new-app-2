
export enum BasketActions {
  CLEAN_BASKET = "CLEAN_BASKET",
  CLEAN_BASKET_BOOK = "CLEAN_BASKET_BOOK",
  }
  
  export interface BasketState {
    countBooks: number;
  }
  export interface BasketRequest {
    dataArr: [];
  }
