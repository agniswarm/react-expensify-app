import React, { Component, ChangeEvent } from 'react'
import moment, { Moment } from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import { Expense } from '../Types/types';

interface IProps {
    onSubmit: Function;
    buttonName: string;
    item?: Expense;
}

interface IState extends Partial<Expense>, Partial<SingleDatePickerShape> {
    amountStr: string;
    createdAtMom: Moment | null;
    error: string;
    calenderFocused: boolean | null;
}
class ExpenseForm extends Component<IProps, IState> {

    componentWillMount() {
        if (this.props.item) {
            const description = this.props.item.description
            const note = this.props.item.note
            const createdAtMom = moment(this.props.item.createdAt)
            const amountStr = String(this.props.item.amount!)
            this.setState(() => ({
                description,
                note,
                createdAtMom,
                amountStr
            }))
        }
    }
    state: IState = {
        description: '',
        amountStr: '',
        note: '',
        createdAtMom: moment(),
        calenderFocused: false,
        error: ""
    }
    onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist()
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amountStr: amount }))
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
    onDateChange = (createdAtMom: Moment | null) => {
        if (createdAtMom)
            this.setState(() => ({ createdAtMom, error: "" }))
        else
            this.setState(() => ({ createdAtMom, error: "Please enter a Valid Date" }))
    }
    onFocusChange = (obj: { focused: boolean | null }) => {
        this.setState(() => ({ calenderFocused: obj.focused }))
    }
    onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!this.state.description)
            this.setState(() => ({ error: 'Please enter a valid description' }))
        else if (!this.state.amountStr)
            this.setState(() => ({ error: 'Please enter a valid amount' }))
        else if (!this.state.createdAtMom)
            this.setState(() => ({ error: 'Please enter a valid date' }))
        else {
            this.setState(() => ({ error: '' }))

            let expenseItem: Partial<Expense> = {
                description: this.state.description,
                createdAt: this.state.createdAtMom.valueOf(),
                amount: parseFloat(this.state.amountStr),
                note: this.state.note
            }
            this.props.onSubmit(expenseItem)
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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
                        value={this.state.amountStr}
                        onChange={this.onAmountChange}
                    />
                    {!this.state.createdAtMom ? <p></p> : null}
                    <SingleDatePicker
                        date={this.state.createdAtMom}
                        onDateChange={this.onDateChange}
                        focused={!!this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        id="id"
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>{this.props.buttonName}</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm