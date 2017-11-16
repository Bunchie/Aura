"use strict";

import http from '../../helpers/AxiosRequest';

function _createTestXHR(data) {
  return http('POST', "/api/create-test", data);
}

export default _createTestXHR;