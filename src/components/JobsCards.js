import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const JobsCards = ({jobs}) => {
  return (
    <Row>
      {jobs.slice(0, 12).map((job) => (
        <Col h-100 md={6} key={job.id}>
          <Card id='card'>
            <Card.Body>
              <Card.Title id='title-job'>{job.title}</Card.Title>
              <Card.Text>{job.desc}</Card.Text>
              <Button id='more'>Details</Button>
            </Card.Body>
          </Card>
          <br></br>
        </Col>
      ))}
    </Row>
  );
};

export default JobsCards;
