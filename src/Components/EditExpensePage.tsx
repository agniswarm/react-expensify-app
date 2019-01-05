import React from 'react';
import { RouteComponentProps } from "react-router";
import { connect, DispatchProp } from 'react-redux';
import { State, Expense } from '../Types/types';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpenses } from '../ReduxStore/actions/expense.action';
interface Routes {
    id: string;
}

interface IProps extends RouteComponentProps<Routes>, DispatchProp {
    expense?: Expense;
}

const EditExpense = (props: IProps) => {
    return (
        <div>
            <ExpenseForm
                buttonName="Edit Expense"
                onSubmit={(item: Expense) => {
                    props.dispatch(editExpense(props.match.params.id, item))
                    props.history.push('/')
                }}
                item={props.expense}
            />
            <button onClick={() => {
                props.dispatch(removeExpenses(props.match.params.id))
                props.history.push('/')
            }
            }>Remove</button>
        </div >
    )
}
const mapStateToProps = (state: State, props: IProps) => ({ expense: state.expenses.find((item) => item.id === props.match.params.id) })
export default connect(mapStateToProps)(EditExpense);