import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MissionItem from './MissionItem';
import styles from './MissionList.module.css';

function MissionList() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="py-2 px-3 bg-white rounded">
      <h1 className="pb-3 d-md-none">Missions</h1>
      <Row className={`${styles.heads} pb-2 d-none d-md-flex`}>
        <Col md={2}>Mission</Col>
        <Col md={5} lg={6}>
          Descriotion
        </Col>
        <Col md={3} lg={2}>
          Status
        </Col>
        <Col md={2} />
      </Row>
      <ul>
        {missions.map((mission) => (
          <MissionItem
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </ul>
    </div>
  );
}

export default MissionList;
