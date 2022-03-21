import { ADD_COUNT } from "./actions.js";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...store, count: store.count + payload };

    case "ADD_TODO":
      return { ...store, todos: [...store.todos, payload] };
    default:
      return store;
  }
};
