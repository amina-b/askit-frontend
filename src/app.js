import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import './styles/style.css'

const store = createStore(reducer);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById("mojid"));