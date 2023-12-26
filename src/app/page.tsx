import TodoContainer from "@/components/TodoContainner";

// export const getAllTodos = async (): Promise<ITask[]> => {
//   const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
//   const todos = await res.json();
//   return todos;
// };
export default function Home() {
  // const todos = await getAllTodos();
  return (
    <div>
      <TodoContainer  />
    </div>
  );
}
