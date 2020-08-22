import React from 'react';
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);
    return(
        <ListItem style={{height: '100%', background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)', borderRadius: '5px'}}>
            {isEditing ? (
            <EditTodoForm 
                editTodo={editTodo} 
                id={id} task={task} 
                toggleEditForm={toggle} 
            />
            ) : (
            <>
            <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
            <ListItemText 
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <Grid container direction='column' spacing='0' zeroMinWidth='true' sm='auto' >
                    <Grid item>
                        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                                <DeleteIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label='Edit' onClick={toggle} >
                            <EditIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </ListItemSecondaryAction>
            </>
            )}
        </ListItem>
    );
}

export default Todo;