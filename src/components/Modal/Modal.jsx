import { Component } from 'react';
import { Backdrop, StyledModal } from './Modal.styled';
import propTypes from 'prop-types';
export default class Modal extends Component {
  static propTypes = {
    onClose: propTypes.func.isRequired,
    url: propTypes.string,
  };
  onBackdropClose = event => {
    if (event.target.id !== 'backdrop') {
      return;
    }
    this.props.onClose();
  };
  onEscClose = event => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.onEscClose);
  }
  componentWillUnmount() {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.onEscClose);
  }
  render() {
    return (
      <Backdrop id="backdrop" onClick={this.onBackdropClose}>
        <StyledModal>
          <img src={this.props.url} alt="" />
        </StyledModal>
      </Backdrop>
    );
  }
}
