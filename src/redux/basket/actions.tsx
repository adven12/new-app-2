
export function cleanAllBasket() {
  return { type: '@@basket/CLEAN_ALL_BASKET',
  };
}
export function cleanOneBasket(data:any,numberBooks:any) {
  return { type: '@@basket/CLEAN_ONE_BASKET',
  data,numberBooks
  };
}
export function AddOneBasket(numberBooks:any) {
  return { type: '@@basket/ADD_ONE_BASKET',
  numberBooks
  };
}
