"use strict";

import http from '../../helpers/AxiosRequest';

function _saveResultXHR(data) {
  return new Promise((resolve, reject) => {
    http('POST', "/api/save-result", data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _saveResultXHR;