import React from 'react';
import ellips from './image/icon-ellipsis.svg';

const Task = ({ task, getIcon, getLastTime }) => {
  const { icon, color } = getIcon(task.title);

  return (
    <div className="task">
      <div className='icon' style={{ backgroundColor: color }}>
        <img src={icon} alt={task.title} />
      </div>
      <div className='detailes'>
        <div className='details_header'>
          <h5>{task.title}</h5>
          <img src={ellips} alt="ellipsis" />
        </div>
        <div className='details_buttom'>
          <h1>{task.current}hrs</h1>
          <p>{getLastTime()} - {task.previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
