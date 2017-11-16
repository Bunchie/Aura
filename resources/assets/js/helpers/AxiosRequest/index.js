"use strict";

import axios from 'axios';

function http(method, url, data = null, headers = {'X-Requested-With': 'XMLHttpRequest'}) {
  return axios({
    method: method,
    url: url,
    headers: headers,
    data: data
  });
}

export default http;
