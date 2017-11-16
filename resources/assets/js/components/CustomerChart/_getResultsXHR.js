"use strict";

import http from '../../helpers/AxiosRequest';

function _getResultsXHR(userId) {
  return http('GET', `/api/results/${userId}`);
}

export default _getResultsXHR;