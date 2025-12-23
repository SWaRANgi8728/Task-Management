import { useState, useEffect } from "react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem,  Checkbox,
  FormControlLabel} from "@mui/material";

const priorities = ["low", "normal", "high"];

function TaskFormModal({ open, onClose, onSave, task }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority || "normal");
      setCompleted(task.completed || false);
    } else {
      setTitle("");
      setDescription("");
      setPriority("normal");
      setCompleted(false); 
    }
  }, [task]);

  const handleSave = () => {
    if (!title) return alert("Title is required");
    onSave({ title, description, priority, completed});
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{task ? "Edit Task" : "Add Task"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="dense"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          select
          label="Priority"
          fullWidth
          margin="dense"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          {priorities.map(p => (
            <MenuItem key={p} value={p}>{p}</MenuItem>
          ))}
        </TextField>

          {/* ✅ Task Status */}
          <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          }
          label={completed ? "Completed" : "Incomplete"}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>{task ? "Update" : "Add"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskFormModal;
