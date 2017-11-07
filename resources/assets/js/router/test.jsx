"use strict";

import React from 'react';

import NotFound from '../components/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: ()=><section>Hello</section>
  },
  {
    path: '/test/:id',
    exact: true,
    component:  ()=><section>Helsdfsdfsdfsdf!!</section>
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];