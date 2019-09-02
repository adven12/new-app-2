import { HomeActions, HomeModalRequest, saveImgProfile } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@home";

export function doInit() {
  return { type: `${prefix}/${HomeActions.DATA_INIT}` };
}
export function doHomeModal(data: HomeModalRequest) {
  return {
     type: `@@home/DO_HOME_MODAL`,
      data };
}
export function saveImg(data: saveImgProfile) {
  return {
     type: `@@home/DO_HOME_IMG`,
      data };
}