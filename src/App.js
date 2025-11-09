import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
import Card from "./Components/Card"; // default import only 1 data will be exported there
import NewExpense from "./Components/NewExpense/NewExpense";
import { useEffect, useState } from "react"; // multipleexports will be there

const print = () => {
  console.log("print function called");
}
if(1===1){
  <div>testing if</div>
}
function App() { 
  const item = [
      {
      id:"1",
      date: new Date(2022, 3, 28),
      name:"car expense",
      price:"20$"
    },
    {
      id:"2",
      date: new Date(2022, 3, 28),
      name:"bike expense",
      price:"250$"
    },{
      id:"3",
      date: new Date(2022, 3, 28),
      name:"truck expense",
      price:"200$"
    }
  ];
  const [items, updateData] = useState(item);
  const [filteredItem, updatefilteredItem] = useState("");
  const [showNewForm, updateShowForm] = useState(false);
  useEffect(()=>{console.log("App component mounted")},[]); 
  const addItem = (itemData) => {
    // let temp=[];
    // temp.push(itemData);   // spread operator a=[1,2] b=[2,3] res=[...a,...b] means copy a to res and add with b
    // a={name:'raji'} b={name:'m'} now res={...a,...b} add a to res and override/add b
    // a={name:'raji'} res={...a,name:'mm'}

    // important spread means spliting that
    // [...a,...b] means into an array [] add both spread data of a and b =>  [x,y,z,p,q,r]
    // {...a,...b} means into an object spread properties of both a and b
    // case 1)  a=[1,2,3,1] b=[4,5,6] res =[...a,...b] => [1,2,3,1,4,5,6]
    // case 2) res=[9,...b] => [9,4,5,6]
    // case 3) res=[9,10] which is an array

    // for objects
    // case 1) a={name:'raji',age:'26'}
    // b={name:'m',address:'banglore'}
    // res={...a,...b}
    // res
    // {name: 'm', age: '26', address: 'banglore'}
    // case 2
    //   a={name: 'raji', age: '26'}
    //   b={height:'142',...a}
    //   {height: '142', name: 'raji', age: '26'}
    //   b
    // {height: '142', name: 'raji', age: '26'}

    updateData([itemData, ...items]);
    /*updateData((prevState)=>{
    return [...prevState,itemData];
  });*/
  };
  // if(3>2){
  //   return <div>just testing</div>
  // }

  // Imp : for and if else not allowed in jsx use map and ternary instead and for just if use condition &&
  //Another way is to use if condition outside jsx return  and render the jsx rendering function conditionally
  // Style object like html style in react jsx we can use style but different style takes object and key is prop name if static css prop with quotes or camelCase form no quote and dynamic logic value is no quote

  const noItemsMessage = ()=> (<div style={{backgroundColor:'lightyellow'}}>No items added</div>);
  //const noItemsMessage = ()=> (<div style={{'background-color':'lightyellow'}}>No items added</div>);
  print();
  return (
    <Card>
      <button onClick={()=>{updateShowForm(true)}}> new form needed? yes</button>
      <button onClick={()=>{updateShowForm(false)}}> new form needed? no</button>
      { showNewForm && <NewExpense updateItems={addItem}></NewExpense> }
      <div className="expense-filter">
        <select onChange={(event) => updatefilteredItem(event.target.value)}>
          {items.map((item) => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
      {items?.length > 0 ? (
        <Card className="expenses">
          {items
            // .filter((item) => item.name === filteredItem)
            .map((item) => (
               <ExpenseItem item={item}></ExpenseItem>
            ))}
        </Card>
      ) : (
        noItemsMessage()
      )}
    </Card>
  );
}

export default App;
