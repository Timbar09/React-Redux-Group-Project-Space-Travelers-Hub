import PropTypes from 'prop-types';
import { useState } from 'react';

import { BiSolidBadgeCheck as ActiveIcon, BiSolidBadge as InactiveIcon } from 'react-icons/bi';

import Link from '../CustomLink';
import MissionCardFooter from './MissionCardFooter';

import styles from './index.module.css';

/**
 * Renders a mission card component.
 * @param {string} id - The unique identifier of the mission.
 * @param {string} name - The name of the mission.
 * @param {string} description - The description of the mission.
 * @param {boolean} reserved - The status of the mission reservation.
 * @param {string} wikipedia - The Wikipedia link of the mission.
 * @param {string} twitter - The Twitter link of the mission.
 * @param {string} website - The website link of the mission.
 *
 * @returns {JSX.Element} Rendered MissionCard component.
 */

function MissionCard({ id, name, description, reserved, wikipedia, twitter, website }) {
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
      <div className="mb-3 mb-md-0">
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

      <MissionCardFooter
        id={id}
        wikipedia={wikipedia}
        twitter={twitter}
        website={website}
        reserved={reserved}
      />
    </li>
  );
}

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  wikipedia: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
export default MissionCard;
