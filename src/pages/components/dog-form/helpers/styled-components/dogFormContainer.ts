import { mainColors } from "@/pages/components/mainOptions";
import { styled, Stack } from "@mui/material";

export const DogFormContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  margin: "20px auto",
  padding: "15px",
  backgroundColor: mainColors.grey,
  borderRadius: "10px",
}));
