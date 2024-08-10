import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { BsPersonFillCheck as ActiveIcon } from 'react-icons/bs';

import { joinLeaveToggle } from '../../redux/missions/missionsSlice';

import styles from './index.module.css';

function MissionCard({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const trimmedDescription = description.substring(0, 250);
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
  const processedName = name.length > 20 ? initials : name;

  return (
    <li className={`${styles.missionCard} p-3 rounded d-md-flex gap-3`}>
      <div className={`${styles.missionCardTop}`}>
        <header className={`${styles.missionCardHeader} d-flex align-items-center gap-3 p-2`}>
          <h3 className="text-primary">{processedName}</h3>

          <span
            className={`${styles.missionCardBadge} ${reserved ? 'bg-success' : 'bg-secondary'}
           badge align-items-center gap-1`}
          >
            <ActiveIcon />
            {reserved ? 'Active Member' : 'Not a Member'}
          </span>
        </header>

        <p className={styles.missionCardDescription}>
          {description.length > 250 ? `${trimmedDescription}...` : description}
          {description.length > 250 && (
            <button
              type="button"
              className="btn btn-link text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target={`#missionModal${id}`}
            >
              Read more
            </button>
          )}
        </p>
      </div>

      <footer className="d-flex flex-md-column-reverse justify-content-between align-items-center gap-3  flex-fill">
        <a
          href={`https://en.wikipedia.org/wiki/${name}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-link"
        >
          Wikipedia
        </a>

        <button
          type="button"
          className={`${styles.missionCardCta} btn ${reserved ? 'btn-danger' : 'btn-primary'}`}
          onClick={() => dispatch(joinLeaveToggle(id))}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
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
