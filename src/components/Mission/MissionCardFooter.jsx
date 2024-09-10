import PropTypes from 'prop-types';

import { GiRun as LeaveIcon, GiSpaceSuit as JoinIcon } from 'react-icons/gi';
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
      className={`${styles.missionCardFooter} p-2 rounded-2 d-flex flex-md-column-reverse justify-content-between align-items-center align-items-md-end justify-content-md-end gap-2`}
    >
      <ul className="d-flex gap-2 align-items-center">
        {links.map(({ href, label, Icon }) => (
          <li key={label}>
            <Button type="tertiary" icon={<Icon />} isLink to={href} />
          </li>
        ))}
      </ul>

      <Button
        type={isReserved ? 'tertiary' : 'primary'}
        title={isReserved ? 'Leave Mission' : 'Join Mission'}
        handleClick={() => handleModal(id)}
        icon={isReserved ? <LeaveIcon /> : <JoinIcon />}
        dataBsTarget={isReserved ? '#leaveModal' : '#waiverModal'}
        dataBsToggle="modal"
        danger={isReserved}
      />
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
