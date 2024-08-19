import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { IoMdRocket as ReserveIcon } from 'react-icons/io';
import { TbRocketOff as CancelIcon } from 'react-icons/tb';
import { IoTicket as BadgeIcon } from 'react-icons/io5';
import { SiWikipedia as WikipediaIcon } from 'react-icons/si';

import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import RocketImageCarousel from './RocketImageCarousel';
import Button from '../Button';
import RocketCardDetails from './RocketCardDetails';

import styles from './index.module.css';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();
  const toggleRes = () => dispatch(AddRemoveReservationToggle(rocket.id));

  const costPerLaunch = `$${rocket.costPerLaunch
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  const metrics = [
    {
      id: 'boosters001',
      name: 'Boosters',
      value: rocket.boosters,
    },
    {
      id: 'diameter001',
      name: 'Diameter',
      value: `${rocket.diameter.toFixed(1)}m`,
    },
    {
      id: 'successRate001',
      name: 'Success Rate',
      value: `${rocket.successRate}%`,
    },
  ];

  return (
    <li
      className={`${styles.card} rounded-2 d-lg-flex p-2 position-relative`}
      data-reserved={rocket.isReserved}
    >
      <RocketImageCarousel imageUrls={rocket.images} cardId={rocket.id} />

      <div className={`${styles.cardBody} p-3`}>
        <header
          className={`${styles.cardHeader} d-flex flex-wrap justify-content-between align-items-center gap-1 pb-2 mb-2`}
        >
          <h3>{rocket.name}</h3>

          <div className="d-flex gap-2">
            <Button
              type="tertiary"
              icon={<WikipediaIcon />}
              isLink
              to={rocket.wikipedia}
            />

            <Button
              type={rocket.isReserved ? 'tertiary' : 'primary'}
              title={
                rocket.isReserved ? 'Cancel Reservation' : 'Reserve Rocket'
              }
              icon={rocket.isReserved ? <CancelIcon /> : <ReserveIcon />}
              danger={rocket.isReserved}
              handleClick={toggleRes}
            />
          </div>
        </header>

        <p>
          {rocket.isReserved && (
            <span
              className={`${styles.cardBadge} px-2 rounded-1 d-inline-flex align-items-center gap-1 me-2`}
            >
              <BadgeIcon />
              Reserved
            </span>
          )}
          {rocket.description}
        </p>

        <RocketCardDetails costPerLaunch={costPerLaunch} metrics={metrics} />
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
    boosters: PropTypes.number,
    diameter: PropTypes.number,
    costPerLaunch: PropTypes.number,
    successRate: PropTypes.number,
  }).isRequired,
};

export default RocketCard;
