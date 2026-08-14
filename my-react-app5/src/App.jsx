
import { useState } from 'react';
import Color from './component/Color';

function App() {
  const [click, setClick] = useState(0);
  const [color, setColor] = useState('white');

  function handleClick() {
    setClick(click+1);

    const randomColor = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`;

    setColor(randomColor);
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color
      }}
      onClick={handleClick}
    >
      <Color />

      <h2>Clicks on the page: {click}</h2>
      <h2>Current color: {color}</h2>
    </div>
  );
}

export default App;



  // function mouse(){
  //   alert('para ke upar mouse le kar aae ho');
  // }
  // function handleinput(e){
  //   console.log('ur input has been changed',e.target.value);
  // }
  // function handlesubmit(e){
  //   e.preventDefault();
  //   alert("form submit kar du kya")
  // }




      {/* <button>
        Click me
      </button> */}



{/* 
    <form onSubmit={handlesubmit}>
      <input type="text" onChange={handleinput} />
      <button type="submit">submit</button>
      
    </form> */}


      {/* <p onMouseOver={mouse} style={{color:"red",border:"2px solid black"}}>
        i am para

      </p>
      <button onClick={()=>{alert('i got clicked')}}>
        Click me
      </button> */}

  

