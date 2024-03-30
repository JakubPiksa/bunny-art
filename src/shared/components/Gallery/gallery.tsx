import { FC, useState } from "react";

import "./gallery.scss";
import GalleryModal from "./galleryModal";

import { salonImages } from "../../../assets/gallery/salon/salon";
import { nailsImages } from "../../../assets/gallery/nails/nails";
import { charakteryzationImages } from "../../../assets/gallery/charakteryzation/charakteryzation";

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
        <h3>Salon</h3>
        <div className="gallery-part-image">
          {salonImages.map((photo, index) => (
            <img key={index} src={photo} alt={`Salon ${index + 1}`}  onClick={() => openModal(salonImages)}/>
          ))}
        </div>
      </div>
      <div className="gallery-part">
        <h3>Charakteryzacja</h3>
        <div className="gallery-part-image">
          {charakteryzationImages.map((photo, index) => (
            <img key={index} src={photo} alt={`Charakteryzacja ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="gallery-part">
        <h3>Nails</h3>
        <div className="gallery-part-image">
          {nailsImages.map((photo, index) => (
            <img key={index} src={photo} alt={`Nails ${index + 1}`} />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <GalleryModal images={selectedImages} onClose={closeModal} />
      )}
    </div>
  );
};
