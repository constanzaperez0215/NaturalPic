import { useContext } from 'react';
import { PhotosContext } from '../context/PhotosContext';
import Gallery from "../components/Gallery";

const Favorites = () => {
  const { photos } = useContext(PhotosContext)
  console.log(photos)

  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className='container'>
        <div className="row">

          {photos &&
           photos.filter(photo => photo["liked"]).map((photo) => (
            <Gallery key={photo.id} photo={photo} />

          ))}
        </div>
      </div>
    </>
  );
};
export default Favorites;
