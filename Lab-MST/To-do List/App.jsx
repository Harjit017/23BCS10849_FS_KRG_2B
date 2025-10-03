import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const newTask = { id: Date.now().toString(), text, completed: false };
    setTasks((prev) => [newTask, ...prev]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const clearCompleted = () =>
    setTasks((prev) => prev.filter((t) => !t.completed));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring"
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {tasks.length === 0 ? (
            <li className="text-center text-gray-500">
              No tasks yet. Add one above ✨
            </li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between p-2 border rounded-lg"
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                  />
                  <span
                    className={
                      task.completed ? "line-through text-gray-400" : ""
                    }
                  >
                    {task.text}
                  </span>
                </label>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">
            {tasks.length} task{tasks.length !== 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setTasks([])}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Clear All
            </button>
            <button
              onClick={clearCompleted}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
