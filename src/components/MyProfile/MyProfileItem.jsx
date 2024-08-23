import PropTypes from 'prop-types';

import { GiSpaceSuit as MissionIcon } from 'react-icons/gi';
import { BsFillRocketTakeoffFill as RocketIcon } from 'react-icons/bs';

import MyProfileItemMoreMenu from './MyProfileItemMoreMenu';

import styles from './index.module.css';

function MyProfileItem({ item, activeTab }) {
  return (
    <li
      key={`myItem-${item.id}`}
      className={`${styles.myProfileTabItem} d-flex align-items-center justify-content-between gap-3 p-3 rounded-2`}
    >
      <div className="d-flex align-items-center gap-2">
        {activeTab === 'missions' ? (
          <span
            className={`${styles.myProfileTabItemIcon} p-2 rounded-1 d-flex align-items-center justify-content-center`}
          >
            <MissionIcon />
          </span>
        ) : (
          <span
            className={`${styles.myProfileTabItemIcon} p-2 rounded-1 d-flex align-items-center justify-content-center`}
          >
            <RocketIcon />
          </span>
        )}

        <h3>{item.name}</h3>
      </div>

      <MyProfileItemMoreMenu itemId={item.id} activeTab={activeTab} />
    </li>
  );
}

MyProfileItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default MyProfileItem;
