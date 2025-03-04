import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = ({ newTask }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((response) => {
      setTasks(response.data);
    });
  }, [newTask]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default TaskList;
