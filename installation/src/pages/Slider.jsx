import "./../assets/css/slider.css"
import { useState } from "react";

const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
  "https://picsum.photos/600/400?random=6",
  "https://picsum.photos/600/400?random=7",
];

export function Slider() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          prev
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          next
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <picture>
                  <img src={image} alt="images" />
                  <figcaption>Image {index}</figcaption>
                </picture>
              </div>
            )
        )}
      </div>
    </div>
  );
}