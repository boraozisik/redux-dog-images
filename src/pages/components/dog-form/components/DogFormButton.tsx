import React from "react";
import { Button, Stack } from "@mui/material";
import { mainColors } from "../../mainOptions";

interface DogFormButtonProps {
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  variant?: "outlined" | "contained";
  handleClick: any;
  endIcon?: any;
}

const DogFormButton = ({
  setImages,
  setIsLoading,
  text,
  variant = "contained",
  handleClick,
  endIcon,
}: DogFormButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      variant={variant}
      fullWidth
      size="large"
      sx={{
        textTransform: "none",
        backgroundColor:
          variant === "outlined" ? null : mainColors.primary.main,
        color: variant === "outlined" ? "#2C3E50" : null,
        borderColor: variant === "outlined" ? mainColors.primary.main : null,
        "&:hover": {
          backgroundColor:
            variant === "outlined" ? null : mainColors.primary.dark,
          borderColor: variant === "outlined" ? mainColors.primary.main : null,
        },
      }}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};

export default DogFormButton;
