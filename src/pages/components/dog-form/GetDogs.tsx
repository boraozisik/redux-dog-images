import { fetchDogs, fetchDogsSubBreed } from "@/pages/network/lib/dogApi";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import { useBreedList } from "./helpers/hooks/useBreedList";
import LinearProgress from "@mui/material/LinearProgress";
import DogForm from "./components/dog-form";
import { useSubBreedList } from "./helpers/hooks/useSubBreedList";
import { useSelector } from "react-redux";
import { RootState } from "@/pages/reducers";

type Props = {};

const GetDogs = (props: Props) => {
  const dogStore = useSelector((state: RootState) => state.reducer);
  const breedState = dogStore?.breed;
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState(null);

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    await fetchDogs()
      .then((data) => {
        setBreedList(data?.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    if (breedState !== "all") {
      await fetchDogsSubBreed(breedState)
        .then((data) => {
          setSubBreedList(data?.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [breedState]);

  console.log("breed list", breedList);
  console.log("TYPEOF breed list", typeof breedList);
  console.log("subbbbrrt", subBreedList);

  useEffect(() => {
    fetchData();
    breedList && setIsLoading(false);
  }, [breedState, fetchData]);

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
        </Stack>
      )}
    </Stack>
  );
};

export default GetDogs;
