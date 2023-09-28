export enum DogImagesAppActionType {
  BREED = "SET_BREED",
  SUB_BREED = "SET_SUB_BREED",
  NUMBER = "SET_NUMBER",
  IMAGE_RESULTS = "SET_IMAGE_RESULTS",
  ERROR = "SET_ERROR",
  RESET = "RESET_BREED_STATE",
}

export interface BreedAction {
  type: DogImagesAppActionType.BREED;
  payload: string;
}

export interface SubBreedAction {
  type: DogImagesAppActionType.SUB_BREED;
  payload: string;
}

export interface NumberAction {
  type: DogImagesAppActionType.NUMBER;
  payload: string;
}

export interface ImageResultsAction {
  type: DogImagesAppActionType.IMAGE_RESULTS;
  payload: number;
}

export interface ErrorAction {
  type: DogImagesAppActionType.ERROR;
  payload: boolean;
}
export interface ResetAction {
  type: DogImagesAppActionType.RESET;
  payload: ReducerStateType;
}

export type DogActionType =
  | BreedAction
  | SubBreedAction
  | NumberAction
  | ImageResultsAction
  | ErrorAction
  | ResetAction;

export interface ReducerStateType {
  breed: string;
  subBreed: string;
  number: string;
  imageResults: number;
  error: boolean;
}
