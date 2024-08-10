import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';

import Loader from '../components/Loader';
import Rocket from '../components/rockets/Rocket';

function Rockets() {
  const { rocketList, isLoading } = useSelector((store) => store.Rockets);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="rocket-container">
      <ListGroup variant="flush">
        {rocketList.map((rocket) => (
          <Rocket key={rocket.id} myrockets={rocket} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default Rockets;
