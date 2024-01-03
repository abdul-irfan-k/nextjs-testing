import React, { FC, Fragment, useState } from "react";
import { todo } from "../TodoContainner";
import TodoCard from "./TodoCard";
import { checkTodo, deleteTodo, editTodo } from "@/actions/TodoAction";
import EditTodo from "../EditTask";
import DeleteTodo from "../DeleteTodo";

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
    checkTodo({ _id, isChecked: !selectedTodo.isChecked });
  };

  const todoEditButtonHandler = (todo: todo) => {
    setSeletectedTodo(todo);
    setPopUpWindow("edit");
  };

  const todoDeleteButtonHandler = (todo:todo) => {
    setSeletectedTodo(todo)
    setPopUpWindow("delete",todo)

  }

  const editSubmitButtonHandler = (todo: todo) => {
    setPopUpWindow(undefined);
    setTodos([...todos.filter((t) => t._id != todo._id), { ...todo }]);
    editTodo(todo);
  };

  const deleteSubmitButtonHandler = (todo: todo) => {
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
          .filter((todo) => todo.isChecked == (title == "completed Tasks"))
          .map((todo, index) => {
            console.log(todo);
            return (
              <Fragment key={index}>
                <TodoCard
                  todo={todo}
                  onClickHandler={() => todoCardClickHandler(todo._id)}
                  deleteButtonHandler={() => todoDeleteButtonHandler(todo)}
                  editButtonHandler={() => todoEditButtonHandler(todo)}
                />
              </Fragment>
            );
          })}
      </div>

      {popUpWindow == "edit" && selectedTodo != undefined && (
        <EditTodo
          editTodoHandler={editSubmitButtonHandler}
          todo={selectedTodo}
          cancelButtonHandler={() => {
            setPopUpWindow(undefined);
            setSeletectedTodo(undefined);
          }}
        />
      )}

      {popUpWindow == "delete" && selectedTodo != undefined && (
        <DeleteTodo
          cancelButtonHandler={() => {
            setPopUpWindow(undefined);
            setSeletectedTodo(undefined);
          }}
          deleteHandler={() => {
            setPopUpWindow(undefined);
            setSeletectedTodo(undefined);
            deleteSubmitButtonHandler(selectedTodo);
          }}
        />
      )}
    </div>
  );
};

export default TodoList;
