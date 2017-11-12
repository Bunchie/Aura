"use strict";

import React from 'react';

import NotFound from '../components/NotFound';
import CustomerNav from '../components/CustomerNav';
import CustomerChart from '../components/CustomerChart';

export default [
  {
    path: '/customer',
    exact: true,
    component: CustomerNav
  },
  {
    path: '/customer/chart',
    exact: true,
    component: CustomerChart
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];