// App.js
import React, { useEffect, useState } from 'react';
import data from './data.json';
import Header from './Header';
import TaskList from './TaskList';
import exc from './image/icon-exercise.svg';
import work from './image/icon-work.svg';
import play from './image/icon-play.svg';
import selfCare from './image/icon-self-care.svg';
import study from './image/icon-study.svg';
import social from './image/icon-social.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [timer, setTimer] = useState('daily');

  useEffect(() => {
    getTaskHandler(timer);
  }, [timer]);

  const getTaskHandler = (time) => {
    setTasks(data.map((task) => ({
      ...task,
      current: task.timeframes[time].current,
      previous: task.timeframes[time].previous,
    })));
  };

  const timeChangeHandler = (time) => {
    setTimer(time);
  };

  const getLastTime = () => {
    if (timer === 'daily') return 'Yesterday';
    if (timer === 'weekly') return 'Last Week';
    if (timer === 'monthly') return 'Last Month';
  };

  const getIcon = (title) => {
    if (title === 'Work') return { icon: work, color: 'hsl(15, 100%, 70%)' };
    if (title === 'Play') return { icon: play, color: 'hsl(195, 74%, 62%)' };
    if (title === 'Study') return { icon: study, color: 'hsl(348, 100%, 68%)' };
    if (title === 'Exercise') return { icon: exc, color: 'hsl(145, 58%, 55%)' };
    if (title === 'Social') return { icon: social, color: 'hsl(264, 64%, 52%)' };
    return { icon: selfCare, color: 'hsl(43, 84%, 65%)' };
  };

  return (
    <div className='App'>
      <Header timer={timer} onTimeChange={timeChangeHandler} />
      <TaskList tasks={tasks} getIcon={getIcon} getLastTime={getLastTime} />
    </div>
  );
}

export default App;
