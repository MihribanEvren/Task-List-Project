import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && taskDesc !== "") {
      if (taskFormUpdate) {
        onUpdate(task.id, title, taskDesc);
      } else {
        onCreate(title, taskDesc);
      }
      setTitle("");
      setTaskDesc("");
    }
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h2>Edit Task!</h2>
          <form className="task-form">
            <label className="task-label">Edit title:</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="task-label">Edit the task:</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-btn btn update-button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <div className="box">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <h2>Add The Task!</h2>
            <form className="task-form">
              <label className="task-label">Task title:</label>
              <input
                value={title}
                onChange={handleChange}
                className="task-input"
                type="text"
              />
              <label className="task-label">Enter the task:</label>
              <textarea
                value={taskDesc}
                onChange={handleTaskChange}
                className="task-input"
                rows={5}
              />
              <button className="task-btn btn" onClick={handleSubmit}>
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
