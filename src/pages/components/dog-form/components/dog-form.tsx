import React, { useState } from "react";
import { DogFormContainer } from "../helpers/styled-components/dogFormContainer";
import { Stack, Typography, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ClearIcon from "@mui/icons-material/Clear";
import { mainColors } from "../../mainOptions";
import { useDispatch } from "react-redux";
import { DogImagesAppActionType } from "@/pages/action-types";
import { useSelector } from "react-redux";
import { RootState } from "@/pages/reducers";
import {
  handleBreedChange,
  handleNumberOfImagesChange,
  handleSubBreedChange,
} from "../helpers/funcs/dogFormFuncs";
import { BreedsType } from "@/pages/types/breedTypes";

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
  const [breed, setBreed] = useState("");
  const [subBreed, setSubBreed] = useState("");
  const [numberOfImages, setNumberOfImages] = useState(1);
  const dispatch = useDispatch();

  //alternative select's value

  const dogStore = useSelector((state: RootState) => state.reducer);

  console.log("dog store", dogStore);

  // const breedState = dogStore?.breed;
  // const subBreedState = dogStore?.subBreed;
  // const numberState = dogStore?.number;
  // const errorState = dogStore?.error;

  const handleClickClear = (e: any) => {
    setBreed("");
  };

  return (
    <Stack>
      <DogFormContainer>
        <Typography variant="h4">Dog form</Typography>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <InputLabel>Select Dog Breed</InputLabel>
          <Select
            value={breed}
            label="Breed"
            onChange={(e) =>
              handleBreedChange(e.target.value, dispatch, setBreed)
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
            <MenuItem
              onClick={handleClickClear}
              value="clear"
              sx={{ width: "100%" }}
            >
              <Stack>
                <Button
                  sx={{
                    backgroundColor: mainColors.primary.main,
                    "&:hover": {
                      backgroundColor: mainColors.primary.dark,
                    },
                  }}
                  variant="contained"
                  endIcon={<ClearIcon />}
                >
                  None
                </Button>
              </Stack>
            </MenuItem>
            {breedList &&
              Object.keys(breedList as Object)?.map((breedKey, index) => (
                <MenuItem key={index} value={breedKey}>
                  {breedKey}
                </MenuItem>
              ))}
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <InputLabel>Select Dog Sub Breed</InputLabel>
          <Select
            value={subBreed}
            label="Sub Breed"
            onChange={(e) =>
              handleSubBreedChange(e.target.value, dispatch, setSubBreed)
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
            {subBreedList?.length &&
              subBreedList?.map((subBreed: string, index: number) => (
                <MenuItem key={index} value={subBreed}>
                  {subBreed}
                </MenuItem>
              ))}
          </Select>

          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <InputLabel>Select Number of Images</InputLabel>
          <Select
            value={numberOfImages}
            label="Number"
            onChange={(e) =>
              handleNumberOfImagesChange(
                e.target.value as number,
                dispatch,
                setNumberOfImages
              )
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

          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
      </DogFormContainer>
    </Stack>
  );
};

export default DogForm;
