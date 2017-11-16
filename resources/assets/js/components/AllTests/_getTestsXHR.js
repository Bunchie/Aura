"use strict";

import http from '../../helpers/AxiosRequest';

function _getTestsXHR(categories = 0) {
  return http("GET", `/api/tests/${categories}`);
}

export default _getTestsXHR;