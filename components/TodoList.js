import React from "react";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

const MyPaper = styled(Paper)({
  background: "linear-gradient(90deg, #f4d6db, #b3dbd3, #69b7eb)",
  borderRadius: "8px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  padding: "5px",
});

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <MyPaper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </MyPaper>
    );
  return null;
}
export default TodoList;
