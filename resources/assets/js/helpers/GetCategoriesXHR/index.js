"use strict";

import http from '../../helpers/AxiosRequest';

function getCategoriesXHR() {
  return http('GET', "/api/categories")
}

export default getCategoriesXHR;