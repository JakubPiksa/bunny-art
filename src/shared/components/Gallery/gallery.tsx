import { FC, useState } from "react";

import "./gallery.scss";
import GalleryModal from "./galleryModal";

import { photoImages } from "../../../assets/gallery/gallery";

export const Gallery: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openModal = (images: string[]) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      {isModalOpen && (
        <GalleryModal images={selectedImages} onClose={closeModal} />
      )}
    </div>
  );
};
