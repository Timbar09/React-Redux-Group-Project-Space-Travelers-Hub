import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import RocketImageCarousel from './RocketImageCarousel';

import styles from './index.module.css';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();

  return (
    <li className={`${styles.card} rounded-2 d-lg-flex p-2`}>
      <RocketImageCarousel imageUrls={rocket.images} cardId={rocket.id} />

      <div className={`${styles.cardBody} p-3`}>
        <h3>{rocket.name}</h3>
        <p>{rocket.isReserved ? 'Reserved' : 'Not Reserved'}</p>

        <button
          type="button"
          onClick={() => dispatch(AddRemoveReservationToggle(rocket.id))}
        >
          {rocket.isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    wikipedia: PropTypes.string,
    isReserved: PropTypes.bool,
  }).isRequired,
};

export default RocketCard;
