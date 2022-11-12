import "./App.css";
import Navbar from "./comps/Navbar";
import Divider from "./comps/Divider";
import Hero from "./comps/Hero";
import Categories from "./comps/Categories.jsx";
import Products from "./comps/Products.jsx";
import Deal from "./comps/Deal.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Divider />
      <Categories />
      <Products />
      <Deal />
    </div>
  );
}

export default App;
