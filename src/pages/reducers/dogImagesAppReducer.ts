import {
  DogActionType,
  DogImagesAppActionType,
  ReducerStateType,
} from "../action-types";

const initialState = {
  breed: "all",
  subBreed: "all",
  number: "1",
  imageResults: 0,
  error: false,
};

const reducer = (
  state = initialState,
  action: DogActionType
): ReducerStateType => {
  switch (action.type) {
    case DogImagesAppActionType.BREED:
      return Object.assign({}, state, {
        breed: action.payload,
      });
    case DogImagesAppActionType.SUB_BREED:
      return Object.assign({}, state, {
        subBreed: action.payload,
      });
    case DogImagesAppActionType.NUMBER:
      return Object.assign({}, state, {
        number: action.payload,
      });
    case DogImagesAppActionType.IMAGE_RESULTS:
      return Object.assign({}, state, {
        imageResults: action.payload,
      });
    case DogImagesAppActionType.ERROR:
      return Object.assign({}, state, {
        error: action.payload,
      });
    case DogImagesAppActionType.RESET:
      return Object.assign({}, state, {
        breed: "all",
        subBreed: "all",
        number: "1",
        imageResults: 0,
        error: false,
      });
    default:
      return state;
  }
};

export default reducer;
