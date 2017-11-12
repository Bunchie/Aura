"use strict";

import http from '../../helpers/AxiosRequest';

function _getTestsXHR(categories = 0) {
  return new Promise((resolve, reject) => {
    http("GET", `/api/tests/${categories}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _getTestsXHR;