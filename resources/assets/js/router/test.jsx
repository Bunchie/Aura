"use strict";

import React from 'react';

import NotFound from '../components/NotFound';
import AllTests from '../components/AllTests';
import Result from '../components/Result';
import Test from '../components/Test';

export default [
  {
    path: '/',
    exact: true,
    component: AllTests
  },
  {
    path: '/test/:id',
    exact: true,
    component: Test
  },
  {
    path: '/result',
    exact: true,
    component: Result
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];