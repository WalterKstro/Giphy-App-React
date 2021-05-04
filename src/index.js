import React from 'react';
import ReactDOM from 'react-dom';
import GiphyApp from './components/Giphy/GiphyApp';
import GiphyHeader from './components/Header/HeaderGiphy';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GiphyHeader/>
      <div className="container">
        <GiphyApp/>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

