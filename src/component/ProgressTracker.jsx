import React from "react";

function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker">
      <p>
        {totalTasks === 0
          ? "No tasks available"
          : `${completedTasks} of ${totalTasks} tasks completed`}
      </p>
      <div className="progress-bar" aria-label="Progress bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

ProgressTracker.defaultProps = {
  tasks: [],
};

export default ProgressTracker;
