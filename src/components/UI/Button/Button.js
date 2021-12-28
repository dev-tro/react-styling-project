import styles from './Button.module.css';

//import styled from 'styled-components';


//
// // point this to the 'styled' package button with special js syntax for calling its method
// const Button = styled.button`
//   //.button { // since the css is scoped only to this button, we don't need this selector
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   width: 100%;
//   //}
//
//   /*I want the button to span thw width if on phone, but stay small if on website*/
//   /*put the styles in here when this media condition is met*/
//   @media (min-width: 768px) {
//     width: auto;
//   }
//
//   //.button:focus {
//   &.focus { // use & to reference this button
//     outline: none;
//   }
//
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
//
const Button = props => {
  return (
      /*styles.button is how you communicate to css module since it generates a unique name you wont know
      the unique name is how css modules keeps the scope only to this button*/
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
