import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { State, Filters } from '../Types/types';
import { setTextFilter, sortByDate, sortByAmount } from "../ReduxStore/actions/filter.action";

interface Props extends DispatchProp {
    filters: Filters
}

const ExpenseListFilter = (props: Props) => {
    return (
        <div>
            <input
                type="text"
                value={props.filters.text}
                onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
            />
            <select
                value={props.filters.sortBy}
                onChange={(e) => {
                    if (e.target.value === 'date')
                        props.dispatch(sortByDate())
                    if (e.target.value === 'amount')
                        props.dispatch(sortByAmount())
                }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
}
const mapStateToProps = (state: State) => ({ filters: state.filters })
export default connect(mapStateToProps)(ExpenseListFilter)