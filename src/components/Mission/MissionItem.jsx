import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { joinLeaveToggle } from '../../redux/missions/missionsSlice';
import styles from './MissionItem.module.css';

function MissionItem({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();

  return (
    <li className="border-top py-2">
      <Row>
        <Col className={`${styles.missionTitle} pb-2`} sm={12} md={2}>
          {name}
        </Col>
        <Col className="pb-2" sm={12} md={5} lg={6}>
          {description}
        </Col>
        <Col className="pb-2" sm={12} md={3} lg={2}>
          {reserved && (
            <p
              style={{ width: 'max-content' }}
              className={`${styles.member} py-1 px-2 rounded bg-info`}
            >
              Active Member
            </p>
          )}
          {!reserved && (
            <p
              style={{ width: 'max-content' }}
              className={`${styles.member} py-1 px-2 rounded bg-secondary`}
            >
              NOT A MEMBER
            </p>
          )}
        </Col>
        <Col className="pb-2" sm={12} md={2}>
          {reserved && (
            <Button
              style={{ width: 'max-content' }}
              variant="outline-danger"
              onClick={() => dispatch(joinLeaveToggle(id))}
            >
              Leave Mission
            </Button>
          )}
          {!reserved && (
            <Button
              style={{ width: 'max-content' }}
              variant="outline-secondary"
              onClick={() => dispatch(joinLeaveToggle(id))}
            >
              Join Mission
            </Button>
          )}
        </Col>
      </Row>
    </li>
  );
}

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
