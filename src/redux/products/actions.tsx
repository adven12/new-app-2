import { ProductsActions } from "./types";

const prefix = "@@products";

export function doProducts() {
  return { type: `${prefix}/${ProductsActions.DATAPRODUCTS_INIT}` };
}
