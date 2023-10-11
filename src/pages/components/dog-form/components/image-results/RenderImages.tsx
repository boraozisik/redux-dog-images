import React from "react";

interface RenderImagesProps {
  images: string[];
}

const RenderImages = ({ images }: RenderImagesProps) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="Dog Image" />
      ))}
    </div>
  );
};

export default RenderImages;
