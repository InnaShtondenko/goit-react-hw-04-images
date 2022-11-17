import PropTypes from 'prop-types';
import { Component } from 'react';
// import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';


// const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  constructor() {
    super();
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = evt => {
    if (evt.code !== 'Escape') return;

    this.props.onClose();
  };

  onOverlayClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) return;

    this.props.onClose();
  }

  render() {
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>
          <img
            src={this.props.modalImgToShow}
            alt={this.props.modalImgAlt} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
    modalImgToShow: PropTypes.string.isRequired,
    modalImgAlt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};