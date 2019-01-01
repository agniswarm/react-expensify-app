import uuid from 'uuid';
import { Expense, ExpenseAction, RemoveExpenseAction, EditExpenseAction } from "../../Types/types";

// ADD_EXPENSES

export const addExpenses = (expense: Expense): ExpenseAction => ({
    type: 'ADD_EXPENSES',
    expense: {
        id: uuid(),
        desciption: expense.desciption,
        note: expense.note,
        amount: expense.amount,
        createdAt: new Date().getTime()
    }
})

// REMOVE_EXPENSES

export const removeExpenses = (id: string): RemoveExpenseAction => ({
    type: "REMOVE_EXPENSES",
    id
})

// EDIT_EXPENSES

export const editExpense = (id: string, updates: Expense): EditExpenseAction => ({
    type: "EDIT_EXPENSES",
    id,
    updates
})