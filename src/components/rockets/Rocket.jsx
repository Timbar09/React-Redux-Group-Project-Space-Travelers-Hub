import React from 'react';
import {
  Button, Card, ListGroup, Badge,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, remReservation } from '../../redux/Rockets/rocketSlice';
import styles from './Rockets.module.css';

function Rocket({ myrockets }) {
  const {
    id, description, name, isReserved,
  } = myrockets;
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className={styles.listitem}>
      <div className={styles.image}>
        <img alt="none" className="img-thumbnail" src={myrockets.flickr_images[0]} />
      </div>
      <Card style={{ width: '18rem' }} className={styles.card}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {isReserved && <Badge bg="primary" className={styles.badge}>Reserved</Badge>}
            {description}
          </Card.Text>
          {
            isReserved ? <Button variant="outline-secondary" onClick={() => dispatch(remReservation(id))}>Cancel Reservation</Button> : <Button variant="primary" onClick={() => dispatch(addReservation(id))}>Reserve Rocket</Button>
          }
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
}

export default Rocket;

Rocket.defaultProps = {
  myrockets: {
    id: '',
    name: '',
    description: '',
    flickr_images: '',
    isReserved: '',
  },
};

Rocket.propTypes = {
  myrockets: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    isReserved: PropTypes.bool,
    flickr_images: PropTypes.oneOfType([PropTypes.array]),
  }),
};
