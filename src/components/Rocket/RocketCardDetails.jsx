import PropTypes from 'prop-types';

import { TbProgress as ProgressIcon } from 'react-icons/tb';

import styles from './index.module.css';

function RocketCardDetails({ costPerLaunch, metrics }) {
  return (
    <footer
      className={`${styles.cardDetails} d-flex flex-wrap gap-3 rounded-2 mt-2 p-3`}
    >
      <div
        className={`${styles.costPerLaunch} d-flex flex-column gap-1 py-2 px-3`}
      >
        <span className="d-block pb-1">Cost Per Launch</span>
        <span>{costPerLaunch}</span>
      </div>

      <div className="d-flex gap-3">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`${styles.cardDetail} d-flex flex-column align-items-center gap-1`}
          >
            <span className="d-inline-block position-relative rounded-1">
              <ProgressIcon />
              <span className={`${styles.cardDetailMetric} position-absolute`}>
                {metric.value}
              </span>
            </span>

            <span className="">{metric.name}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}

RocketCardDetails.propTypes = {
  costPerLaunch: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default RocketCardDetails;
