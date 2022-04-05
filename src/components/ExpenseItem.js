import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';


const ExpenseItem = (props) => {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/> 
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>
                <h2>${props.some}</h2>
            </div>

        </div>

    );
}

export default ExpenseItem;