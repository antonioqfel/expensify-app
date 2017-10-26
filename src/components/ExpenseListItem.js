// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';

                        // I can continue using the destructered object,  I just need to add dispatch
                        // which come from props
const ExpenseListItem = ({ amount, createdAt, description, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;