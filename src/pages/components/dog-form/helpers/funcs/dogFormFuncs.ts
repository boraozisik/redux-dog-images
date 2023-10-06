import { DogImagesAppActionType } from "@/pages/action-types";
import { Dispatch } from "redux";

export const handleBreedChange = (value: string, dispatch: Dispatch<any>) => {
  dispatch({
    type: DogImagesAppActionType.BREED,
    payload: value,
  });
  dispatch({
    type: DogImagesAppActionType.SUB_BREED,
    payload: "all",
  });
  dispatch({
    type: DogImagesAppActionType.ERROR,
    payload: false,
  });
};

export const handleSubBreedChange = (
  value: string,
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: DogImagesAppActionType.SUB_BREED,
    payload: value,
  });
};

export const handleNumberOfImagesChange = (
  value: string,
  dispatch: Dispatch<any>
) => {
  dispatch({
    type: DogImagesAppActionType.NUMBER,
    payload: Number(value),
  });
};
