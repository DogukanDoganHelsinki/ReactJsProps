import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />
      <Product
        name="Iphone 13 Pro Max"
        description="The best iphone"
        price={1200}
      />
      <Product
        name="Macbook Pro"
        description="Your Favourite Computer"
        price={59.99}
      />

      {/* Product name, description, price */}
      {/* Product name, description, price */}
      {/* Product name, description, price */}
      {/* Product name, description, price */}
    </div>
  );
}

export default App;
