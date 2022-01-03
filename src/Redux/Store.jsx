import { createStore, Store } from "redux";
import Reducers from "./Reducers/Index"

const store=createStore(Reducers,{},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store
