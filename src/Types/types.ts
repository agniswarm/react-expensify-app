import { Action } from 'redux'

export interface State {
    expenses: Array<Expense>;
    filters: Filters;
}
export interface Expense {
    id: string;
    description: string;
    note: string;
    amount: Number;
    createdAt: number;
}
export interface Filters {
    text: string;
    sortBy: string;
    startDate: number | undefined;
    endDate: number | undefined;
}

export interface Filter<T> {
    type: string;
    filter?: T;
}

// Expense Action Types
export interface ExpenseAction extends Action<string> {
    type: string;
    expense: Expense;
}

export interface RemoveExpenseAction extends Action<string> {
    type: string;
    id: string;
}
export interface EditExpenseAction extends Action<string> {
    type: string;
    id: string;
    updates: Expense;
}

// Placeholders

export const emptyExpense: Expense = {
    id: "",
    description: "",
    note: "",
    amount: 0,
    createdAt: 0

}
export const filterReducerDefaultStare: Filters = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date"

}
export const expensesReducerDefaultState: Array<Expense> = []