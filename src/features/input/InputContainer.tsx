import { useInputAtom } from "./inputAtom";

export const InputContainer = () => {
  const { todoItemsValue, setTodoItemsValue } = useInputAtom();

  const onSubmit = (data: FormData) => {
    const formData = Object.fromEntries(data.entries());
    const id = todoItemsValue.length + 1;
    const text = formData.title as string;
    const date = formData.date as string;
    const todoItem = { id, text, date, completed: false };

    setTodoItemsValue((prevItems) => [...prevItems, todoItem]);
  };

  return (
    <form className="flex gap-4 flex-col" action={onSubmit}>
      <input
        name="title"
        type="text"
        className="p-2 border-2 border-slate-500 rounded"
      />
      <input
        name="date"
        type="date"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-700 text-white rounded"
      >
        登録
      </button>
    </form>
  );
};
