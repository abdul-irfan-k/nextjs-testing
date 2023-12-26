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
interface TodoContainerProps {
  initialTodo:todo[]
}
const TodoContainer: FC<TodoContainerProps> = ({initialTodo}) => {
 console.log('todos  asd',initialTodo)
  const [todos, setTodos] = useState<Array<todo>>(initialTodo);
  const [popUpWindow, setPopUpWindow] = useState<"add" | undefined>(undefined);

  const addTodoHandler = (todo: todo) => {
    setTodos([...todos, todo]);
    setPopUpWindow(undefined);

    addTodo(todo);
  };

  useEffect(() => {
    (async () => {
      // try {
      //   const { data } = await axios.get("http://localhost:3000/api/get-todos");
      //   console.log("data", data);
      //   setTodos(data.todos);
      // } catch (error) {
      //   console.log("error", error);
      // }
    })();
  }, []);

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
    </div>
  );
};

export default TodoContainer;
