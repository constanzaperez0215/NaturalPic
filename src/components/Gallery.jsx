import { useState, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { PhotosContext } from '../context/PhotosContext';


const Gallery = () => {
const [ data, setData ] = useState([])

  const obtenerDatos = async () => {
    const url = "public/photos.json"
    const res = await fetch(url)
    const data = await res.json()
    setData(data.data)
}


  return(

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Gallery;
