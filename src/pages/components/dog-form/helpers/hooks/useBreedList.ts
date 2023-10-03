import { fetchDogs, fetchDogsSubBreed } from "@/pages/network/lib/dogApi";
import { useEffect, useState } from "react";
import { useSubBreedList } from "./useSubBreedList";

export const useBreedList = (breedState: string) => {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState(null);

  const fetchData = async () => {
    await fetchDogs()
      .then((data) => {
        console.log(data?.message);
        setBreedList(data?.message);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    if (breedState !== "all") {
      await fetchDogsSubBreed(breedState)
        .then((data) => {
          console.log("subbreedd", data?.message);
          setSubBreedList(data?.message);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { breedList, subBreedList };
};
