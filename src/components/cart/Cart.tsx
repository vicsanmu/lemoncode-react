import { useContext, useState } from "react";
import { cartContext } from "../../contexts/CartContext";
import { CartItem } from "./cart-item/CartItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import CloseIcon from "@mui/icons-material/Close";

export const Cart = () => {
  const { imagesSelected, cleanCart } = useContext(cartContext);
  const [cartHidden, setCartHidden] = useState(false);

  return (
    <>
      {!cartHidden ? (
        <div className="Cart">
          <div className="cart-title">
            <div className="cart-text">
              <ShoppingCartIcon fontSize="large" /> <span>Cart</span>
            </div>
            <div className="clean" onClick={cleanCart}>
              <DoDisturbIcon fontSize="medium" /> <span>Clean Cart</span>
            </div>
            <div className="close" onClick={() => setCartHidden(true)}>
              <CloseIcon fontSize="medium" />
            </div>
          </div>
          {imagesSelected.map((imageSelected) => (
            <CartItem image={imageSelected} />
          ))}
        </div>
      ) : (
        <div className="cart-open" onClick={() => setCartHidden(false)}>
          <ShoppingCartIcon fontSize="large" /> <span>Cart</span>
        </div>
      )}
    </>
  );
};
