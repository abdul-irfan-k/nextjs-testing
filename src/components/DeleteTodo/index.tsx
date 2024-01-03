"use client";
import React, { FC } from "react";
import BackgroundBlurEffect from "../Shared/BackgroundBlurEffect";

interface DeleteTodoProps {
  deleteHandler(): void;
  cancelButtonHandler(): void;
}
const DeleteTodo: FC<DeleteTodoProps> = ({
  cancelButtonHandler,
  deleteHandler,
}) => {
  return (
    <div>
      <div className=" fixed px-10 py-5 rounded-md w-[40vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-neutral-950 text-slate-50 z-20">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">Delete Todo</span>
          <div
            className="relative w-10 aspect-square rounded-full flex justify-center items-center bg-red-500"
            onClick={cancelButtonHandler}
          >
            <span className="text-lg ">x</span>
          </div>
        </div>

        <div className="mt-10 gap-5 flex justify-between">
          <div
            className="px-3 py-2 flex justify-center items-center w-full bg-red-500 rounded-md "
            onClick={cancelButtonHandler}
          >
            Cancel
          </div>

          <div
            className="px-3 py-2 flex justify-center items-center w-full bg-blue-500 rounded-md "
            onClick={deleteHandler}
          >
            Delete
          </div>
        </div>
      </div>

      <BackgroundBlurEffect />
    </div>
  );
};

export default DeleteTodo;
