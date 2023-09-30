import { fetchDogs } from "@/pages/network/lib/dogApi";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useBreedList } from "./helpers/hooks/useBreedList";
import LinearProgress from "@mui/material/LinearProgress";
import DogForm from "./components/dog-form";
import { useSubBreedList } from "./helpers/hooks/useSubBreedList";

type Props = {};

const GetDogs = (props: Props) => {
  const { breedList } = useBreedList();
  const { subBreedList } = useSubBreedList();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("breed list", breedList);
  console.log("TYPEOF breed list", typeof breedList);

  useEffect(() => {
    breedList && setIsLoading(false);
  }, [breedList]);

  return (
    <Stack>
      {isLoading ? (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      ) : !breedList ? (
        <Typography variant="h4">No dogs found.</Typography>
      ) : (
        <Stack>
          <DogForm
            breedList={breedList}
            subBreedList={subBreedList}
            setImages={setImages}
            setIsLoading={setIsLoading}
          />
          {Object.keys(breedList as Object)?.map((breedKey, index) => (
            <Stack key={index}>{breedKey}</Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default GetDogs;
