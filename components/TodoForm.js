import React from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useInputState from '../hooks/useInputState';


const MyPaper = styled(Paper)({
    width: '48vw',
    margin: '5px auto',
    padding: '15px',
    background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)',
    borderRadius: '8px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center'
});

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    return(
         <MyPaper>
            <form onSubmit={(e) => {
                 e.preventDefault();
                 addTodo(value);
                 reset();
             }}
            >
                 <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin='normal' 
                    label='Add New Todo'
                    fullWidth
                />
             </form>
             
         </MyPaper>
    )
}
export default TodoForm;