import React from 'react';
import { Main, Header } from 'Components';
import './App.scss';

export const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <Main />
  </div>
);

export default App;
