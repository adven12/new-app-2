import { BasketActions, BasketRequest } from "./types";

const prefix = "@@basket";

export function doBasket() {
  return { type: '@@basket/CLEAN_BASKET',
  };
}
export function doBasketBook(data:any) {
  return { type: '@@basket/CLEAN_BASKET_BOOK',
  data
  };
}
