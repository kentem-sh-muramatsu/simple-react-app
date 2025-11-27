
import { useInputAtom } from "./inputAtom";
import type { TodoItem } from "./todoList";


export const CompletedToggleButton = (todoItem: TodoItem) => {
  const { setTodoItemsValue } = useInputAtom();
  
  const handleToggle = () => {
    setTodoItemsValue((prevItems) =>
      prevItems.map((item) =>
        item.id === todoItem.id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {todoItem.completed ? "未完了にする" : "完了にする"}
    </button>
  );
};

