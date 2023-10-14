import { mainColors } from "@/pages/components/mainOptions";
import { styled, Stack } from "@mui/material";

export const DogInfoContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: "bold",
  fontSize: "1.4rem",
  padding: "20px",
  borderRadius: "16px",
  backgroundColor: mainColors.primary.main,
}));
