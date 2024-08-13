import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BiSolidBadgeCheck as ActiveIcon, BiSolidBadge as InactiveIcon } from 'react-icons/bi';
import { IoTicket as JoinIcon } from 'react-icons/io5';
import { GiRun as LeaveIcon } from 'react-icons/gi';

import { joinLeaveToggle } from '../../redux/missions/missionsSlice';

import Button from '../Button';
import Link from '../CustomLink';

import styles from './index.module.css';

function MissionCard({ id, name, description, reserved }) {
  const dispatch = useDispatch();
  const [processedDescription, setProcessedDescription] = useState(() => {
    if (description.length > 250) {
      return `${description.substring(0, 250)}...`;
    }
    return description;
  });

  const trimmedDescription = description.substring(0, 250);
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
  const processedName = name.length > 20 ? initials : name;

  const handleExpandOrMinimize = () => {
    if (processedDescription.endsWith('...')) {
      setProcessedDescription(description);
    } else {
      setProcessedDescription(`${trimmedDescription}...`);
    }
  };

  return (
    <li className={`${styles.missionCard} p-3 rounded d-md-flex gap-3`} data-reserved={reserved}>
      <div className={`${styles.missionCardTop}`}>
        <header className={`${styles.missionCardHeader} d-flex align-items-center gap-3 py-2`}>
          <h3>{processedName}</h3>

          <span
            className={`${styles.missionCardBadge} px-2 py-1 rounded-1 d-inline-flex align-items-center gap-1`}
            data-reserved={reserved ? 'true' : 'false'}
          >
            <span>{reserved ? 'Active Member' : 'Not a Member'}</span>
            {reserved ? <ActiveIcon /> : <InactiveIcon />}
          </span>
        </header>

        <p className={`${styles.missionCardDescription} ps-4`}>
          {processedDescription}{' '}
          {description.length > 250 && (
            <Link
              to="#this-is-a-dead-link"
              text={processedDescription.endsWith('...') ? 'Show More' : 'Show Less'}
              handleClick={handleExpandOrMinimize}
            />
          )}
        </p>
      </div>

      <footer className="p-2 rounded-2 d-flex flex-md-column-reverse justify-content-between align-items-center align-items-md-end gap-3  flex-fill">
        <a
          href={`https://en.wikipedia.org/wiki/${name}`}
          target="_blank"
          rel="noreferrer"
          className="btn-link"
        >
          Wikipedia
        </a>

        {reserved ? (
          <Button
            type="tertiary"
            title="Leave Mission"
            handleClick={() => dispatch(joinLeaveToggle(id))}
            icon={<LeaveIcon />}
          />
        ) : (
          <Button
            type="Primary"
            title="Join Mission"
            handleClick={() => dispatch(joinLeaveToggle(id))}
            icon={<JoinIcon />}
          />
        )}
      </footer>
    </li>
  );
}

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionCard;
