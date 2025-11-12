import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentResult from './StudentResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StudentResult passed={true} />
    <StudentResult passed={false} />
    <h1 className='asdf'>custom style sheet style</h1>
  </>
);
