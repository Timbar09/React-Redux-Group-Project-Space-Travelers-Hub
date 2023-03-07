import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

function MissionItem({ name, description, reserved }) {
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
          <Button style={{ width: 'max-content' }} variant="outline-danger">
            Leave Mission
          </Button>
        )}
        {!reserved && (
          <Button style={{ width: 'max-content' }} variant="outline-secondary">
            Join Mission
          </Button>
        )}
      </td>
    </tr>
  );
}

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
