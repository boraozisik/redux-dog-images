import React from "react";
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
  const [breed, setBreed] = React.useState("");
  const dispatch = useDispatch();

  //alternative select's value

  const dogStore = useSelector((state: RootState) => state.reducer);

  console.log("dog store", dogStore);

  // const breedState = dogStore?.breed;
  // const subBreedState = dogStore?.subBreed;
  // const numberState = dogStore?.number;
  // const errorState = dogStore?.error;

  const handleChange = (e: any) => {
    setBreed(e.target.value === "clear" ? "" : e.target.value);
    dispatch({
      type: DogImagesAppActionType.BREED,
      payload: e.target.value === "clear" ? "all" : e.target.value,
    });
    console.log("change func", e.target.value);
  };

  const handleClickClear = (e: any) => {
    setBreed("");
  };

  return (
    <Stack>
      <DogFormContainer>
        <Typography variant="h4">Dog form</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Select Dog</InputLabel>
          <Select
            value={breed}
            label="Select Dog"
            onChange={handleChange}
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
      </DogFormContainer>
    </Stack>
  );
};

export default DogForm;
