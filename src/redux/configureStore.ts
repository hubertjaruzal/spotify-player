import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./root";
import { compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = process.env.REACT_APP_ENV !== "production" ?
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

export default function configureStore() {
  const store = createStore(rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
};
