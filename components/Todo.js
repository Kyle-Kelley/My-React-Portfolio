import React from 'react';
import useToggleState from '../hooks/useToggleState';
import Typography from '@material-ui/core/Typography';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);
    return(
        <>
                <ListItem style={{height: '100%', width: '100%', background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)', borderRadius: '5px'}}>
                    {isEditing ? (
                    <EditTodoForm 
                        editTodo={editTodo} 
                        id={id} task={task} 
                        toggleEditForm={toggle} 
                    />
                    ) : (
                    <>
                    <Grid container direction="row" alignItems="flex-end" spacing={2} zeroMinWidth='true' sm='auto' >
                        <Grid item xs>
                            <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
                        </Grid>
                        <Grid item xs>
                            <ListItemText 
                                style={{textDecoration: completed ? 'line-through' : 'none', wordBreak: 'break-word'}}
                            >
                                <Typography >{task}</Typography>
                            </ListItemText>
                        </Grid>    
                            <Grid item xs style={{ textAlign: 'end'}}>
                                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                                        <DeleteIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs style={{ textAlign: 'start'}}>
                                <IconButton aria-label='Edit' onClick={toggle} >
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                    </Grid>
                    </>
                    )}
                </ListItem>
        </>
    );
}

export default Todo;