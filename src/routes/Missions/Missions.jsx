import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from './Mission.module.css';

function Missions() {
  return (
    <Container>
      <div className={styles.missions}>
        <div className={styles.titles}>
          <p className={styles.title}>Mission</p>
          <p className={styles.title}>Description</p>
          <p className={styles.title}>Status</p>
          <p className={styles.title} />
        </div>

        <ul className={styles.list}>
          <li className={styles.mission}>
            <div>
              <span>Thaicom</span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique
                necessitatibus error quo ad laudantium quasi facere in modi odio omnis, libero
                doloribus qui porro ullam dicta sapiente animi id.
              </p>
            </div>
            <div>
              <span>Not a member</span>
            </div>
            <div>
              <Button variant="outline-secondary">Secondary</Button>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Missions;
