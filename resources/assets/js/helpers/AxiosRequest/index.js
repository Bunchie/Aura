"use strict";

import axios from 'axios';

function http(method, url, data = null, headers = {'X-Requested-With': 'XMLHttpRequest'}) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      headers: headers,
      data: data
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default http;
