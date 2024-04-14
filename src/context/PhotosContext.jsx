import { Children, createContext, useState } from "react"

export const PhotosContext = createContext()

const PhotosProvider = () => {
const [photos, setPhotos] = useState ([])

  return (
    <PhotosContext.Provider value={photos, setPhotos}>
      {Children}
    </PhotosContext.Provider>
  )
}

export default PhotosProvider