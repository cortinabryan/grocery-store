import "./App.css";
import Navbar from "./comps/Navbar";
import Divider from "./comps/Divider";
import Hero from "./comps/Hero";
import Categories from "./comps/Categories.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Divider />
      <Categories />
    </div>
  );
}

export default App;
