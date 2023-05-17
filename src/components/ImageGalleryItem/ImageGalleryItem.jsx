import propTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <GalleryItem className="gallery-item">
      <Image
        src={webformatURL}
        alt={tags}
        data-large={largeImageURL}
        onClick={onClick}
      />
    </GalleryItem>
  );
};
ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
};
export default ImageGalleryItem;
