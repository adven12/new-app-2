import { RootState } from "../rootReducer";
import { HomeState } from "./types";
import { string } from "prop-types";

export const initialState: HomeState = {
  error: '',
  isLog: false,
  age: "",
  email: "",
  name:"",
};

export function homeReducer(state: HomeState = initialState, action: any) {
  switch (action.type) {
    // case `@@home/DO_HOME_MODAL`: {
    //   console.log("@@home/DO_HOME_MODAL");
    //   return {
    //     ...state,
    //   };
    // }
    // case `@@home/DO_HOME_MODAL_SUCCESS`: {
    //   const { data } = action.payload;
    //   return {
    //     ...state,
    //     data,
    //   };
    // }
    case `@@home/DATA_INIT`: {
      return initialState;
    }
    case `@@home/DATA_LOADED`: {
      return {
        ...state,
        
      };
    }
    case `@@ERROR_OCCURED`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    default:
      return state;
  }
}

export const home = (state: RootState) => state.home;