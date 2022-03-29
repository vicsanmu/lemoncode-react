import { ImagesList } from "../components/images-list/ImagesList";
import { puppiesMock } from "../mocks/Puppies";

export const PuppiesPage = () => (
  <div className="PuppiesPage">
    <ImagesList imagesList={puppiesMock} />
  </div>
);
