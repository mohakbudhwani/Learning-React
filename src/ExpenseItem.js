// Write your code here
import "./ExpenseItem.css";
function ExpenseItem(props){
  const months= ["january",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"]
  const month = months[props.date.getMonth()];
  const year=props.date.getFullYear();
  const date=props.date.getDate();
  
  return(
    <div className="expense-item">
    <div>
      <div> {month} </div>
      <div> {year} </div>
      <div> {date} </div>
    </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div classNAme="expense-item__price">${props.price}</div>
      </div>
    </div>
  )
}
export default ExpenseItem;