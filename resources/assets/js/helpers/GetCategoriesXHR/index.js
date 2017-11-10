"use strict";

import http from '../../helpers/AxiosRequest';

function getCategoriesXHR() {
  return new Promise((resolve, reject) => {
    http('GET', "/api/categories")
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default getCategoriesXHR;