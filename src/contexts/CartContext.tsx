import { createContext, FC, useState } from "react";
import { PictureInfo } from "../models/PictureInfo";

interface ICartContext {
  imagesSelected: PictureInfo[];
  addImageToCart: (image: PictureInfo) => void;
  deleteImageToCart: (id: string) => void;
  cleanCart: () => void;
}

const cartContext = createContext({} as ICartContext);
const { Provider } = cartContext;

const CartProvider: FC = ({ children }) => {
  const [imagesSelected, setImagesSelected] = useState([] as PictureInfo[]);

  const addImageToCart = (image: PictureInfo) => {
    image.selected = true;
    setImagesSelected([...imagesSelected, image]);
  };

  const deleteImageToCart = (id: string) => {
    setImagesSelected(
      imagesSelected.filter(({ id: idSelected }) => idSelected !== id)
    );
  };

  const cleanCart = () => {
    setImagesSelected([]);
  };

  return (
    <Provider
      value={{
        imagesSelected,
        addImageToCart,
        deleteImageToCart,
        cleanCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartProvider, cartContext };
