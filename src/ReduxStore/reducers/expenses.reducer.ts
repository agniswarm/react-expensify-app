import { Reducer } from 'redux'
import { Expense, expensesReducerDefaultState } from '../../Types/types'

export const expensesReducer: Reducer<Array<Expense>, any> =
    (state: Array<Expense> = expensesReducerDefaultState, action: any) => {
        switch (action.type) {
            case 'ADD_EXPENSES':
                return [...state, action.expense]
            case 'REMOVE_EXPENSES':
                return state.filter(({ id }) => id != action.id)
            case "EDIT_EXPENSES":
                return state.map((expense) => {
                    if (expense.id === action.id) {
                        return { ...expense, ...action.updates }
                    }
                    return expense
                })
            default:
                return state
        }
    }