import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './styles/global.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'                      //force our react App to be initialized with redux
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'


const reduxStore = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>        {/*store is a variable functions like a data storage of redux. Here we equip the redux with reduxStore, aka the process inside redux*/}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
