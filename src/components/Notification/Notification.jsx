import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

export const MainNotification = ({ notification }) => (
  <main>
    <StyledNotification>{notification}</StyledNotification>
  </main>
);

MainNotification.propTypes = {
  notification: PropTypes.string.isRequired,
};