import React, {useState} from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

/*

const FormControl = styled.div`

  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? 'salmon' : 'transparent')};;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
*/


const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');

    // Method 1 & 2
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {

        //Method 1 & 2
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        //

        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        // Method 1 & 2
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        //

        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/*Method 1 - Turning red when no input. This is bad because inline takes precedence over everything*/}
            {/*<div className="form-control">
                <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
                <input style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'white'}}
                       type="text" onChange={goalInputChangeHandler}/>
            </div>*/}

            {/*Method 2 - Use backticks, a template literal in JS. This will insert 'invalid' class for the css to find*/}
            {/*<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>*/}

            {/*Method 3 - Use styled components*/}
            {/*<FormControl className={!isValid && 'invalid'}>*/}

            {/*Method 3 - Use styled components and pass props to it*/}
            {/*<FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </FormControl>*/}

            {/*Method 4 - css modules*/}
            {/*If you have the dash naming you need to put it in ['']*/}
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>

            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
