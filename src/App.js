import "./App.css";
import Navbar from "./comps/Navbar";
import Divider from "./comps/Divider";
import Hero from "./comps/Hero";
import Categories from "./comps/Categories.jsx";
import Products from "./comps/Products.jsx";
import Deal from "./comps/Deal.jsx";
import Email from "./comps/Email.jsx";
import Footer from "./comps/Footer.jsx";
import Data from "./Data.jsx";
import {useState} from 'react';
// import ShoppingCart from "./comps/ShoppingCart";


function App() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1 }: x
        )
      );
    } else {
      setCartItems([...cartItems,{...product, qty: 1 }]);
    }
  }

  return (
    <div className="App">
      <Navbar onAdd={onAdd} cartItems={cartItems}/>
      <Hero />
      <Divider />
      <Categories />
      <Products onAdd={onAdd}products={products} />
      <Deal />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
