import { Stack } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import GetDogs from "./dog-form/GetDogs";

type Props = {};

const DogApp = (props: Props) => {
  return (
    <Stack>
      <Header />
      <GetDogs />
    </Stack>
  );
};

export default DogApp;
