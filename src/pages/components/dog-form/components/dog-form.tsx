import { RootState } from "@/pages/reducers";
import { BreedsType } from "@/pages/types/breedTypes";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, FormHelperText, Stack, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainColors } from "../../mainOptions";
import {
  handleBreedChange,
  handleNumberOfImagesChange,
  handleSubBreedChange,
} from "../helpers/funcs/dogFormFuncs";
import { DogFormContainer } from "../helpers/styled-components/dogFormContainer";
import { DogImagesAppActionType } from "@/pages/action-types";
import DogFormButton from "./DogFormButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  fetchDogsBreedImages,
  fetchDogsSubBreedImages,
} from "@/pages/network/lib/dogApi";

interface DogFormProps {
  breedList: BreedsType;
  subBreedList: string[];
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DogForm = ({
  breedList,
  subBreedList,
  setImages,
  setIsLoading,
}: DogFormProps) => {
  const dispatch = useDispatch();

  const dogStore = useSelector((state: RootState) => state.reducer);

  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const numberState = dogStore?.number;
  const errorState = dogStore?.error;

  const handleClickFetch = async () => {
    if (breedState === "all") {
      dispatch({
        type: DogImagesAppActionType.ERROR,
        payload: true,
      });
    }
    if (breedState !== "all" && subBreedState === "all") {
      await fetchDogsBreedImages(breedState, numberState)
        .then((data) => {
          if (data?.status === "success" && data?.message?.length) {
            setImages(data?.message);
            setIsLoading(false);
            dispatch({
              type: DogImagesAppActionType.IMAGE_RESULTS,
              payload: data?.message?.length,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (breedState !== "all" && subBreedState !== "all") {
      await fetchDogsSubBreedImages(breedState, subBreedState, numberState)
        .then((data) => {
          if (data?.status === "success" && data?.message?.length) {
            setImages(data?.message);
            setIsLoading(false);
            dispatch({
              type: DogImagesAppActionType.IMAGE_RESULTS,
              payload: data?.message?.length,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClickReset = () => {
    dispatch({
      type: DogImagesAppActionType.RESET,
    });
  };

  return (
    <Stack>
      <DogFormContainer>
        <img
          style={{ padding: "5px" }}
          height={"100px"}
          width={"100%"}
          src="/static/illustrations/undraw-dog.svg"
        />

        <FormControl fullWidth>
          <InputLabel>Select Dog Breed</InputLabel>
          <Select
            value={breedState === "all" ? "" : breedState}
            label="Select Dog Breed"
            onChange={(e) => handleBreedChange(e.target.value, dispatch)}
            sx={{
              color: "black",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              ".MuiSvgIcon-root ": {
                fill: `${mainColors.primary.main} !important`,
              },
            }}
          >
            {breedList &&
              Object.keys(breedList as Object)?.map((breedKey, index) => (
                <MenuItem key={index} value={breedKey}>
                  {breedKey}
                </MenuItem>
              ))}
          </Select>
          {errorState && (
            <FormHelperText sx={{ color: mainColors.secondary }}>
              You must select a breed
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth disabled={!(subBreedList?.length > 0)}>
          <InputLabel>Select Dog Sub Breed</InputLabel>
          <Select
            value={subBreedState === "all" ? "" : subBreedState}
            label="Select Dog Sub Breed"
            onChange={(e) => handleSubBreedChange(e.target.value, dispatch)}
            sx={{
              color: "black",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              ".MuiSvgIcon-root ": {
                fill: `${mainColors.primary.main} !important`,
              },
            }}
          >
            {subBreedList?.length &&
              subBreedList?.map((subBreed: string, index: number) => (
                <MenuItem key={index} value={subBreed}>
                  {subBreed}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Select Number of Images</InputLabel>
          <Select
            value={numberState}
            label="Select Number of Images"
            onChange={(e) =>
              handleNumberOfImagesChange(e.target.value, dispatch)
            }
            sx={{
              color: "black",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColors.primary.main,
              },
              ".MuiSvgIcon-root ": {
                fill: `${mainColors.primary.main} !important`,
              },
            }}
          >
            {Array.from({ length: 50 }, (_, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          width={"100%"}
        >
          <DogFormButton
            variant="contained"
            text="Search Dogs"
            handleClick={handleClickFetch}
            setImages={setImages}
            setIsLoading={setIsLoading}
            endIcon={<SearchIcon />}
          />
          <DogFormButton
            variant="outlined"
            text="Clear Search"
            handleClick={handleClickReset}
            setImages={setImages}
            setIsLoading={setIsLoading}
            endIcon={<ClearIcon />}
          />
        </Stack>
      </DogFormContainer>
    </Stack>
  );
};

export default DogForm;
