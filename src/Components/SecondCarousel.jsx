import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../CssFiles/CarouselCSS.css";

const images = [
  {
    original: "/aquarium.jpg",
    description: "Aquarium visits",
  },
  {
    original: "/beach.jpg",
    description: "Beach days",
  },
  {
    original: "/hiking.jpg",
    description: "hiking trails",
  },
  {
    original: "/fishing.jpg",
    description: "Fishing trips",
  },
  {
    original: "/museum.jpg",
    description: "Museum days",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-outer-container">
      <h1 style={{ color: "purple" }}>Trending activities</h1>
      <div className="carousel-container">
        <ImageGallery items={images} showBullets={true} />
      </div>
    </div>
  );
};
export default Carousel;
