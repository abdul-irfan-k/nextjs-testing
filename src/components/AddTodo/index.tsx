import React, { FC, useState } from "react";
import { todo } from "../TodoContainner";
import BackgroundBlurEffect from "../Shared/BackgroundBlurEffect";
// import { v4 as uuidv4 } from 'uuid';

interface AddTodoProps {
  submitButtonHandler(todo: todo): void;
  cancelButtonHandler(): void;
  
}
const AddTodo: FC<AddTodoProps> = ({ submitButtonHandler ,cancelButtonHandler}) => {
  const [todoDetail, setTodoDetail] = useState<todo>({
    _id:"",
    content: "",
    isChecked: false,
    assignedDate: undefined,
    completedDate: undefined,
  });

  const submitHandler = () => {
    const generatedString = 'asdfasdf'
    submitButtonHandler({ ...todoDetail, assignedDate: new Date(),_id:generatedString });
    setTodoDetail({
      _id:"",
      content: "",
      isChecked: false,
      assignedDate: undefined,
      completedDate: undefined,
    });
  };

  return (
    <div  data-testid="addTodoContainer" >
      <div className=" fixed px-10 py-5 rounded-md w-[40vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-neutral-950 text-slate-50 z-20">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">Add Task</span>
          <div className="relative w-10 aspect-square rounded-full flex justify-center items-center bg-red-500" onClick={cancelButtonHandler}>
            <span className="text-lg ">x</span>
          </div>
        </div>

        <div className="mt-10 gap-5 flex justify-between">
          <div className="flex-1 border-[1px] border-neutral-600 rounded-md">
            <input
              type="text"
              className="w-full px-3 py-2 text-slate-50 bg-transparent outline-none border-none"
              onChange={(e) => {
                setTodoDetail({ ...todoDetail, content: e.target.value });
              }}
              placeholder="Enter the task content"
            />
          </div>
          <div
            className="px-3 py-2 bg-blue-500 rounded-md "
            onClick={submitHandler}
          >
            Add
          </div>
        </div>
      </div>

      <BackgroundBlurEffect />
    </div>
  );
};

export default AddTodo;
