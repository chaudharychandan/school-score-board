import React from 'react';
import Dashboard from 'components/Dashboard';
import Student from 'components/Student';
import { Route } from 'react-router-dom';

import './App.css';

export default () => {
  return (
    <div>
      <Route path="/" exact component={Dashboard} />
      <Route path="/:id" exact component={Student} />
    </div>
  );
}
