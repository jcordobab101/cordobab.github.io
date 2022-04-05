import React , {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';


const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Clicked!')
    };


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/> 
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>
                <h2>${props.some}</h2>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>

    );
}

export default ExpenseItem;