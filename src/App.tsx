import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {

  const logged = false

  return (
    <div className="w-full h-screen content" style={{fontFamily: 'Josefin Sans'}}>
      <h1 className='title text-4xl p-4'>Hire <span className='title1'>Me</span></h1>
      {!logged && <Home />}
    </div>
  );
}

export default App;
