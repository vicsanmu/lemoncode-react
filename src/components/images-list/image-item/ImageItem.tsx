import { Checkbox } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../contexts/CartContext";
import { PictureInfo } from "../../../models/PictureInfo";

interface ImageItemProps {
  image: PictureInfo;
}

export const ImageItem = ({ image }: ImageItemProps) => {
  const [checked, setChecked] = useState(false);
  const { addImageToCart, deleteImageToCart } = useContext(cartContext);

  useEffect(() => {
    setChecked(image.selected);
  }, [image.selected]);

  const selectImage = () => {
    const isChecked = !checked;
    setChecked(isChecked);
    if (isChecked) {
      addImageToCart(image);
    } else {
      deleteImageToCart(image.id);
    }
  };

  return (
    <div className="ImageItem">
      <img src={image.picUrl} alt={image.title} />
      <p>{image.title}</p>
      <Checkbox checked={checked} onClick={selectImage} />
      <span>Buy</span>
    </div>
  );
};
