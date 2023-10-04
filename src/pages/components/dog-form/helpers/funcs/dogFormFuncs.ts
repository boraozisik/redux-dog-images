import { DogImagesAppActionType } from "@/pages/action-types";
import { Dispatch } from "redux";

export const handleBreedChange = (
  value: string,
  dispatch: Dispatch<any>,
  setBreed: React.Dispatch<React.SetStateAction<string>>
) => {
  setBreed(value === "clear" ? "" : value);
  dispatch({
    type: DogImagesAppActionType.BREED,
    payload: value === "clear" ? "all" : value,
  });
  dispatch({
    type: DogImagesAppActionType.SUB_BREED,
    payload: "all",
  });
};

export const handleSubBreedChange = (
  value: string,
  dispatch: Dispatch<any>,
  setSubBreed: React.Dispatch<React.SetStateAction<string>>
) => {
  setSubBreed(value);
  dispatch({
    type: DogImagesAppActionType.SUB_BREED,
    payload: value,
  });
};

export const handleNumberOfImagesChange = (
  value: number,
  dispatch: Dispatch<any>,
  setNumberOfImages: React.Dispatch<React.SetStateAction<number>>
) => {
  setNumberOfImages(value);
  dispatch({
    type: DogImagesAppActionType.NUMBER,
    payload: value,
  });
};
