import {IconButton, Checkbox, Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  /*const getColor = (priority) => {
   if (priority === "high") return "error";
      if (priority === "low") return "success";
      return "default";
   };*/

   const getPriorityStyle = (priority) => {
    if (priority === "high") {
      return { bgcolor: "error.main", color: "white" };
    }
    if (priority === "low") {
      return { bgcolor: "success.main", color: "white" };
    }
    // NORMAL
    return { bgcolor: "#495057", color: "white" }; // dark grey
  };
  

  return (
    
    <div className="table-responsive">
    <table className="table table-striped mt-3">
      <thead className="table-dark">
        <tr>
          <th className="text-white">Done</th>
          <th className="text-white">Title</th>
          <th className="text-white">Description</th>
          <th className="text-white">Priority</th>
          <th className="text-white">Status</th>
          <th className="text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <td>
              <Checkbox checked={task.completed} onChange={() => onToggle(task)} />
            </td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            {/*<td><Chip label={task.priority}  color={getColor(task.priority)} /></td>*/}
            <td>
  <Chip
    label={task.priority}
    sx={getPriorityStyle(task.priority)}
    size="small"
  />
</td>

             {/* ✅ Status */}
             <td>
              <Chip
                label={task.completed ? "Completed" : "Incomplete"}
                color={task.completed ? "success" : "error"}
                size="small"
              />
            </td>
            <td className="action-btns">
              {/*<Button color="primary" onClick={() => onEdit(task)}>Edit</Button>
              <Button color="error" onClick={() => onDelete(task.id)}>Delete</Button>*/}
              <IconButton
                color="primary"
                onClick={() => onEdit(task)}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                onClick={() => onDelete(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
 );
}

export default TaskList;
