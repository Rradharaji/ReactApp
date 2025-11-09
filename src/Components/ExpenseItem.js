import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import Card from "./Card";
import { useState , useEffect} from "react";
const ExpenseItem = ({item}) => {
  const [title, updateTitle] = useState(item.name);
  useEffect(()=>{console.log("ExpenseItem component is rerendered")},); 
  
  useEffect(()=>{console.log("ExpenseItem component mounted")},[]); 

  //let title = props.item.name;
  const changeTitle = () => {

   // props.item.name="newName"; // we should not change props like this props should be ready only  

   // title ="newName"; // here also it wont reflect in dom because react first see the  first component in jsx and navigates to that component and renders sub component and if any function it will store it and executes that but the jsx part is not rerendered so the updated value is not rerendered in dom
   // for this reason we have some hooks like useState that tells the react to rerender the component
   // useState is a function which takes default value as param and returns an array of the updatimng value and updating function
   // when this value is updated that value is stored in that updating value and react rerender the component not just jsx it executes all the code
    updateTitle("newName"+title);

  }
  return (
      // <Card className="expense-item">
      <div className="expense-item">
          <ExpenseDate item={item} />
        <div className="expense-item__description">
          <h2>{item.name}</h2>
        </div>
        <button onClick={changeTitle}>Change Title</button>
        <div className="expense-item__price">${item.price}</div>
    </div>
  );
};
export default ExpenseItem;
