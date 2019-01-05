import { createStore, combineReducers, Store } from 'redux';
import { filterReducer } from '../reducers/filter.reducers'
import { expensesReducer } from '../reducers/expenses.reducer'

// Expenses Reducer
export const store: Store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filterReducer
        }
    ),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

