import { Reducer } from 'redux'
import { Filters, filterReducerDefaultStare } from '../../Types/types'

export const filterReducer: Reducer<Filters, any> = (state: Filters = filterReducerDefaultStare, action: any) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.filter }
        case "SORT_BY_DATE":
            return { ...state, sortBy: 'date' }
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: 'amount' }
        case "SET_START_DATE":
            return { ...state, startDate: action.filter }
        case "SET_END_DATE":
            return { ...state, endDate: action.filter }
        default:
            return state
    }
}

