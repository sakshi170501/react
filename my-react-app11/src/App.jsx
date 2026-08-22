import './App.css';
import { useEffect, useState ,useRef} from 'react';

function App() {
  const[time,setTime]=useState(0);
  let timeRef=useRef(null);
  function startTimer(){
    timeRef.current=setInterval(()=>{
      setTime(time => time+1)
    },1000);

  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current=null;

  }
  function resetTimer(){
    stopTimer();
    setTime(0);

  }
  // const [count, setCount] = useState(0);
  // let val=useRef(0);
  // let btnRef=useRef();

  // function handleIncrement() {
  //   val.current=val.current+1;
  //   console.log("value of val:",val);
  //   setCount(count + 1);
  // }
  // useEffect(() => {
  //   console.log("main ferse render ho gai hu");

  // })
  // function changecolor(){
  //   btnRef.current.style.backgroundColor="red";

  // }

  return (
    <div>
      <h1>StopWatch:{time}seconds</h1>
      <button onClick={startTimer}>
        Start

      </button>
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <button onClick={resetTimer}>
        Reset

      </button>

    </div>



    // <div>
    //   <button ref={btnRef} onClick={handleIncrement}>
    //     Increment
    //   </button>

    //   <br />
    //   <button onClick={changecolor}>
    //     Change the color of 1st button
    //   </button>

    //   <div>
    //     Count: {count}
    //   </div>
    // </div>
  );
}

export default App;