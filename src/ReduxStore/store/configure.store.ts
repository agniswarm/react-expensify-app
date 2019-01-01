import { createStore, combineReducers } from 'redux';
import { filterReducer } from '../reducers/filter.reducers'
import { expensesReducer } from '../reducers/expenses.reducer'

// Expenses Reducer
export const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filterReducer
        }
    )
);

