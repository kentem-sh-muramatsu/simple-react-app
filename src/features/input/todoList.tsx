
import { CompletedToggleButton } from "./completedToggleButton";
import { useInputAtom } from "./inputAtom";

export interface TodoItem {
  id: number;
  text: string;
  date: string;
  completed: boolean;
};

export const TodoList = () => {
  const { todoItemsValue: todoItems, setTodoItemsValue } = useInputAtom();

  const handleDelete = (id: number) => {
    if (confirm("このタスクを削除しますか？")) {
      setTodoItemsValue((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  return (
    <ul className="w-full max-w-2xl">
      {todoItems.map((item: TodoItem) => (
        <li key={item.id} className="mb-2">
          <div className={`flex items-center justify-between border p-4 rounded flex-col gap-2 ${
            item.completed ? "bg-gray-100" : "bg-white"
          }`}>
            <span className={`text-lg ${
              item.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}>{item.text}</span>
            <span className="text-sm text-gray-600">{item.date || "期限なし"}</span>
            <span className={`text-sm font-semibold ${
              item.completed ? "text-green-600" : "text-orange-600"
            }`}>{item.completed ? "完了" : "未完了"}</span>
            <div className="flex gap-2">
              <CompletedToggleButton {...item} />
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                削除
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

