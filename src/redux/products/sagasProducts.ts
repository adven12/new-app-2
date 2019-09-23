import { put, takeEvery , call} from "redux-saga/effects";
import  {callApiProducts}  from "../products/req";


export function* doProducts(): IterableIterator<any> {
  yield takeEvery(`GET_ALL_BOOKS`, function* () {
    try {
      
    const products = yield call(callApiProducts,'GET', 'v1/products/');
    console.log(products.data);
    
    if(products.data.length == 0){
      return null;
    }

        yield put({ 
        type: `LOADED_BOOKS`,
          payload: {
          dataProducts: products.data,
          
          }
       });
       
}catch (error) {
    yield put({
      type: `@@DATAPRODUCTS_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}
export function* doProductsUpdate(): IterableIterator<any> {
  yield takeEvery('DELETE_BOOK', function*(action: any) {
      
      try {
        
        let id = action.data;
        const API_URL = 'http://localhost:3003/products/'                                            
        const API_PATH = id
        
          yield call (() => {
              return fetch(API_URL + API_PATH, {
                method: 'DELETE'
              })

          } )

          yield put ({
            type: 'GET_ALL_BOOKS',
            payload: {
                            
            }
          })
                    
      } 
      
      catch (error) {
        yield put({
          type: `@@DATAPRODUCTS_ERROR`,
          payload: {
            error: error.message
          }
        });
      }
    })
  }

  export function* createProducts(): IterableIterator<any> {
    yield takeEvery('CREATE_BOOKS', function*(action: any) {
        try {
          const answerApi = fetch(`http://localhost:3000/v1/products/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(action.data)
          });
           console.log(answerApi);
           
            yield put ({
              type: 'GET_ALL_BOOKS',
              payload: {
                              
              }
            })
                      
        } 
        
        catch (error) {
          yield put({
            type: `@@DATAPRODUCTS_ERROR`,
            payload: {
              error: error.message
            }
          });
        }
      })
    }

  export function* doProductChange(): IterableIterator<any> {
    yield takeEvery('DO_BOOK_CHANGE', function*(action: any) {
        try {
           fetch(`http://localhost:3003/products/${action.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(action.data)
          });
                      
        } 
        
        catch (error) {
          yield put({
            type: `@@DATAPRODUCTS_ERROR`,
            payload: {
              error: error.message
            }
          });
        }
      })
    }