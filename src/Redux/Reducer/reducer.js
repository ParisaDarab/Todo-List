export function reducer(state = [], { type, payload }) {
  console.log(payload);
  console.log(state);
  switch (type) {
    case "SETTODO":
      return [...state, payload];
    case "DELETE":
      return state.filter((item) => item.key != payload);
    case "EDIT":
      let item = state.find((item) => item.key == payload.key);
      item.text = payload.text;
      let newTodos = state.filter((i) => i.key != payload.key);

      return [...newTodos, item];

    default:
      return state;
  }
}
