 
  export interface ProductsState {
    dataProducts: string,
    book: string,
    dataArr: [],
    search: string,
    numberBooks: number,
    countBooks: number,
  }

  export interface ProductsRequest{
    addToBasket: string;
  }
  export interface ProductsModalState  {
    picture: string,
    name: string,
    discript:string,
    price: number,
    full_discript: string,
  }
  export interface DescriptionModalState  {
    product: any,
    full_discript: string,
  }
  // export interface book {
  //   book: string;
  // }
