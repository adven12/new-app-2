import {  HomeModalRequest} from "./types";

export function doHome() {
  return { type: `@@home/DO_HOME` };
}
// export function doHomeModal(data: HomeModalRequest) {
//   return {
//      type: `@@home/DO_HOME_MODAL`,
//       data };
// }
export function doHomeChange(data: any, id:any) {
  return {
     type: `@@home/DO_HOME_CHANGE`,
      data,id };
}
