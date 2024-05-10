import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatesTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatesTaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Your Task</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Task Description</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete btn" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-edit btn" onClick={handleEditClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
