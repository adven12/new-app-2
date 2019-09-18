import { put, takeEvery, call, delay } from "redux-saga/effects";
import { callApi } from "./req";


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) {
    try {

      const users = yield call(callApi, 'GET', 'users');

      const {
        data: { email, password },
      } = action;

      console.log('User email: ' + email);
      console.log('User password: ' + password);

      const user = users.find((users: any) => email === users.email && password === users.password)

      if (user) {
        yield put({
          type: `@@login/LOGIN_SUCCESS`,
            data: user,
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
