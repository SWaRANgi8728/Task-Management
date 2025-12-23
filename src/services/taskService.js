import axios from "axios";

//const API_URL = "http://localhost:5000/tasks";

// After deployment
const API_URL = "https://task-management-backend-5k2a.onrender.com/tasks";

export const getTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
