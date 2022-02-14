import Home from "./components/home/Home";
import data from "./data/db.json";

function App() {
  return (
    <>
    <Home myData={data}/>
    {/* <p style={{color:props.color}} > Hello here ... {props.name} </p> */}
    </>
  );
}

export default App;
