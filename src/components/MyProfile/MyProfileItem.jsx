import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { GiSpaceSuit as MissionIcon, GiRun as LeaveIcon } from 'react-icons/gi';
import { BsFillRocketTakeoffFill as RocketIcon } from 'react-icons/bs';
import { TbRocketOff as CancelIcon } from 'react-icons/tb';

import { joinLeaveMissionToggle } from '../../redux/missions/missionSlice';
import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import Button from '../Button';

import styles from './index.module.css';

function MyProfileItem({ item, activeTab }) {
  const dispatch = useDispatch();

  const handleCancelation = (id) => {
    if (activeTab === 'missions') {
      dispatch(joinLeaveMissionToggle(id));
    } else {
      dispatch(AddRemoveReservationToggle(id));
    }
  };

  return (
    <li
      key={`myItem-${item.id}`}
      className={`${styles.myProfileTabItem} d-flex align-items-center justify-content-between gap-3 p-3 rounded-2`}
    >
      <div className="d-flex align-items-center gap-2">
        {activeTab === 'missions' ? (
          <span
            className={`${styles.myProfileTabItemIcon} p-2 rounded-1 d-flex align-items-center justify-content-center`}
          >
            <MissionIcon />
          </span>
        ) : (
          <span
            className={`${styles.myProfileTabItemIcon} p-2 rounded-1 d-flex align-items-center justify-content-center`}
          >
            <RocketIcon />
          </span>
        )}

        <h3>{item.name}</h3>
      </div>

      <div className="d-flex gap-2">
        <Button
          type="tertiary"
          icon={
            activeTab === 'missions' ? (
              <LeaveIcon style={{ transform: 'rotateY(180deg)' }} />
            ) : (
              <CancelIcon />
            )
          }
          title={
            activeTab === 'missions' ? 'Leave Mission' : 'Cancel Reservation'
          }
          handleClick={() => handleCancelation(item.id)}
          danger
        />
      </div>
    </li>
  );
}

MyProfileItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default MyProfileItem;
