import { RootState } from "@/pages/reducers";
import React from "react";
import { useSelector } from "react-redux";
import { DogInfoContainer } from "../../helpers/styled-components/dogInfoContainer";
import { Typography } from "@mui/material";

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
        <span>
          {capitalizeBreed(breedState)} - {capitalizeBreed(subBreedState)}
        </span>
      );
    if (
      breedState !== "all" &&
      subBreedState === "all" &&
      imageResultsState > 0
    )
      return <span>{capitalizeBreed(breedState)}</span>;
    return null;
  };

  return (
    <DogInfoContainer direction={"row"}>
      <>
        {renderTitle()}
        <Typography variant="h6">{imageResultsState} results</Typography>
      </>
    </DogInfoContainer>
  );
};

export default DogInfo;
