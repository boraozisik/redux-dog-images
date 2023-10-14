import { RootState } from "@/pages/reducers";
import React from "react";
import { useSelector } from "react-redux";
import { DogInfoContainer } from "../../helpers/styled-components/dogInfoContainer";
import { Typography } from "@mui/material";
import { mainColors } from "@/pages/components/mainOptions";

interface DogInfoProps {}

const DogInfo = (props: DogInfoProps) => {
  const dogStore = useSelector((state: RootState) => state.reducer);
  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const imageResultsState = dogStore?.imageResults;

  function capitalizeBreed(string: string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  const renderTitle = () => {
    if (
      breedState !== "all" &&
      subBreedState !== "all" &&
      imageResultsState > 0
    )
      return (
        <Typography variant="h6" sx={{ color: mainColors.grey }}>
          {capitalizeBreed(breedState)} - {capitalizeBreed(subBreedState)}
        </Typography>
      );
    if (
      breedState !== "all" &&
      subBreedState === "all" &&
      imageResultsState > 0
    )
      return (
        <Typography variant="h6" sx={{ color: mainColors.grey }}>
          {capitalizeBreed(breedState)}
        </Typography>
      );
    return null;
  };

  return (
    <DogInfoContainer direction={"row"}>
      <>
        {renderTitle()}
        <Typography variant="h6" sx={{ color: mainColors.grey }}>
          {imageResultsState} results
        </Typography>
      </>
    </DogInfoContainer>
  );
};

export default DogInfo;
