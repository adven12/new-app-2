import { Product } from "../../types/product";
import { BaseState } from "../../types/baseState";

export enum HomeActions {
  DATA_INIT = "DATA_INIT",
  DATA_LOADED = "DATA_LOADED",
  DATA_LOAD_FAILED = "DATA_LOAD_FAILED",
  DO_HOME_MODAL = "DO_HOME_MODAL"
}

export interface HomeState extends BaseState {
  isLog: boolean;
  age: string,
  email: string,
  name:string,
}
export interface HomeModalState  {
  email: string;
  name: string;
}
export interface HomeModalRequest {
  email: string;
  name: string;
}
