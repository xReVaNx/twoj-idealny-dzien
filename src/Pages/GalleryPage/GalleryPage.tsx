import style from "./GalleryPage.module.scss";
import Gallery from "../../Layouts/Gallery/Gallery";

const GalleryPage = () => {
  return (
    <div className={style.container}>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
