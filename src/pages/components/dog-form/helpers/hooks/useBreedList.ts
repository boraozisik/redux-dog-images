import { fetchDogs } from "@/pages/network/lib/dogApi";
import { useEffect, useState } from "react";

export const useBreedList = () => {
  const [breedList, setBreedList] = useState();

  const fetchData = async () => {
    await fetchDogs()
      .then((data) => {
        console.log(data?.message);
        setBreedList(data?.message);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { breedList };
};
