import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { Expense } from '../Types/types';
import { connect, DispatchProp } from 'react-redux'
import { addExpenses } from "../ReduxStore/actions/expense.action";
import { RouteChildrenProps } from "react-router";

interface IProps extends DispatchProp, RouteChildrenProps { }

const CreateExpense = (props: IProps) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm buttonName='Add Expense' onSubmit={(expense: Expense) => {
            props.dispatch(addExpenses(expense))
            props.history.push('/')
        }} />
    </div>
)

export default connect()(CreateExpense);