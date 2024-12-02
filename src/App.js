import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [color,setColor]=useState();

  return (
    
    <div className=' w-full h-screen duration-200 bg-black relative' style={{backgroundColor:color}}>
      <div className='flex justify-center items-center gap-x-2 h-screen'>
        <button onClick={()=>setColor('red')} className='text-black-700 bg-red-500 rounded-full px-5 py-2 gap-x-2 shadow-lg'>red</button>
        <button onClick={()=>setColor('blue')} className='text-black-700 bg-blue-500 rounded-full px-5 py-2 shadow-lg'>blue</button>
        <button onClick={()=>setColor('green')} className='text-black-700 bg-green-500 rounded-full px-5 py-2 shadow-lg'>green</button>
      </div>

    </div>
  );
}

export default App;
