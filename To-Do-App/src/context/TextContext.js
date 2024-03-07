import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id, todo) => {},
  updateTodo: (todo) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  useContext(TodoProvider);
};
