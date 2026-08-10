import Usercard from "./components/Usercard";

function App() {
  return (
    <div className="container">
      <Usercard name="S" style={{ color: "white" }} />
      <Usercard name="A" />
      <Usercard name="K" />
    </div>
  );
}

export default App;
