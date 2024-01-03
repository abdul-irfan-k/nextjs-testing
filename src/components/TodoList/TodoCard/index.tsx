import { todo } from "@/components/TodoContainner";
import CorrectIcon from "@/components/icon/Correct";
import DeleteIcon from "@/components/icon/Delete";
import EditIcon from "@/components/icon/Edit";
import React, { FC } from "react";

interface TodoCardProps {
  todo: todo;
  editButtonHandler(): void;
  deleteButtonHandler(): void;
  onClickHandler(): void;
}
const TodoCard: FC<TodoCardProps> = ({
  deleteButtonHandler,
  editButtonHandler,
  onClickHandler,
  todo,
}) => {
  return (
    <div className="py-4 px-4 rounded-lg flex dark:bg-neutral-900 ">
      <div className="w-[10%] flex  items-center">
        <div
          className={
            "relative flex justify-center items-center rounded-full w-8 aspect-square border-[2px] overflow-hidden  " +
            (todo.isChecked ? " " : " border-neutral-400")
          }
          onClick={onClickHandler}
        >
          {todo.isChecked && (
            <CorrectIcon className="fill-slate-50 w-4 aspect-square" />
          )}
        </div>
      </div>
      <span className="text-xl ">{todo.content}</span>

      <div className="ml-auto gap-1 flex items-center ">
        {todo.completedDate == undefined && (
          <div
            className="relative flex justify-center items-center   w-10 aspect-square overflow-hidden  "
            onClick={editButtonHandler}
          >
            <EditIcon className="fill-blue-500 w-6 aspect-square" />
          </div>
        )}
        <div
          className="relative flex justify-center items-center  w-10 aspect-square overflow-hidden  "
          onClick={deleteButtonHandler}
        >
          <DeleteIcon className="fill-red-500 w-full aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
