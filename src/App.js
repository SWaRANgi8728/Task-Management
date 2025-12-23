import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskFormModal from "./components/TaskFormModal";
import { getTasks, addTask, updateTask, deleteTask } from "./services/taskService";
import { Snackbar, Alert, Button } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleSave = async (taskData) => {
    if (currentTask) {
      await updateTask(currentTask.id, taskData);
      setSnackbar({ open: true, message: "Task updated", severity: "success" });
    } else {
      await addTask(taskData);
      setSnackbar({ open: true, message: "Task added", severity: "success" });
    }
    loadTasks();
    setCurrentTask(null);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setSnackbar({ open: true, message: "Task deleted", severity: "info" });
    loadTasks();
  };

  const toggleTask = async (task) => {
    await updateTask(task.id, { completed: !task.completed });
    setSnackbar({ open: true, message: "Task updated", severity: "success" });
    loadTasks();
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setModalOpen(true);
  };

  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
   

    <div className="container mt-5">
  <div className="app-container">
    <div className="app-header">
      <h2 className="task-title"><AssignmentIcon style={{ verticalAlign: "middle", marginRight: "8px", color: "#1976d2", fontSize: "30px" }} />Task Management</h2>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
      >
        + Add Task
      </Button>
    </div>

    <TaskList
      tasks={tasks}
      onDelete={handleDelete}
      onToggle={toggleTask}
      onEdit={handleEdit}
    />

    <TaskFormModal
      open={modalOpen}
      onClose={() => { setModalOpen(false); setCurrentTask(null); }}
      onSave={handleSave}
      task={currentTask}
    />

    <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={closeSnackbar}>
      <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
    </Snackbar>
  </div>
</div>

  );
}

export default App;

