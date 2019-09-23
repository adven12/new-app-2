import { put, takeEvery, call, delay } from "redux-saga/effects";
import { callApi } from "./req";
import jwt_decode  from "jwt-decode"


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) {
    try {

      const user = yield call(callApi, 'POST', 'v1/authenticate', action.data);
      // const token = await jwt.verify({ username: 'fl0w' }, 'secret-dev-key')

      console.log(user.data);
      let data:any
      try {
          data  =  jwt_decode (user.data);
        console.log(data.userData);
       // допустимый формат токена 
     } catch (error) {
        // неверный формат токена 
     }
      // const {
      //   data: { email, password },
      // } = action;
      // console.log('User email: ' + email);
      // console.log('User password: ' + password);

      // const user = users.find((users: any) => email === users.email && password === users.password)

      if (user.data) {
        yield put({
          type: `@@login/LOGIN_SUCCESS`,
            data: data.userData,
        });
        yield put({
          type: `@@users/DO_DATAUSERS`,
        });
      } else {
        yield put({
          type: `@@error/SHOW_ERROR`,
          payload: {
            error: "Invalid login or password"

          }
        });

        yield delay(3000);
        yield put({
          type: `@@error/HIDE_ERROR`
        });
      }
    } catch (error) {
      yield put({
        type: `@@error/SHOW_ERROR`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
