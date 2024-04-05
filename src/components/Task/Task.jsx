import React, { useState, useContext } from 'react';
import moment from 'moment';
import "./task.css";
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false); // To toggle edit mode
    const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description }); // To store edited task content

    const handleRemove = async (e) => {
        e.preventDefault();
        const taskId = task._id;
        console.log(task); 

        try {
            const response = await fetch(`http://localhost:8080/api/task/removeTask/${taskId}`, {
                method: 'GET', // If your server expects a DELETE request, change this to 'DELETE'
                headers: {
                    // Assuming you're storing your token in localStorage; adjust as necessary
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }

            // Assuming the task was successfully deleted on the server,
            // now remove it from the local state as well
            dispatch({
                type: "REMOVE_TASK",
                id: id
            });
        } catch (error) {
            console.error('Error removing task:', error);
        }
    };

    const handleMarkDone = (e) => {
        dispatch({
            type: "MARK_DONE",
            id
        });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Here, dispatch an action to update the task in your state
        // Ensure your state management logic can handle this action
        dispatch({
            type: "UPDATE_TASK",
            id,
            task: editedTask // This will need to be handled in your reducer or state management logic
        });

        

        try {
            id=id.toString();
            console.log(task._id);
            const response = await fetch(`http://localhost:8080/api/task/todos/${task._id}`, {
                method: 'PUT', // If your server expects a DELETE request, change this to 'DELETE'
                headers: {
                    // Assuming you're storing your token in localStorage; adjust as necessary
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    title:editedTask.title,
                    description:editedTask.description,
                    completed:false
                })
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error editing task:', error);
        }
        setIsEditing(false);
        window.location.reload();
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className='bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3'>
            <div className="mark-done">
                <input type="checkbox" className="checkbox" onChange={handleMarkDone} checked={task.completed} />
            </div>
            {
                isEditing ? (
                    <div className="task-info-edit text-slate-900 text-sm w-10/12">
                        <input
                            type="text"
                            name="title"
                            value={editedTask.title}
                            onChange={handleChange}
                            className="task-title-edit"
                        />
                        <textarea
                            name="description"
                            value={editedTask.description}
                            onChange={handleChange}
                            className="task-description-edit"
                        />
                    </div>
                ) : (
                    <div className="task-info text-slate-900 text-sm w-10/12">
                        <h4 className="task-title text-lg capitalize">{task.title}</h4>
                        <p className="task-description">{task.description}</p>
                    </div>
                )
            }
            <div className=' italic opacity-60'>
                {task?.createdAt ? <p>{moment(task.createdAt).fromNow()}</p> : <p>just now</p>}
            </div>
            <div className="remove-task text-sm text-white">
                <DeleteIcon
                    onClick={handleRemove}
                    className="remove-task-btn bg-blue-700 rounded-full"
                />
            </div>
            <div className="update-task text-sm text-white">
                {isEditing ? (
                    <button onClick={handleUpdate}>Save</button>
                ) : (
                    <UpdateIcon
                        onClick={toggleEdit}
                        className="update-task-btn bg-blue-700 rounded-full"
                    />
                )}
            </div>
        </div>
    );
}

export default Task;
