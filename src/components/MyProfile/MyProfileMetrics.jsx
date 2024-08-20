import { TbProgress as ProgressIcon } from 'react-icons/tb';

import styles from './index.module.css';

function MyProfileMetrics() {
  const metrics = [
    { id: 'profileMetric1', name: 'Missions', value: '5' },
    { id: 'profileMetric2', name: 'Rockets', value: '2' },
  ];

  return (
    <div className={`${styles.myProfileMetrics} d-flex gap-1`}>
      {metrics.map((metric) => (
        <div
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
        </div>
      ))}
    </div>
  );
}

export default MyProfileMetrics;
