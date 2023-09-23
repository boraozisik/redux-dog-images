import { Stack } from "@mui/material";
import { Inter } from "next/font/google";
import DogApp from "./components/DogApp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Stack>
      <DogApp />
    </Stack>
  );
}
