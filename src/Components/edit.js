import React, { createRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import TodoList from "./todoList";
import { Input, Button } from "antd";
import { editTodo } from "../Redux/Action/action ";
function Edit({ item, editItem }) {
  const editInput = React.createRef();
  const [newText, setNewText] = useState(item.text);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    if (editInput.current) {
      editInput.current.focus();
    }
  }, []);

  function todoEdit(key) {
    editItem({ text: newText, key: key });
    setEdit(false);
  }


  return (
    <>
      {!edit ? (
        <TodoList />
      ) : (
        <div>
          <Input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            ref={editInput}
          />
          <Button type="button" onClick={() => todoEdit(item.key)}>
            Edit
          </Button>
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (data) => dispatch(editTodo(data)),
  };
};

export default connect(null, mapDispatchToProps)(Edit);
