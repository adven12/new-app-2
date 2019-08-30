import { put, takeEvery , call, cancel, fork, take, delay} from "redux-saga/effects";
import { push } from 'react-router-redux'
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import  {callApi}   from "../../redux/login/req";
import { HomeModalRequest, HomeModalState } from "./types";
import { any } from "prop-types";

    

// worker sagas
export function* doHomeModal(): IterableIterator<any> {
  yield takeEvery(`@@home/DO_HOME_MODAL`, function* (action: any) {
    try {

    console.log(action);
    
    
      const answerApi = yield call(callApi,'GET', 'users');
         console.log(answerApi);

         const { email, name  } = action;
         
        console.log('User email: ' + email);
        console.log('User password: ' + name);
            
        yield put({
        type: `@@home/DO_HOME_MODAL_SUCCESS`,
          payload: {
          data: answerApi,
          // isLog: true,
        }
       });
       console.log(action);
    
}catch (error) {
    yield put({
      type: `@@registration/REGISTRATION_FAILED`,
      payload: {
        error: error.message
      }
    });
  }
});
}