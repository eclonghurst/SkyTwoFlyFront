import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../CssFiles/CarouselCSS.css";

const images = [
  {
    original: "/kashmir.jpg",
    description: "Pakistan",
  },
  {
    original: "/japan.jpg",
    description: "Japan",
  },
  {
    original: "/italy.jpg",
    description: "Italy",
  },
  {
    original: "/china.jpg",
    description: "China",
  },
  {
    original: "/austria.jpg",
    description: "Austria",
  },
];

const Carousel = () => {
  return (

    <div className="carousel-container">
      <ImageGallery items={images} showBullets={true} />

    <div className="carousel-outer-container">
      <div className="carousel-container">
        <ImageGallery className="carousel" items={images} showBullets={true} />
      </div>

    </div>
  );
};
export default Carousel;
