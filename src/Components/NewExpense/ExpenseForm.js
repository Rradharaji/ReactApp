import React, { useState, useEffect } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const[itemDetails,itemUpdate] =useState({name:"",date:"",price:""});
    useEffect(()=>{console.log("ExpenseForm component mounted")},[]); 
  const updateTitle = (event)=>{
    itemUpdate((prevState)=>{
      return {...prevState,
      name: event.target.value
      }
    });
  };
  const updateAmount = (event)=>{
    itemUpdate((prevState)=>{
      return {...prevState,
      price: event.target.value
      }
    });
  };
  const updateDate = (event)=>{
    itemUpdate((prevState)=>{
      return {...prevState,
      date: new Date(event.target.value)
      }
    });
  };
  const updateItem = (e)=>{
    e.preventDefault();
    props.updateItemDetails(itemDetails);
  }
  return (
    <form onSubmit={updateItem}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={itemDetails.name} onChange={updateTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1' step='10' value={itemDetails.price} onChange={updateAmount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={itemDetails.date} onChange={updateDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;