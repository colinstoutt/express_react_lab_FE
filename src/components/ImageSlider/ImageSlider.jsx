import { useState } from "react";
import "./ImageSlider.scss";

const ImageSlider = ({ projectImgs }) => {
  // hook
  const [currentIdx, setCurrentIdx] = useState(0);

  // get image

  const currentImage = {
    backgroundImage: `url(${projectImgs[currentIdx]})`,
  };

  // click handlers
  const handlePrevious = () => {
    const isFirstSlide = currentIdx === 0;
    console.log(isFirstSlide);
    const newIdx = isFirstSlide ? projectImgs.length - 1 : currentIdx - 1;
    setCurrentIdx(newIdx);
  };
  const handleNext = () => {
    const isLastSlide = currentIdx === projectImgs.length - 1;
    const newIdx = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIdx);
    console.log(projectImgs);
  };
  const goToSlide = (slideIdx) => {
    setCurrentIdx(slideIdx);
  };

  return (
    <div className="slider">
      <div
        className="slider__arrow"
        style={{ left: "10px" }}
        onClick={handlePrevious}
      >
        〈
      </div>
      <div
        className="slider__arrow"
        style={{ right: "10px" }}
        onClick={handleNext}
      >
        〉
      </div>
      <div className="slider__image-container">
        <div className="slider__slide" style={currentImage}></div>
        <div className="slider__dots">
          {projectImgs.map((slide, slideIdx) => (
            <div
              className="slider__dot"
              style={{
                display: "inline",
                color:
                  slideIdx === currentIdx
                    ? "white"
                    : "rgba(255, 255, 255, 0.22)",
              }}
              key={slideIdx}
              onClick={() => goToSlide(slideIdx)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
