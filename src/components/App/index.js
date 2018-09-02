import React from 'react';
import Header from 'components/Header';

import './App.css';

export default ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
