
export enum ProductsActions {
    DATAPRODUCTS_INIT = "DATAPRODUCTS_INIT",
    DATAPRODUCTS_LOADED = "DATAPRODUCTS_LOADED",
    DATAPRODUCTS_ERROR = "DATAPRODUCTS_ERROR"
  }
  
  export interface ProductsState {
    dataProducts: string;
    role: string;
  }
  export interface ProductsModalState  {
    picture: string,
    name: string,
    discript:string,
    price: string,
  }
  export interface savePictureProfile {
    changePhoto: string;
  }