import React from "react";
import { ImageResultsContainer } from "../../helpers/styled-components/imageResultsContainer";
import { Typography } from "@mui/material";
import DogInfo from "./DogInfo";
import RenderImages from "./RenderImages";
import { mainColors } from "@/pages/components/mainOptions";

interface ImageResultsProps {
  images: string[];
}

const ImageResults = ({ images }: ImageResultsProps) => {
  return (
    <ImageResultsContainer>
      <DogInfo />
      <RenderImages images={images} />
    </ImageResultsContainer>
  );
};

export default ImageResults;
