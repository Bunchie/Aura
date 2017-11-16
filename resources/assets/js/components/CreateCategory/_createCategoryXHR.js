"use strict";

import http from '../../helpers/AxiosRequest';

function _createCategoryXHR(data) {
  return http('POST', "/api/create-category", data);
}

export default _createCategoryXHR;