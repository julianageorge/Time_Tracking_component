import React from 'react';
import jeremyImage from './image/image-jeremy.png';

const Header = ({ timer, onTimeChange }) => {
  return (
    <div className='header'>
      <div className='customer_info'>
        <img src={jeremyImage} alt="Jeremy" height={60}/>
        <div className='customer_name'>
          <p>Report for</p>
          <h2>Jeremy<br/>Robson</h2>
        </div>
      </div>
      <div className='time_selector'>
        <button onClick={() => onTimeChange('daily')} className={timer === 'daily' ? 'selected' : ''}>Daily</button>
        <button onClick={() => onTimeChange('weekly')} className={timer === 'weekly' ? 'selected' : ''}>Weekly</button>
        <button onClick={() => onTimeChange('monthly')} className={timer === 'monthly' ? 'selected' : ''}>Monthly</button>
      </div>
    </div>
  );
};

export default Header;
