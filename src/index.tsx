import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './App/App';
import { store } from "./ReduxStore/store/configure.store";
import { addExpenses } from "./ReduxStore/actions/expense.action";
import { setTextFilter } from "./ReduxStore/actions/filter.action";
import { getVisibleExpenses } from "./ReduxStore/selectors/expenses.selector";
import { emptyExpense } from './Types/types'

store.dispatch(addExpenses({
    ...emptyExpense,
    amount: 200,
    description: "Water Bill",
    note: "This is the waterbill for the month of january"
}))
store.dispatch(addExpenses({
    ...emptyExpense,
    amount: 1500,
    description: "Gas Bill",
    note: "This is the gasbill for the month of january"
}))
store.dispatch(addExpenses({
    ...emptyExpense,
    amount: 1300,
    description: "Rent",
    note: "This is the rent for the month of january"
}))

// store.dispatch(setTextFilter("water"))

let state = store.getState()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

store.subscribe(() => {
    console.log(store.getState())
})

console.log(getVisibleExpenses(state.expenses, state.filters))
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
