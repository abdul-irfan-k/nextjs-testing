"use client";
import React, { FC, useState } from "react";
import AddTask from "../AddTask";

export interface todo {
  content: string;
  isChecked: boolean;
  assignedDate?: Date;
  completedDate?: Date;
}
interface TodoContainerProps {
  todos: todo[];
}
const TodoContainer: FC<TodoContainerProps> = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState<Array<todo>>(initialTodos);
  const [popUpWindow, setPopUpWindow] = useState<"edit" | "add" | undefined>(
    undefined
  );

  const addTodoHandler = (todo: todo) => {
    setTodos([...todos, todo]);
    setPopUpWindow(undefined);
  };
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDo List</h1>
        <div
          className="py-2 rounded-md bg-blue-500 "
          onClick={() => {
            setPopUpWindow("add");
          }}
        >
          Add New Task
        </div>
        {popUpWindow == "add" && (
          <AddTask submitButtonHandler={addTodoHandler} />
        )}
      </div>
      <div className="text-center">{/* <TodoList tasks={tasks} /> */}</div>
    </div>
  );
};

export default TodoContainer;
