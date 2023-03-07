import { useSelector } from 'react-redux';

import MissionItem from './MissionItem';

function MissionList() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="head">Mission</th>
          <th className="head">Description</th>
          <th className="head">Status</th>
          <th className="head"> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem
            key={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MissionList;
