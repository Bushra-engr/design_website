import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Done / Undo task
  const toggleDone = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Reset all tasks
  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>To-Do App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="no-task">No tasks added yet.</p>
          ) : (
            tasks.map((item, index) => (
              <div className="task-row" key={item.id}>
                <span className="serial-number">{index + 1}.</span>

                <span
                  className={
                    item.completed ? "task-text completed" : "task-text"
                  }
                >
                  {item.text}
                </span>

                <button
                  className="done-btn"
                  onClick={() => toggleDone(item.id)}
                >
                  {item.completed ? "Undo" : "Done"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <button className="reset-btn" onClick={resetTasks}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;