import React from 'react';
import useToggleState from '../hooks/useToggleState';
// import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// const MyTypography = styled(Typography)({
//     [theme.breakpoints.up('md')]: {
//         width: '100%',
//         textOverflow: 'ellipses',
//         overflow: 'scroll'
//       },
// });

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         [theme.breakpoints.between('xs', 'sm')]: {
//             width: '50vw',
//             textOverflow: 'ellipses',
//             overflow: 'scroll',
//           },
//         icons: {
//             textAlign: 'end'
//         },
//     },
// }));

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);
    // const classes = useStyles();
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
                        <Grid item xs={6}>
                            <ListItemText 
                                style={{textDecoration: completed ? 'line-through' : 'none', wordBreak: 'break-word'}}
                            >
                                <Typography >{task}</Typography>
                            </ListItemText>
                        </Grid>    
                            <Grid item xs justify='flex-end'>
                                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                                        <DeleteIcon />
                                </IconButton>
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