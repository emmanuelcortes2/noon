import "./App.css";
import NavBar from "./components/navbar/navbar";
import Headline from "./components/headline/headline";

function App() {
  return (
    <>
      <div className="App">
        <div className="background-image">
          <NavBar />
          <Headline />
        </div>
      </div>
    </>
  );
}

export default App;
