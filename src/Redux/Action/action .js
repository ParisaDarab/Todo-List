export function setTodo(payload) {
  return { type: "SETTODO", payload };
}

export function deleteTodo(payload) {
  return { type: "DELETE", payload };
}

export function editTodo(payload) {
  return { type: "EDIT", payload };
}
