import "./App.scss";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { KittiesPage } from "./pages/KittiesPage";
import { PuppiesPage } from "./pages/PuppiesPage";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <div className="pages">
          <BrowserRouter>
            <Link to="/kitties">Kitties</Link>
            <Link to="/puppies">Puppies</Link>
            <Routes>
              <Route path="/" element={<Navigate to="/kitties" />} />
              <Route path="kitties" element={<KittiesPage />} />
              <Route path="puppies" element={<PuppiesPage />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
