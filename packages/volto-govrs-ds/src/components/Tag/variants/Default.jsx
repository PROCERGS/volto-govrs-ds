import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Default.scss';

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

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84375 19.625 9.46875 19.2188L8.78125 18.5312C8.375 18.1562 8.375 17.5312 8.78125 17.1562L11.9062 14L8.78125 10.875C8.375 10.5 8.375 9.875 8.78125 9.5L9.46875 8.8125C9.84375 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
      />
    </svg>
  );
}
const Default = ({
  disabled = false,
  showClose = true,
  content = 'Tag Default',
  showIcon = true,
}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    if (disabled) return;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <span
        className={`govrs-tag ${disabled ? 'disable' : ''}`}
        aria-disabled={disabled}
        disabled={disabled || undefined}
      >
        {showIcon && <CarIcon />}
        {content}

        {showClose && (
          <button type="button" aria-label="Fechar tag" onClick={handleClose}>
            <CloseIcon />
          </button>
        )}
      </span>
    </>
  );
};

Default.propTypes = {
  disabled: PropTypes.bool,
  content: PropTypes.node,
  showClose: PropTypes.bool,
  showIcon: PropTypes.bool,
};

Default.defaultProps = {
  disabled: false,
  content: 'Tag Default',
  showClose: true,
  showIcon: true,
};

export default Default;
