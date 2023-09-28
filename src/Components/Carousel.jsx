import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '../CssFiles/CarouselCSS.css'

const images = [
  {
    original: "/kashmir.jpg",
    description: "Pakistan",
    originalHeight: "600px",
    originalWidth: "1000px",
  },
  {
    original: "/japan.jpg",
    description: "Japan",
    originalHeight: "600px",
  },
  {
    original: "/italy.jpg",
    description: "Italy",
    originalHeight: "600px",
  },
  {
    original: "/china.jpg",
    description: "China",
    originalHeight: "600px",
  },
  {
    original: "/austria.jpg",
    description: "Austria",
    originalHeight: "600px",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <ImageGallery items={images} showBullets={true}/>
    </div>
  );
};
export default Carousel;
