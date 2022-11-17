import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import { ButtonContainer, StyledButton } from './ButtonLoadMore.styled'; 

export const LoadMoreButton = ({ title, onLoadMore, status }) => (
  <ButtonContainer>
    {status === 'pending' ? (
      <Loader />
    ) : (
      <StyledButton onClick={onLoadMore}>{title}</StyledButton>
    )}
  </ButtonContainer>
);

LoadMoreButton.propTypes = {
  title: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};