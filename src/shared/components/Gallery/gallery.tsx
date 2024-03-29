import { FC } from "react";

import "./gallery.scss";

import { photoImages } from "../../../assets/gallery/gallery";

export const Gallery: FC = () => {
  return (
    <div className="gallery">
      <h2>Galeria</h2>

      <div className="gallery-part">
        {photoImages.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Nails ${index + 1}`}
            className="gallery-part-image"
          />
        ))}
      </div>
    </div>
  );
};
