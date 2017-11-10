"use strict";

import http from '../../helpers/AxiosRequest';

function _createCategoryXHR(data) {
  return new Promise((resolve, reject) => {
    http('POST', "/api/create-category", data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _createCategoryXHR;