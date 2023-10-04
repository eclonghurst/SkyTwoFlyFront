import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../CssFiles/CarouselCSS.css";

const images = [
  {
    original: "/aquarium.jpg",
    description: "Aquarium visits",
    originalHeight: "600px",
    originalWidth: "1000px",
  },
  {
    original: "/beach.jpg",
    description: "Beach days",
    originalHeight: "600px",
  },
  {
    original: "/hiking.jpg",
    description: "hiking trails",
    originalHeight: "600px",
  },
  {
    original: "/fishing.jpg",
    description: "Fishing trips",
    originalHeight: "600px",
  },
  {
    original: "/museum.jpg",
    description: "Museum days",
    originalHeight: "600px",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-outer-container">
      <div className="carousel-container">
        <ImageGallery items={images} showBullets={true} />
      </div>
    </div>
  );
};
export default Carousel;
