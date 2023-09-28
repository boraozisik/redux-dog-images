import { combineReducers, compose, createStore } from "redux";
import reducer from "./dogImagesAppReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers = combineReducers({
  reducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers());

export default store;

export type RootState = ReturnType<typeof store.getState>;
