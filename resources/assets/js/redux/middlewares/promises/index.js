"use strict";

import constants from "../../../constants";

const middleware = store => next => action => {

  if (action.type !== constants.httpRequest.PROMISE) {
    return next(action);
  }

  const [startPromise, successPromise, failurePromise] = action.actions;

  store.dispatch({type: startPromise});

  action.promise.then(data => {
      store.dispatch({type: successPromise, payload: data})
    },
    error => store.dispatch({type: failurePromise, error: error})
  );
};

export default middleware;