import { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    isModalShow: false,
    modalImg: '',
  };
  toggleModal = () => {
    this.setState(prevState => ({ isModalShow: !prevState.isModalShow }));
  };
  setAppSearchQuery = query => {
    this.setState({ query });
  };
  setLargeImageUrl = url => {
    this.setState({ modalImg: url });
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.setAppSearchQuery} />
        <ImageGallery
          query={this.state.query}
          setLargeImageUrl={this.setLargeImageUrl}
          toggleModal={this.toggleModal}
        />
        {this.state.isModalShow && (
          <Modal url={this.state.modalImg} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
