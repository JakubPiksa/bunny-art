import { FC, useState } from "react";
import ArrowRight from "../../../icons/arrow-right.svg";
import ArrowLeft from "../../../icons/arrow-left.svg";
import "./galleryModal.scss";

interface GalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const GalleryModal: FC<GalleryModalProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalImages = images.length;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalImages ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-modal">
      <div className="gallery-modal-image-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="gallery-modal-image"
        />
      </div>
      <div className="gallery-modal-pagination">
        <button onClick={handlePrevious}>
          <img src={ArrowLeft} alt="arrow left" />
        </button>
        <button onClick={handleNext}>
          <img src={ArrowRight} alt="arrow right" />
        </button>
      </div>
      <span className="gallery-modal-pagination-pageNumber">
        {`Zdjęcie ${currentIndex + 1} z ${totalImages}`}
      </span>
      <button onClick={onClose} className="gallery-modal-close">
        Zamknij
      </button>
    </div>
  );
};

export default GalleryModal;
