import style from './Gallery.module.scss';
import GalleryImage from '../../Components/GalleryImage/GalleryImage';

const Gallery = () => {
return(
    <div className={style.container}>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
    </div>
)
}

export default Gallery;