/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Global state Store
 */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));
