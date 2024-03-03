import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Cards() {
  return (
    <Row style={{justifyContent: 'center'}}>
      <Card bg={"primary"} text={"white"} style={{ width: '20rem', margin: '1rem'}}>
        <CardHeader><h3>Card 01</h3></CardHeader>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg={"danger"} text={"white"} style={{ width: '20rem', margin: '1rem'}}>
        <CardHeader><h3>Card 02</h3></CardHeader>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg={"success"} text={"white"} style={{ width: '20rem', margin: '1rem'}}>
        <CardHeader><h3>Card 03</h3></CardHeader>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Cards;
