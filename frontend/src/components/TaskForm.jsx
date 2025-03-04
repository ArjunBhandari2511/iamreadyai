import { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
  const [text, setText] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const response = await axios.post("http://localhost:5000/api/tasks", {
      text,
    });
    onTaskAdded(response.data);
    setText("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
