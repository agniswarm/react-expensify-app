import React from 'react';
import { Expense, State } from '../Types/types';
import { DispatchProp, connect } from 'react-redux';
import { removeExpenses } from '../ReduxStore/actions/expense.action';
interface Props extends DispatchProp {
    item: Expense
}
const ExpenseItemList = (props: Props) => (
    <div>
        <h1>Description: {props.item.desciption}</h1>
        <p>{props.item.amount} - {String(new Date(props.item.createdAt))}</p>
        <button onClick={(e) =>
            props.dispatch(removeExpenses(props.item.id))
        }>Remove</button>
    </div>
);
const mapStatesToProps = (state: State) => ({})
export default connect()(ExpenseItemList); 