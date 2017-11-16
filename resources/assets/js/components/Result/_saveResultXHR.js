"use strict";

import http from '../../helpers/AxiosRequest';

function _saveResultXHR(data) {
  return http('POST', "/api/save-result", data);
}

export default _saveResultXHR;