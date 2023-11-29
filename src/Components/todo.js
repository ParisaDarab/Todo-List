import { useState } from "react";
import { connect } from "react-redux";
import Edit from "./edit";
import { deleteTodo } from "../Redux/Action/action ";
import { Button, Flex } from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';

function Todo({ item, deleteItem }) {
  const [edit, setEdit] = useState(false);
  const [done, setDone] = useState(false)
  console.log(item);

  return (
    <>
      {!edit ? (
        
          <div className="L-item" key={item.key}>
            <p>{item.text}</p>
            <Flex wrap="wrap" gap="small">
              <Button
                type="primary"
                danger
                onClick={() => deleteItem(item.key)}
              >
                Delete
              </Button>
              <Button onClick={() => setEdit(true)}>Edit</Button>
              {
                done==false ? <Button onClick={() => setDone(true)}>Done</Button>
                : <span onClick={() => setDone(false)}> <CheckCircleTwoTone twoToneColor="#52c41a" /></span>
              }
            </Flex>
          </div>
        
      ) : (
        <Edit item={item} />
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (key) => dispatch(deleteTodo(key)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
