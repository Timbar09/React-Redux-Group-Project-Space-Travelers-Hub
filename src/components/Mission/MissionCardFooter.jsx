import PropTypes from 'prop-types';

import { IoMdRocket as JoinIcon } from 'react-icons/io';
import { GiRun as LeaveIcon } from 'react-icons/gi';
import { SiWikipedia as WikipediaIcon } from 'react-icons/si';
import { GoLinkExternal as WebsiteIcon } from 'react-icons/go';
import { RiTwitterXLine as TwitterIcon } from 'react-icons/ri';

import Button from '../Button';

import styles from './index.module.css';

/**
 * Renders the footer of the mission card component.
 * @param {string} id - The unique identifier of the mission.
 * @param {string} wikipedia - The Wikipedia link of the mission.
 * @param {string} twitter - The Twitter handle of the mission.
 * @param {string} website - The website link of the mission.
 * @param {boolean} isReserved - The status of the mission reservation.
 * @param {function} handleModal - The function to run when the modal is triggered.
 *
 * @returns {JSX.Element} Rendered MissionCardFooter component.
 */

function MissionCardFooter({
  id,
  wikipedia,
  twitter,
  website,
  isReserved,
  handleModal,
}) {
  const links = [
    {
      href: wikipedia,
      label: 'Wikipedia Link',
      Icon: WikipediaIcon,
    },
    {
      href: twitter,
      label: 'Twitter Link',
      Icon: TwitterIcon,
    },
    {
      href: website,
      label: 'Website Link',
      Icon: WebsiteIcon,
    },
  ];

  return (
    <footer
      className={`${styles.missionCardFooter} p-2 rounded-2 d-flex flex-md-column-reverse justify-content-between align-items-center align-items-md-end justify-content-md-end gap-3`}
    >
      <ul className="d-flex gap-2 align-items-center">
        {links.map(({ href, label, Icon }) => (
          <li className={`${styles.missionCardLink}`} key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="rounded-1 d-inline-flex align-items-center justify-content-center"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      {isReserved ? (
        <Button
          type="tertiary"
          title="Leave Mission"
          icon={<LeaveIcon />}
          danger
          handleClick={() => handleModal(id)}
          dataBsTarget="#leaveModal"
          dataBsToggle="modal"
        />
      ) : (
        <Button
          type="Primary"
          title="Join Mission"
          handleClick={() => handleModal(id)}
          icon={<JoinIcon />}
          dataBsTarget="#waiverModal"
          dataBsToggle="modal"
        />
      )}
    </footer>
  );
}

MissionCardFooter.propTypes = {
  wikipedia: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default MissionCardFooter;
