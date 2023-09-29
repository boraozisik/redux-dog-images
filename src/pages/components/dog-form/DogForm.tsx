import { fetchDogs } from "@/pages/network/lib/dogApi";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useBreedList } from "./helpers/hooks/useBreedList";

type Props = {};

// const useBreedList = () => {
//   const [breedList, setBreedList] = useState();

//   const fetchData = async () => {
//     await fetchDogs()
//       .then((data) => {
//         console.log(data?.message);
//         setBreedList(data?.message);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return { breedList };
// };

const DogForm = (props: Props) => {
  const { breedList } = useBreedList();

  // const [breedList, setBreedList] = useState<Object>();

  // const fetchData = async () => {
  //   await fetchDogs()
  //     .then((data) => {
  //       console.log(data?.message);
  //       setBreedList(data?.message);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("breed list", breedList);

  return (
    <div>
      {breedList &&
        Object.keys(breedList as Object)?.map((breedKey, index) => (
          <Stack key={index}>{breedKey}</Stack>
        ))}
    </div>
  );
};

export default DogForm;
