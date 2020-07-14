import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "./components/State/Provider";
import {initialState, reducer} from "./components/State/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={initialState} reducer={reducer}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);