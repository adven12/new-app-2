import { Product } from "../../types/product";
import { BaseState } from "../../types/baseState";

export enum HomeActions {
  DATA_INIT = "DATA_INIT",
  DATA_LOADED = "DATA_LOADED",
  DATA_LOAD_FAILED = "DATA_LOAD_FAILED"
}

export interface HomeState extends BaseState {
  isLog: boolean;
  age: string,
  email: string,
  name:string,
}