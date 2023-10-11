import React from "react";
import { ImageResultsContainer } from "../../helpers/styled-components/imageResultsContainer";
import { Typography } from "@mui/material";
import DogInfo from "./DogInfo";
import RenderImages from "./RenderImages";

interface ImageResultsProps {
  images: string[];
}

const ImageResults = ({ images }: ImageResultsProps) => {
  return (
    <ImageResultsContainer>
      <Typography variant="h4">Gallery</Typography>
      <DogInfo />
      <RenderImages images={images} />
    </ImageResultsContainer>
  );
};

export default ImageResults;
