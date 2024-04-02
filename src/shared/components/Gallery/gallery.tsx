import { FC, useEffect, useState } from "react";
import "./gallery.scss";
import GalleryModal from "./galleryModal";
import { photoImages } from "../../../assets/gallery/gallery";

export const Gallery: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery">
      <h1>Galeria</h1>

      <div className="gallery-part">
        {photoImages.map((photo, index) => (
          <div
            key={index}
            className="gallery-part-container"
            onClick={() => openModal(index)}
          >
            <img
              src={photo}
              alt={`Nails ${index + 1}`}
              className="gallery-part-image"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <GalleryModal
          images={photoImages}
          initialIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Gallery;
