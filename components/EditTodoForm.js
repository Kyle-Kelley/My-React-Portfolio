import React from "react";
// import { styled } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

// const MyTextField = styled(TextField)({
//     padding: '15px'
// })

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
