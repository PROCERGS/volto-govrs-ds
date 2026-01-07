import PropTypes from 'prop-types';
import './Status.scss';
const Status = ({
    status = 'online',
    Label,
}) => {
    const classes = ['govrs-tag-status', `govrs-tag-status--${status}`];
  return (
    <>
        <div >
            <span className={classes.join(' ')}>
            </span>
                {Label}
            </div>
    </>
  );
}

Status.propTypes = {
    status: PropTypes.oneOf(['Online', 'Offline', 'Ausente']),
};

Status.defaultProps = {
    status: 'online',
};

export default Status;