import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import { joinLeaveToggle } from '../../redux/missions/missionsSlice';

function MissionItem({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {reserved && <p style={{ width: 'max-content' }}>Active Member</p>}
        {!reserved && <p style={{ width: 'max-content' }}>NOT A MEMBER</p>}
      </td>
      <td>
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
      </td>
    </tr>
  );
}

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
