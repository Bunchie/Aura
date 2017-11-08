"use strict";

import http from '../../helpers/AxiosRequest';

function _getTestXHR(id) {
  return new Promise((resolve, reject) => {
    http("GET", `/api/test/${id}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _getTestXHR;