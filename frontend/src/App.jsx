import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState(null);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onTaskAdded={setNewTask} />
      <TaskList newTask={newTask} />
    </div>
  );
}

export default App;
