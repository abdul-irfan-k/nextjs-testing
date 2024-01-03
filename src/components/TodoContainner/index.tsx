"use client";
import React, { FC, useEffect, useState } from "react";
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";
import axios from "axios";
import { addTodo } from "@/actions/TodoAction";
import { useMutation, useQuery, useQueryClient } from "react-query";

export interface todo {
  _id: string;
  content: string;
  isChecked: boolean;
  assignedDate?: Date;
  completedDate?: Date;
}
interface TodoContainerProps {}
const TodoContainer: FC<TodoContainerProps> = ({}) => {
  const queryClient = useQueryClient();

  const [todos, setTodos] = useState<Array<todo>>([]);
  const [popUpWindow, setPopUpWindow] = useState<"add" | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);

  const addTodoHandler = (todo: todo) => {
    setPopUpWindow(undefined);

    return addTodo(todo);
  };

  const getAllTodos = async () => {
    const { data } = await axios.get("http://localhost:3000/api/get-todos");
    return data.todos;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });
  console.log("data", data);

  const todoMotation = useMutation(addTodoHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (error) return <h1>containg the errror </h1>;
  if (isLoading) return <h1>loading</h1>;
  return (
    <div className="max-w-4xl mx-auto mt-4">
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
              submitButtonHandler={todoMotation.mutate}
              cancelButtonHandler={() => setPopUpWindow(undefined)}
            />
          )}
        </div>

        <div className="mt-10">
          <TodoList title="Upcoming Task" todos={data} setTodos={setTodos} />
        </div>
        <div className="mt-20">
          <TodoList title="completed Tasks" todos={data} setTodos={setTodos} />
        </div>
      </>
      {/* {todos.length == 0 && <h1 className="text-slate-50">no todos found</h1>} */}
    </div>
  );
};

export default TodoContainer;
