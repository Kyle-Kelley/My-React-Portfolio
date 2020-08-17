import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'react-uuid';

const MyPaper = styled(Paper)({
    width: '50vw',
    height: '100%',
    margin: '50px auto',
    padding: '15px',
    background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)',
    borderRadius: '8px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center'
});

function TodoApp(){
    // const initialTodos = React.useEffect(() => {
    //     JSON.parse(window.localStorage.getItem('todos') || '[]')
    // });
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
        setTodos([initialTodos])
    }, []);

    // const initialTodos = [
    //     { id: uuid(), task: 'Write Blog', completed: false },
    //     { id: uuid(), task: 'Clean House', completed: false },
    //     { id: uuid(), task: 'Record Podcast', completed: false },
    //     { id: uuid(), task: 'Write Brynn Workouts', completed: false },
    // ];

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    }
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const removeTodo = todoId => {
        //filter out removed todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        //call setTodos with new todos array
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
            );
            setTodos(updatedTodos);
    }
    return (
        <MyPaper
            elevation={3} 
        >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>TODO LIST</Typography>
                </Toolbar>
            </AppBar>
            <Grid container style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </MyPaper>
    )
};
export default TodoApp;

// -TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem
//             id, task, completed