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
    margin: '50px auto',
    padding: '15px',
    background: 'linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)',
    borderRadius: '8px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

const MyAppBar = styled(AppBar)({
    backgroundColor: '#b3dbd3',
    color: '#69b7eb',
    borderRadius: '8px',
    alignItems: 'center',
    fontSize: '20px'
});



function TodoApp(){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
        setTodos([initialTodos])
    }, []);

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
            <MyAppBar  position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography style={{fontSize: '1.5rem', fontWeight: '600'}}>TODO LIST</Typography>
                </Toolbar>
            </MyAppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
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

// , minHeight: '100vh'