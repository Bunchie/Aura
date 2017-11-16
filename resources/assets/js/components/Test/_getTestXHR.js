"use strict";

import http from '../../helpers/AxiosRequest';

function _getTestXHR(id) {
  return http("GET", `/api/test/${id}`);
}

export default _getTestXHR;