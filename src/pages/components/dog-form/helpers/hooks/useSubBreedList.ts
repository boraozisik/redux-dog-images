import { fetchDogsSubBreed } from "@/pages/network/lib/dogApi";
import { useEffect, useState } from "react";

export const useSubBreedList = (breedState: string) => {
  const [subBreedList, setSubBreedList] = useState([]);

  const fetchData = async () => {
    await fetchDogsSubBreed(breedState)
      .then((data) => {
        console.log("subbreedd", data?.message);
        setSubBreedList(data?.message);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { subBreedList };
};
