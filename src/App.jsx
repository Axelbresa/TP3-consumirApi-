import React, { useEffect, useState } from "react";
import { fetchAllDogImages } from "./components/fethAllImg"; 
import ImageItem from "./components/imgItem";
import "./app.css" 

export default function App() {
  const [imageUrls, setImageUrls] = useState([]);

  const handleDeleteImage = (index) => {
    const updatedImages = [...imageUrls];
    updatedImages.splice(index, 1);
    setImageUrls(updatedImages);
  };

  const handleFetchAllImages = () => {
    fetchAllDogImages(setImageUrls);
  };

  return (
    <div className="App">
      {imageUrls.map((imageUrl, index) => (
        <ImageItem
          key={index}
          imageUrl={imageUrl}
          index={index}
          onDeleteImage={handleDeleteImage}
        />
      ))}
      <button onClick={handleFetchAllImages}>Traer datos</button>
    </div>
  );
}
