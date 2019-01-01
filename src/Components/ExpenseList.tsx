import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { State, Expense } from '../Types/types'
import ExpenseItemList from "./ExpenseListItem";
import { getVisibleExpenses } from "../ReduxStore/selectors/expenses.selector";
interface Props extends DispatchProp {
    expenses: Array<Expense>
}
const ExpenseList = (props: Props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((item) => (<ExpenseItemList key={item.id} item={item} />))}
    </div>
)
const mapStateToProps = (state: State) => ({ expenses: getVisibleExpenses(state.expenses, state.filters) })
export default connect(mapStateToProps)(ExpenseList)