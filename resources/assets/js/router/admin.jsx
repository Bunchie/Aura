"use strict";

import React from 'react';

import AdminNav from '../components/AdminNav';
import CreateTest from '../components/CreateTest';
import NotFound from '../components/NotFound';

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