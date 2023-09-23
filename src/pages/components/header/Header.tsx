import PetsIcon from "@mui/icons-material/Pets";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { mainColors } from "../mainOptions";

type Props = {};

const Header = (props: Props) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: mainColors.primary }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <PetsIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: mainColors.grey,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: mainColors.grey,
                textDecoration: "none",
              }}
            >
              DOG IMAGES
            </Typography>
          </Stack>

          <PetsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: "2px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DOG IMAGES
          </Typography>
          <img
            style={{ padding: "5px" }}
            height={"70px"}
            width={"150px"}
            src="/static/illustrations/undraw-dog.svg"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
