import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { phonebookReducer } from "./phoneBook";
import { filterReducer } from "./filter";


const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
}, composeWithDevTools())
