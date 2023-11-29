import { connect } from "react-redux";
import Todo from "./todo";

function TodoList({ state: todos }) {
  console.log(todos);

  return (
    <>
      {todos.length !== 0 ? (
        todos.map((todo) => <Todo key={todo.key} item={todo} />)
      ) : (
        <p>Nothing to do</p>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, null)(TodoList);
