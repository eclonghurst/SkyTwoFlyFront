import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
    <div>
      <ImageGallery items={images} />
    </div>
  );
};
export default Carousel;
