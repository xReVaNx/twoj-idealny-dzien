import style from './GalleryImage.module.scss';
import photo from '../../Assets/Images/image 16.png';

const GalleryImage = () => {
    return(
        <div className={style.container}>
<img src={photo} alt="Photo"/>
</div>
)
}

export default GalleryImage;