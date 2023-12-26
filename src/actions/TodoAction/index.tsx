import axios from "axios";

export const addTodo = async (details: Object) => {
  await axios.post("http://localhost:3000/api/add-todo", details);
};

export const editTodo = async (details: Object) => {
  await axios.post("http://localhost:300/api/edit-todo");
};
export const deleteTodo = async (details: Object) => {
  await axios.post("http://localhost:300/api/delete-todo");
};
