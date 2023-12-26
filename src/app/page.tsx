import TodoContainer from "@/components/TodoContainner";
import axios from "axios";

export const getAllTodos = async () => {
  const { data } = await axios.get("http://localhost:3000/api/get-todos");
  return data.todos;
};
export default async function Home() {
  const todos = await getAllTodos();
  return (
    <div>
      <TodoContainer initialTodo={todos} />
    </div>
  );
}
