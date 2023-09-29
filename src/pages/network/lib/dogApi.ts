import axios from "./axiosClient";

// I am fetching all the data of dogs

export const fetchDogs = async () => {
  try {
    const response = await axios.get("/breeds/list/all");
    return response?.data;
  } catch (error) {
    error instanceof Error
      ? console.log("Error:", error.message)
      : console.log("Unexpected Error:", error);
  }
};

// I am fetching the sub breeds of dogs

export const fetchDogsSubBreed = async (breed: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/list`);
    return response?.data;
  } catch (error) {
    error instanceof Error
      ? console.log("Error:", error.message)
      : console.log("Unexpected Error:", error);
  }
};

// I am fetching the breed images of dogs

export const fetchDogsBreedImages = async (breed: string, number: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/images/random/${number}`);
    return response?.data;
  } catch (error) {
    error instanceof Error
      ? console.log("Error:", error.message)
      : console.log("Unexpected Error:", error);
  }
};

// I am fetching the sub breed images of dogs

export const fetchDogsSubBreedImages = async (
  breed: string,
  subBreed: string,
  number: string
) => {
  try {
    const response = await axios.get(
      `/breed/${breed}/${subBreed}/images/random/${number}`
    );
    return response?.data;
  } catch (error) {
    error instanceof Error
      ? console.log("Error:", error.message)
      : console.log("Unexpected Error:", error);
  }
};
