// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

                        // I can continue using the destructered object,  I just need to add dispatch
                        // which come from props
const ExpenseListItem = ({ amount, createdAt, description, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {/* We divided our number by 100 to convert it from cents */}
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;