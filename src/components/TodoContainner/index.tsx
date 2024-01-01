"use client";
import React, { FC, useEffect, useState } from "react";
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";
import axios from "axios";
import { addTodo } from "@/actions/TodoAction";

export interface todo {
  _id: string;
  content: string;
  isChecked: boolean;
  assignedDate?: Date;
  completedDate?: Date;
}
interface TodoContainerProps {}
const TodoContainer: FC<TodoContainerProps> = ({}) => {
  const [todos, setTodos] = useState<Array<todo>>([]);
  const [popUpWindow, setPopUpWindow] = useState<"add" | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);

  const addTodoHandler = (todo: todo) => {
    setTodos([...todos, todo]);
    setPopUpWindow(undefined);

    addTodo(todo);
  };

  const getAllTodos = async () => {
    const { data } = await axios.get("http://localhost:3000/api/get-todos");
    return data.todos;
  };

  useEffect(() => {
    (async () => {
      (async () => {
        try {
          const todos = await getAllTodos();
          setTodos(todos);
        } catch (error) {
          console.log("no todos found");
          setIsError(true);
          setTodos([]);
        }
      })();
    })();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-4">
      {!isError && todos.length > 0 && (
        <>
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
              <AddTodo
                submitButtonHandler={addTodoHandler}
                cancelButtonHandler={() => setPopUpWindow(undefined)}
              />
            )}
          </div>

          <div className="mt-10">
            <TodoList title="Upcoming Task" todos={todos} setTodos={setTodos} />
          </div>
          <div className="mt-20">
            <TodoList
              title="completed Tasks"
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        </>
      )}
      {todos.length == 0  && (
        <h1 className="text-slate-50">no todos found</h1>
      )}
    </div>
  );
};

export default TodoContainer;
