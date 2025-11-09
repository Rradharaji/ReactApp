/* Composite component and prop children we can use component as a common component where styles are common and wrap it and provide the props as the inside compoonent*/
import './Card.css';
function Card(props) {
  const classes = 'card' + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
