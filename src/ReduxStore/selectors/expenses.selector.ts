import { Expense, Filters } from "../../Types/types";

export const getVisibleExpenses = (expenses: Array<Expense>, filter: Filters) => {
    return expenses.filter((expense) => {
        const startDateMatch: Boolean = !filter.startDate || expense.createdAt >= filter.startDate;
        const endDateMatch: Boolean = !filter.endDate || expense.createdAt <= filter.endDate;
        const textMatch: Boolean = expense.desciption.toLowerCase().includes(filter.text.toLowerCase())
            || expense.note.toLowerCase().includes(filter.text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a: Expense, b: Expense) => {
        if (filter.sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else
            return a.amount < b.amount ? 1 : -1
    })
}