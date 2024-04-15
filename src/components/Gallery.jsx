import { Button, Card } from 'react-bootstrap';
import IconHeart from './IconHeart';

const Gallery = ({photo}) => {

  
  return(

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo["src"].medium} alt="" />
      <Card.Body>
        <span>
           <IconHeart />
        </span>
        <Card.Text>
          {photo["alt"]}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Gallery;
