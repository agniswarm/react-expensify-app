import React, { Component, ChangeEvent } from 'react'

interface State {
    description: string;
    amount: string;
    note: string
}

class ExpenseForm extends Component<{}, State> {
    state: State = {
        description: '',
        amount: "",
        note: ''
    }
    onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist()
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm