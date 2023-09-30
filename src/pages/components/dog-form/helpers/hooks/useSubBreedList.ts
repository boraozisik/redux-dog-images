import { fetchDogsSubBreed } from "@/pages/network/lib/dogApi";
import { useEffect, useState } from "react";

export const useSubBreedList = () => {
  const [subBreedList, setSubBreedList] = useState([]);

  const fetchData = async () => {
    await fetchDogsSubBreed()
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

  return { subBreedList };
};
