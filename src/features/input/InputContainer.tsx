import { useInputAtom } from "./inputAtom";

export const InputContainer = () => {
  const { setTodoItemsValue } = useInputAtom();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = new Date().getTime();
    const text = formData.get("title") as string;
    const date = formData.get("date") as string;

    const todoItem = { id, text, date, completed: false };
    setTodoItemsValue((prevItems) => [...prevItems, todoItem]);
    
    // フォームをリセット
    e.currentTarget.reset();
  };

  return (
    <form className="flex gap-4 flex-col" onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Todo名を入力(必須)"
        className="p-2 border-2 border-slate-500 rounded"
        required
      />
      <input
        name="date"
        type="date"
        className="p-2 border-2 border-slate-500 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800"
      >
        登録
      </button>
    </form>
  );
};
