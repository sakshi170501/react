
import Expensive from './component/Expensive';


function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <div>
      {/* <div>
        Count: {count}
      </div>

      <div>
        <button onClick={handleClick}>
          Increment button
        </button>
      </div>

      <div>
        <ChildComponent
          buttonName="click me"
          handleClick={handleClick}
        />
      </div> */}
      <div>
        <Expensive/>
      </div>
    </div>
  );
}

export default App;