import React from "react";
import { DogFormContainer } from "../helpers/components/dogFormContainer";
import { Stack, Typography } from "@mui/material";

interface DogFormProps {
  breedList: any;
  subBreedList: any;
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DogForm = ({
  breedList,
  subBreedList,
  setImages,
  setIsLoading,
}: DogFormProps) => {
  return (
    <Stack>
      <DogFormContainer>
        <Typography variant="h4">Dog form</Typography>
      </DogFormContainer>
    </Stack>
  );
};

export default DogForm;
