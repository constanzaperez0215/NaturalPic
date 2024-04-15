import { createContext, useState, useEffect } from "react"

export const PhotosContext = createContext()

const PhotosProvider = ({children}) => {

  const [photos, setPhotos] = useState ([])

  const getData = async () => {
    const res = await fetch('public/photos.json')
    const data = await res.json()
    const dataPhotos = data.photos
    setPhotos(dataPhotos)

  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <PhotosContext.Provider value={{photos, setPhotos}}>
      {children}
    </PhotosContext.Provider>
  )
}

export default PhotosProvider