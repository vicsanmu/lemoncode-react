import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext";
import { PictureInfo } from "../../models/PictureInfo";
import { ImageItem } from "./image-item/ImageItem";
import "./ImagesList.scss";

interface ImagesListProps {
  imagesList: PictureInfo[];
}

export const ImagesList = ({ imagesList }: ImagesListProps) => {
  const { imagesSelected } = useContext(cartContext);
  const [imagesUpdated, setImagesUpdated] = useState(imagesList);

  useEffect(() => {
    const imagesWithSelectedUpdated = imagesList.map((image) => ({
      ...image,
      selected: imagesSelected.some(
        (imageSelected) => imageSelected.id === image.id
      ),
    }));
    setImagesUpdated(imagesWithSelectedUpdated);
  }, [imagesSelected]);

  return (
    <div className="ImagesList">
      {imagesUpdated.map((image) => (
        <ImageItem image={image} />
      ))}
    </div>
  );
};
