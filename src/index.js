import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addMission } from './actions/missions';
import configureStore from './store/configureStore';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import data from './data/data.json';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

data.map((mission) => (
    store.dispatch(addMission(mission))
));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx , document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
