import React, { FC, Fragment, useState } from "react";
import { todo } from "../TodoContainner";
import TodoCard from "./TodoCard";
import { deleteTodo, editTodo } from "@/actions/TodoAction";

interface TodoListProps {
  todos: todo[];
  title: "Upcoming Task" | "completed Tasks";
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}
const TodoList: FC<TodoListProps> = ({ title, todos, setTodos }) => {
  const [selectedTodo, setSeletectedTodo] = useState<todo | undefined>(
    undefined
  );
  const [popUpWindow, setPopUpWindow] = useState<"edit" | "delete" | undefined>(
    undefined
  );

  const todoCardClickHandler = (_id: string) => {
    const selectedTodo = todos.filter((todo) => todo._id == _id)[0];
    setTodos([
      ...todos.filter((todo) => todo._id != _id),
      { ...selectedTodo, isChecked: !selectedTodo.isChecked },
    ]);
  };

  const todoEditButtonHandler = (todo: todo) => {
    setSeletectedTodo(todo);
    setPopUpWindow("edit");
  };

  const editSubmitButtonHandler = (todo: todo) => {
    editTodo(todo);
  };

  const deleteSubmitButtonHandler = (todo) => {
    deleteTodo(todo);
  };
  return (
    <div className="flex flex-col text-slate-50">
      <span className="text-4xl ">{title}</span>
      <div className="mt-10 px-4 flex justify-between items-center text-xl font-medium">
        <span>Tasks</span>
        <span>Actions</span>
      </div>
      <div className="mt-2 flex flex-col gap-2 ">
        {todos
          .filter((todo) => todo.isChecked == (title == "Upcoming Task"))
          .map((todo, index) => {
            return (
              <Fragment key={index}>
                <TodoCard
                  {...todo}
                  onClickHandler={() => todoCardClickHandler(todo._id)}
                  deleteButtonHandler={() => {}}
                  editButtonHandler={() => todoEditButtonHandler(todo)}
                />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
