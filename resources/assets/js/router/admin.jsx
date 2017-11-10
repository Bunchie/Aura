"use strict";

import React from 'react';

import AdminNav from '../components/AdminNav';
import NotFound from '../components/NotFound';
import CreateTest from '../components/CreateTest';
import CreateCategory from '../components/CreateCategory';

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
    path: '/admin/create-category',
    exact: true,
    component: CreateCategory
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];