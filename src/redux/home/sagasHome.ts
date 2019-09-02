import { put, takeEvery , call, cancel, fork, take, delay} from "redux-saga/effects";
import { push } from 'react-router-redux'
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import  {callApi}   from "../../redux/login/req";
import { HomeModalRequest, HomeModalState } from "./types";
import { any } from "prop-types";

    

// worker sagas
export function* saveImg(): IterableIterator<any> {
  yield takeEvery(`@@home/DO_HOME_IMG`, function* (action: any) {
    try {

    console.log(action);
    
    
      const answerApi = yield call(callApi,'PUT', 'users');
         console.log(answerApi);

         const { img, id  } = action;
         
        console.log('User changePhoto: ' + img);
        console.log('User idUser: ' + id);
            
        const user = answerApi.find((answerApi: any) => id === answerApi.id )
        console.log(user);

        if(user){
        yield put({
        type: `@@home/DO_HOME_IMG`,
          payload: {
          data: user,
          // isLog: true,
        }
       });
      }
    
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