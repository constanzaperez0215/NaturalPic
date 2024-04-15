import { useContext } from 'react';
import { PhotosContext } from '../context/PhotosContext';
import Gallery from "../components/Gallery";

const Home = () => {
  const { photos } = useContext(PhotosContext)
  console.log(photos)

  return (
    <>
      <h1>Natural Pic</h1>
      <div className='container'>
        <div className="row">

          {photos && photos.map((photo) => (
            <Gallery key={photo.id} photo={photo} />

          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
