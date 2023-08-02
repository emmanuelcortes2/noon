import "./App.css";
import NavBar from "./components/navbar/navbar";
import Headline from "./components/headline/headline";
import Features from "./components/features/features";

function App() {
  return (
    <>
      <div className="App">
        <div className="background-image">
          <NavBar />
          <Headline />
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
