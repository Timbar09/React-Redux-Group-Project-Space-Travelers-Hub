import PropTypes from 'prop-types';

import { TbProgress as ProgressIcon } from 'react-icons/tb';

import styles from './index.module.css';

function RocketCardMetrics({ metrics }) {
  return (
    <ul className={`${styles.cardMetrics} d-flex gap-3`}>
      {metrics.map((metric) => (
        <li
          key={metric.id}
          className={`${styles.cardMetric} d-flex flex-column align-items-center gap-1`}
        >
          <span className="d-inline-block position-relative rounded-1">
            <ProgressIcon />
            <span className={`${styles.cardMetricValue} position-absolute`}>
              {metric.value}
            </span>
          </span>

          <span className="">{metric.name}</span>
        </li>
      ))}
    </ul>
  );
}

RocketCardMetrics.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default RocketCardMetrics;
