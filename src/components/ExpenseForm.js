import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



// If I don't pass anything to the function, it represents the current time
//const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    // Note: We have to go back to use the constructor because it's the only
    //       way to know if props were passed from the parent component
    constructor(props) {
        super(props);

        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused: false,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            description: props.expense ? props.expense.description : '',
            error: '',
            note: props.expense ? props.expense.note : ''
        };
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };

    onDateChange = (createdAt) => {

        // If there's a createAt value go ahead
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        // e.persist(): in case we do: this.setState(() => ({ note: e.target.value }));
        this.setState(() => ({ note }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // Set error equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide description and amount' }));

        } else {
            // Clear the error
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(), // Because JavaScript works with milliseconds // display, moment.js
                description: this.state.description,
                note: this.state.note
            });

        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange} //When someone picked a new date from the calender
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} // Allows to pick days in the past
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
