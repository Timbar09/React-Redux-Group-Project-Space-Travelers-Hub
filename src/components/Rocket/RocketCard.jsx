import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { IoMdRocket as ReserveIcon } from 'react-icons/io';
import { TbRocketOff as CancelIcon } from 'react-icons/tb';

import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import RocketImageCarousel from './RocketImageCarousel';
import Button from '../Button';

import styles from './index.module.css';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();

  return (
    <li className={`${styles.card} rounded-2 d-lg-flex p-2`}>
      <RocketImageCarousel imageUrls={rocket.images} cardId={rocket.id} />

      <div className={`${styles.cardBody} p-3`}>
        <header
          className={`${styles.cardHeader} d-flex flex-wrap justify-content-between align-items-center gap-1 pb-2 mb-2`}
        >
          <h3>{rocket.name}</h3>

          <Button
            type={rocket.isReserved ? 'tertiary' : 'primary'}
            title={rocket.isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            icon={rocket.isReserved ? <CancelIcon /> : <ReserveIcon />}
            danger={rocket.isReserved}
            handleClick={() => dispatch(AddRemoveReservationToggle(rocket.id))}
          />
        </header>

        <p>{rocket.isReserved ? 'Reserved' : 'Not Reserved'}</p>
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
