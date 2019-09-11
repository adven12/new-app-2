
export enum ProductsActions {
    DATAPRODUCTS_INIT = "DATAPRODUCTS_INIT",
    DATAPRODUCTS_LOADED = "DATAPRODUCTS_LOADED",
    DATAPRODUCTS_ERROR = "DATAPRODUCTS_ERROR",
    DO_PRODUCTS_TO_BASKET = "DO_PRODUCTS_TO_BASKET"
  }
  
  export interface ProductsState {
    addToBasket: string;
    dataProducts: string,
    data: string,
    dataArr: [],
    search: string,
    redirectDescription: number,
  }

  export interface ProductsRequest{
    addToBasket: string;
  }
  export interface ProductsModalState  {
    picture: string,
    name: string,
    discript:string,
    price: number,
  }
  export interface savePictureProfile {
    changePhoto: string;
  }
  export interface book {
    book: string;
  }
