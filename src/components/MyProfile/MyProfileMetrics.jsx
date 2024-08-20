import PropTypes from 'prop-types';

import { TbProgress as ProgressIcon } from 'react-icons/tb';

import styles from './index.module.css';

function MyProfileMetrics({ metrics }) {
  return (
    <ul className={`${styles.myProfileMetrics} d-flex gap-1`}>
      {metrics.map((metric) => (
        <li
          key={metric.id}
          className={`${styles.myProfileMetric} d-flex flex-column align-items-center gap-1`}
        >
          <span className="d-inline-block position-relative rounded-1">
            <ProgressIcon />
            <span
              className={`${styles.myProfileMetricValue} position-absolute`}
            >
              {metric.value}
            </span>
          </span>

          <span className="">{metric.name}</span>
        </li>
      ))}
    </ul>
  );
}

MyProfileMetrics.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MyProfileMetrics;
