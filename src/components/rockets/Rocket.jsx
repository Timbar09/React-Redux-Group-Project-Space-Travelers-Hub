import React from 'react';
import {
  Button, Card, ListGroup, Badge, Carousel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, remReservation } from '../../redux/Rockets/rocketSlice';
import styles from './Rockets.module.css';

function Rocket({ myrockets }) {
  const {
    id, description, name, images, isReserved,
  } = myrockets;
  const dispatch = useDispatch();

  const slideShow = () => {
    let check = 'Abcdef1g';
    const content = [];
    images.map((image) => {
      check += 1;
      content.push(
        <Carousel.Item key={check}>
          <img className="img-thumbnail" src={image} alt="Rocket" />
        </Carousel.Item>,
      );
      return content;
    });
    return content;
  };

  return (
    <ListGroup.Item className={styles.listitem}>
      <div className={styles.image}>
        <Carousel fade>{slideShow()}</Carousel>
      </div>
      <Card style={{ width: '70%' }} className={styles.card}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {isReserved && (
              <Badge bg="info" className={styles.badge}>
                Reserved
              </Badge>
            )}
            {description}
          </Card.Text>
          {isReserved ? (
            <Button
              className={styles.mybtn}
              variant="outline-secondary"
              onClick={() => dispatch(remReservation(id))}
            >
              Cancel Reservation
            </Button>
          ) : (
            <Button
              className={styles.mybtn}
              variant="primary"
              onClick={() => dispatch(addReservation(id))}
            >
              Reserve Rocket
            </Button>
          )}
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
    images: '',
    isReserved: '',
  },
};

Rocket.propTypes = {
  myrockets: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    isReserved: PropTypes.bool,
    images: PropTypes.oneOfType([PropTypes.array]),
  }),
};
