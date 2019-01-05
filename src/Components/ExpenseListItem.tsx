import React from 'react';
import { Expense } from '../Types/types';
import { DispatchProp, connect } from 'react-redux';
import { removeExpenses } from '../ReduxStore/actions/expense.action';
import { Link } from 'react-router-dom'

interface Props {
    item: Expense;
    key: string;
}

const ExpenseItemList = (props: Props) => (
    <div>
        <Link to={`/edit/${props.item.id}`}>
            <h1>{props.item.description}</h1>
        </Link>
        <p>{props.item.amount} - {String(new Date(props.item.createdAt))}</p>
    </div>
);

export default ExpenseItemList; 