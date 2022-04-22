import React from 'react';
import Header from './Components/Header/Header';
import './App.css';

export const App:React.FC = () => (
    <div className="wrapper">
      <Header />
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
);

export default App;
