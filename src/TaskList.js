import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, getIcon, getLastTime }) => {
  return (
    <div className='Tasks'>
      {tasks.map((task, index) => (
        <Task key={index} task={task} getIcon={getIcon} getLastTime={getLastTime} />
      ))}
    </div>
  );
};

export default TaskList;
