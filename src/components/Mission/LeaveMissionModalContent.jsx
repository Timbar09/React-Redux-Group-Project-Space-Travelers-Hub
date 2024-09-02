import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CgClose as CancelIcon } from 'react-icons/cg';
import { GiRun as LeaveIcon } from 'react-icons/gi';

import { joinLeaveMissionToggle } from '../../redux/missions/missionSlice';

import Button from '../Button';

import styles from './index.module.css';

function LeaveMissionModalContent({ itemId, title }) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.leaveMissionModalContent} p-3`}>
      <h1 className="fs-4">{title}</h1>

      <p className="my-3 py-3">Are you sure you want to leave this mission?</p>

      <div className="d-flex justify-content-end gap-3">
        <Button
          type="tertiary"
          title="Cancel"
          dataBsDismiss="modal"
          icon={<CancelIcon />}
        />
        <Button
          type="secondary"
          title="Leave Mission"
          dataBsDismiss="modal"
          icon={<LeaveIcon style={{ transform: 'rotateY(180deg)' }} />}
          handleClick={() => dispatch(joinLeaveMissionToggle(itemId))}
          danger
        />
      </div>
    </div>
  );
}

LeaveMissionModalContent.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LeaveMissionModalContent;
