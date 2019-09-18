import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../../redux/login/req";


export function* sagaHome(): IterableIterator<any> {
  yield takeEvery(`@@home/DO_HOME_CHANGE`, function* (action: any) {
    try {

      const { data, id } = action;
      
      fetch(`http://localhost:3002/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(data)
      });

      const users = yield call(callApi,'GET', 'users');
      const user = users.find((users: any) => id === users.id)
      
      yield put({ 
        type: `@@home/DO_HOME_CHANGE_CALL`,
          payload: {
          data: user,        
          }
       });
       yield put({
        type: `@@login/LOGIN_SUCCESS`,
          data: user,
      });


    } catch (error) {
      yield put({
        type: `@@home/DO_HOME_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}