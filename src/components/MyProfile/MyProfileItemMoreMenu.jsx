import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

import { GiRun as LeaveIcon } from 'react-icons/gi';
import { TbRocketOff as CancelIcon } from 'react-icons/tb';
import { IoMdMore as MoreIcon } from 'react-icons/io';

import { joinLeaveMissionToggle } from '../../redux/missions/missionSlice';
import { AddRemoveReservationToggle } from '../../redux/rockets-temp/rocketSlice';

import Button from '../Button';

import styles from './index.module.css';

function MyProfileItemMoreMenu({ itemId, activeTab }) {
  const dispatch = useDispatch();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMoreMenu = () => {
    setIsMoreMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMoreMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCancelation = (id) => {
    if (activeTab === 'missions') {
      dispatch(joinLeaveMissionToggle(id));
    } else {
      dispatch(AddRemoveReservationToggle(id));
    }
  };

  return (
    <div
      className={`${styles.myProfileTabItemMore} position-relative`}
      ref={menuRef}
    >
      <Button
        type="tertiary"
        icon={<MoreIcon />}
        ariaLabel="More menu toggle button"
        handleClick={handleMoreMenu}
      />

      <ul
        className={`${styles.myProfileTabItemMoreList} p-1 rounded-2 ${
          isMoreMenuOpen ? 'd-block' : 'd-none'
        }`}
      >
        <li>
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
            handleClick={() => handleCancelation(itemId)}
            danger
          />
        </li>
      </ul>
    </div>
  );
}

MyProfileItemMoreMenu.propTypes = {
  itemId: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default MyProfileItemMoreMenu;
