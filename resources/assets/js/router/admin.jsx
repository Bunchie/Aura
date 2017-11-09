"use strict";

import React from 'react';

import AdminNav from '../components/AdminNav';
import NotFound from '../components/NotFound';
import CreateTest from '../components/CreateTest';

export default [
  {
    path: '/admin',
    exact: true,
    component: AdminNav
  },
  {
    path: '/admin/create-test',
    exact: true,
    component: CreateTest
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];