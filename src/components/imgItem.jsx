import React from "react";

const ImageItem = ({ imageUrl, index, onDeleteImage }) => {
  const handleDelete = () => {
    onDeleteImage(index);
  };

  return (
    <div className="image-item">
      <img src={imageUrl} alt={`Imagen ${index}`} />
      <button className="delete-button " onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default ImageItem;
