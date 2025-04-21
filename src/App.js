import "./App.css";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Foot from "./Components/Foot/Foot";
function App() {
  return (
    <>
          <Navbar />
          <Body/>
          <About /> 
          <Experience />
          <Project />
          <Foot />
    </>
  );
}

export default App;
