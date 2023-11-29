import { useState } from "react";
import { connect } from "react-redux";
import { Button, Input } from "antd";
import { setTodo } from "../Redux/Action/action ";

function FormTodo({ getItem }) {
  const [text, setText] = useState("");
  let inputChange = (e) => {
    setText(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      getItem({ text , key: Date.now()+1 });
      setText("");
    }
   
    setText("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          placeholder="add todo"
          value={text}
          onChange={(e) => {
            inputChange(e);
          }}
        />
        <Button className="btn-submit" type="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (data) => dispatch(setTodo(data)),
  };
};
export default connect(null, mapDispatchToProps)(FormTodo);
