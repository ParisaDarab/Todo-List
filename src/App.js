import React from "react";
import FormTodo from "./Components/formTodo";
import TodoList from "./Components/todoList";
import "./Styles/style.css";

export default function App() {
  return (
    <div className="box">
      <h1>
        <strong>Todo App</strong>
      </h1>

      <section className=".form-section">
        <div className="container">
          <p>To get started, add some items to your list:</p>
          <FormTodo />
        </div>
      </section>

      <section className="todo-list">
        <div>
          <TodoList />
        </div>
      </section>
    </div>
  );
}
