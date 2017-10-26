import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss'

// We need to import the CSS related to it as well
import 'react-dates/lib/css/_datepicker.css';


// Returns the value form configureStore.js. It's goint to give access to all stuff
// such as store.dispatch, store data, store.getState(); store.subscribe etc.
const store = configureStore();

// addExpense -> Water bill
//store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// addExpense -> Gas bill
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// setTextFilter -> bill
// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

//console.log(store.getState());

const jsx = (
    // Now all components have access to the store
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

//ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));
