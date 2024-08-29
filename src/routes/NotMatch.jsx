import Container from 'react-bootstrap/Container';

function NotMatch() {
  return (
    <div>
      <Container
        style={{ height: '100vh' }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1>404</h1>
        <p>Not found!</p>
      </Container>
    </div>
  );
}

export default NotMatch;
