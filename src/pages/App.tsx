import { InputContainer } from "../features/input/InputContainer";
import { TodoList } from "../features/input/todoList";

export const App = () => {
  return (
    <main className="p-4 flex flex-col gap-4 items-center">
      <h1 className=" text-4xl text-teal-700 text-center">Simple React App</h1>
      <InputContainer />
      <TodoList />
    </main>
  );
};
