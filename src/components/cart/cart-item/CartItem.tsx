import { PictureInfo } from "../../../models/PictureInfo";
import DeleteIcon from "@mui/icons-material/Delete";
import { cartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import "./CartItem.scss";

interface CartItemProps {
  image: PictureInfo;
}

export const CartItem = ({ image }: CartItemProps) => {
  const { deleteImageToCart } = useContext(cartContext);

  return (
    <div className="CartItem">
      <img src={image.picUrl} alt={image.title} />
      <p>{image.title}</p>
      <DeleteIcon
        className="delete-icon"
        onClick={() => deleteImageToCart(image.id)}
      />
    </div>
  );
};
