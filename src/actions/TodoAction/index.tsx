import axios from "axios";

export const addTodo = async (details: Object) => {
  await axios.post("http://localhost:3000/api/add-todo", details);
};

export const editTodo = async (details: Object) => {
  await axios.post("http://localhost:3000/api/edit-todo",details);
};
export const checkTodo = async (details: Object) => {
  await axios.post("http://localhost:3000/api/check-todo",details);
};
export const deleteTodo = async (details: Object) => {
  await axios.post("http://localhost:3000/api/delete-todo");
};
