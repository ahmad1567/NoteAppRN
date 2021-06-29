import {rootReducer, AppState} from "../reducers";
import {createStore, applyMiddleware, Store} from "redux";
import ReduxThunk from "redux-thunk";

export function configureStore(): Store<AppState> {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
}
