import "./App.css";
import BestOf from "./sections/BestOf";
import Friends from "./sections/Friends";
import Hero from "./sections/Hero";
import Offerings from "./sections/Offerings";
import WhoIs from "./sections/WhoIs";

function App() {
  return (
    <>
      <Hero />
      <WhoIs />
      <Offerings />
      <BestOf />
      <Friends />
    </>
  );
}

export default App;
