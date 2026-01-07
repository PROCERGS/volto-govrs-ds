import PropTypes from 'prop-types';
import './Icone.scss';

function SearchIcon() {
  return (
    <svg
      width="19"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      <path
        fill="currentColor"
        d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0937 5.5C17.3437 5.5 17.5312 5.75 17.4687 5.96875L17.2812 6.71875C17.25 6.90625 17.0937 7 16.9375 7H16.2812C16.7187 7.375 17 7.90625 17 8.5V10C17 10.5312 16.7812 10.9688 16.5 11.3125V13C16.5 13.5625 16.0312 14 15.5 14H14.5C13.9375 14 13.5 13.5625 13.5 13V12H5.5V13C5.5 13.5625 5.03125 14 4.5 14H3.5C2.9375 14 2.5 13.5625 2.5 13V11.3125C2.1875 10.9688 2 10.5312 2 10V8.5C2 7.90625 2.25 7.375 2.6875 7H2.0625C1.875 7 1.71875 6.90625 1.6875 6.71875L1.5 5.96875C1.4375 5.75 1.625 5.5 1.875 5.5H3.71875L4.25 4.21875C4.78125 2.875 6.0625 2 7.5 2H11.4687C12.9062 2 14.1875 2.875 14.7187 4.21875L15.25 5.5H17.0937ZM6.09375 4.96875L5.5 6.5H13.5L12.875 4.96875C12.625 4.375 12.0937 4 11.4687 4H7.5C6.875 4 6.34375 4.375 6.09375 4.96875ZM4.5 10C5.09375 10 6 10.0938 6 9.5C6 8.90625 5.09375 8 4.5 8C3.875 8 3.5 8.40625 3.5 9C3.5 9.625 3.875 10 4.5 10ZM14.5 10C15.0937 10 15.5 9.625 15.5 9C15.5 8.40625 15.0937 8 14.5 8C13.875 8 13 8.90625 13 9.5C13 10.0938 13.875 10 14.5 10Z"
        fill="white"
      />
    </svg>
  );
}

const Icone = ({ ico = 'search' }) => {
  const renderIcon = () => {
    switch (ico) {
      case 'search':
        return <SearchIcon />;
      case 'car':
        return <CarIcon />;
      default:
        return null;
    }
  };

  return (
    <>
      <span className={`govrs-tag-icon `}>{renderIcon()}</span>
    </>
  );
};
Icone.propTypes = {
  ico: PropTypes.oneOf(['search', 'car']),
  message: PropTypes.string,
  children: PropTypes.node,
  outline: PropTypes.bool,
};

Icone.defaultProps = {
  message: null,
  children: null,
  outline: false,
};

export default Icone;
