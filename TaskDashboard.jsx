import React, { useState } from "react";

export default function TaskDashboard() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: taskInput, completed: false }
    ]);

    setTaskInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div style={styles.container}>
      <h2> Task Dashboard</h2>

      <div style={styles.statsBox}>
        <span>Total: {totalTasks}</span>
        <span>Completed: {completedTasks}</span>
        <span>Pending: {pendingTasks}</span>
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Enter New Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.length === 0 && <p>No tasks yet</p>}

        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "green" : "black",
                cursor: "pointer"
              }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>

            <button
              onClick={() => removeTask(task.id)}
              style={styles.removeButton}
            >
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#b7dce2ff",
    color: "black",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "50px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },

  statsBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "18px",
    fontWeight: "bold",
  },

  inputArea: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  addButton: {
    backgroundColor: "#131518ff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },

  removeButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 10px",
    cursor: "pointer",
  },
};
