import { Button, Card } from 'react-bootstrap';
import IconHeart from './IconHeart';
import { useContext } from 'react';
import { PhotosContext } from '../context/PhotosContext';

const Gallery = ({photo}) => {

  const {photos, setPhotos} = useContext(PhotosContext)

  const likeAndFavorites = (id) => {
    const newFotos = photos.map( photo =>{
      if (photo["id"] === id)
        return{
          ...photo,
          liked: !photo["liked"]
        }
        return photo
    })
    setPhotos(newFotos)
  }


  return(

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo["src"].medium} alt="" />
      <Card.Body>
        <span onClick={() => likeAndFavorites(photo["id"])}>
           <IconHeart filled={photo["liked"]} />
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
