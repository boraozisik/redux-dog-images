import { Stack } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import DogForm from "./dog-form/DogForm";

type Props = {};

const DogApp = (props: Props) => {
  return (
    <Stack>
      <Header />
      <DogForm />
    </Stack>
  );
};

export default DogApp;
