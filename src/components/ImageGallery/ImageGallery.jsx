import { Component } from 'react';
import propTypes from 'prop-types';
import fetchPhotos from 'services/imgApi';
import { Gallery, GalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { Notify } from 'notiflix';

class ImageGallery extends Component {
  static propTypes = {
    query: propTypes.string.isRequired,
    setLargeImageUrl: propTypes.func.isRequired,
    toggleModal: propTypes.func.isRequired,
  };
  state = {
    loading: false,
    isNotEnd: true,
    page: 1,
    images: [],
  };
  toggleLoader = () => {
    this.setState(prevState => ({ loading: !prevState.loading }));
  };
  toggleButtonShown = data => {
    const totalPages = data.total / 12;
    if (this.state.page === totalPages || this.state.page > totalPages) {
      Notify.info('You have reached the end of the collection');
      this.setState(prevState => ({ isNotEnd: !prevState.isNotEnd }));
    }
  };
  fetchPhotoOnSearchQuery = (query, page) => {
    const { toggleButtonShown, toggleLoader } = this;
    fetchPhotos(query, page).then(data => {
      this.setState({ images: data.hits, page: 1 });
      toggleButtonShown(data);
      toggleLoader();
    });
  };
  fetchPhotoOnButtonClick = (query, page) => {
    const { toggleButtonShown, toggleLoader } = this;
    fetchPhotos(query, page).then(data => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
      toggleButtonShown(data);
      toggleLoader();
    });
  };
  increasePageCountOnButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      await this.fetchPhotoOnSearchQuery(this.props.query, this.state.page);
      await this.toggleLoader();
      return;
    }
    if (prevState.page !== this.state.page && this.state.page > 1) {
      await this.fetchPhotoOnButtonClick(this.props.query, this.state.page);
      await this.toggleLoader();
      return;
    }
  }
  getLargeImageUrl = event => {
    const { setLargeImageUrl, toggleModal } = this.props;
    setLargeImageUrl(event.target.dataset.large);
    toggleModal();
  };
  render() {
    const { images, loading } = this.state;
    const { getLargeImageUrl, increasePageCountOnButtonClick } = this;
    return (
      <>
        {images.length ? (
          <GalleryContainer>
            <Gallery>
              {this.state.images.map(image => (
                <ImageGalleryItem
                  image={image}
                  key={image.id}
                  onClick={getLargeImageUrl}
                />
              ))}
            </Gallery>
            {this.state.isNotEnd && (
              <Button onClick={increasePageCountOnButtonClick} />
            )}
          </GalleryContainer>
        ) : (
          <Notification title={"You haven't searched yet"} />
        )}
        {loading && <Loader />}
      </>
    );
  }
}
export default ImageGallery;
