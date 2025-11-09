

import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useEffect } from 'react';
const NewExpense = (props) => {
  useEffect(()=>{console.log("New Expense component mounted"); return ()=>{console.log("newExpense component unmounted")}},[]); 

  const updateForm=(dataFromChild)=>{
     props.updateItems(dataFromChild);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm updateItemDetails={updateForm}/>
    </div>
  );
};

export default NewExpense;