import { mainColors } from "@/pages/components/mainOptions";
import { styled, Stack } from "@mui/material";

export const ImageResultsContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: mainColors.primary.main,
  padding: "50px",
  borderRadius: "16px",
  textAlign: "center",
  minWidth: "50vw",
  maxWidth: "60vw",
  margin: "auto",
}));
