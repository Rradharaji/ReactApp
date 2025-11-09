import './ExpenseDate.css';
import { useEffect } from 'react';
const text="abc";
const disp=()=>(text);
function ExpenseDate(props) {
  useEffect(()=>{console.log("ExpenseDate component mounted")},[]); 
  const month = props?.item?.date?.toLocaleString("en-US", { month: "long" });
  const day = props?.item?.date?.toLocaleString("en-US", { day: "2-digit" });
  const year = props?.item?.date?.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
      <div>{disp()}</div>
      <div>{dummy()}</div>
    </div>
  );
}

function dummy(){
  const a="a";
  const dis=()=>(a);
  return dis();
}
export default ExpenseDate;

// it is a normal js we can  have functions (component) and members and mem functs outside also inside a function it can have variables and sub functions
