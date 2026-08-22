import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function Handleincrementclick(){
    dispatch(increment());
  }
  function Handledecrementclick(){
    dispatch(decrement());
  }
  function Handleresetclick(){
    dispatch(reset());

  }
  function Handleincamountclick(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div className='container'>
    <button onClick={Handleincrementclick}>+</button>
    <p>COUNT:{count}</p>
    <button onClick={Handledecrementclick}>-</button>
    <br />
    <button onClick={Handleresetclick}>RESET</button>
    <br />
    <input type="Number" value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}/>
    <br />
    <br />
    <button onClick={Handleincamountclick}>inc by amount</button>

    </div>
  );
}

export default App;