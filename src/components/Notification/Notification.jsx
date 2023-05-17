import { StyledTitle } from './Notification.styled';
import propTypes from 'prop-types';
export const Notification = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};
Notification.propTypes = {
  title: propTypes.string,
};
