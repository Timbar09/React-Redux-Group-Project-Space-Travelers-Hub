import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CgClose as CancelIcon } from 'react-icons/cg';
import { GiRun as LeaveIcon } from 'react-icons/gi';

import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import Button from '../Button';

import styles from './index.module.css';

function CancelRocketModalContent({ itemId }) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.cancelRocketModalContent} p-3`}>
      <h1 className="fs-4">Cancel Rocket Reservation</h1>

      <p className="my-3 py-3">
        Are you sure you want to cancel this reservation?
      </p>

      <div className="d-flex justify-content-end gap-3">
        <Button
          type="tertiary"
          title="Cancel"
          dataBsDismiss="modal"
          icon={<CancelIcon />}
        />
        <Button
          type="secondary"
          title="Cancel Reservation"
          dataBsDismiss="modal"
          icon={<LeaveIcon style={{ transform: 'rotateY(180deg)' }} />}
          handleClick={() => dispatch(AddRemoveReservationToggle(itemId))}
          danger
        />
      </div>
    </div>
  );
}

CancelRocketModalContent.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default CancelRocketModalContent;
