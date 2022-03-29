import { ImagesList } from "../components/images-list/ImagesList";
import { kittiesMock } from "../mocks/Kitties";

export const KittiesPage = () => (
  <div className="KittiesPage">
    <ImagesList imagesList={kittiesMock} />
  </div>
);
