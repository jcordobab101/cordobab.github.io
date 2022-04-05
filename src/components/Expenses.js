import './expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';


const Expenses = (props) => {

    return (

        <div className='expenses'>
            
            <ExpenseItem
            title={props.items[0].title}
            some={props.items[0].amount}
            date={props.items[0].date} />

            <ExpenseItem 
            title={props.items[1].title}
            some={props.items[1].amount}
            date={props.items[1].date} 
            />

            <ExpenseItem 
            title={props.items[2].title}
            some={props.items[2].amount}
            date={props.items[2].date} 
            />

            <ExpenseItem 
            title={props.items[3].title}
            some={props.items[3].amount}
            date={props.items[3].date} 
            />

        </div>

    );

}

export default Expenses;

