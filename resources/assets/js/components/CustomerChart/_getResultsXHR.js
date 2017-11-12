"use strict";

import http from '../../helpers/AxiosRequest';

function _getResultsXHR(userId) {
  return new Promise((resolve, reject) => {
    http('GET', `/api/results/${userId}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _getResultsXHR;