import { Grid, Stack } from "@mui/material";
import React from "react";

interface RenderImagesProps {
  images: string[];
}

const RenderImages = ({ images }: RenderImagesProps) => {
  return (
    <Grid container spacing={2} mt={1}>
      {images.map((image, index) => (
        <Grid key={index} item xs={4}>
          <img
            src={image}
            alt="Dog Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default RenderImages;
