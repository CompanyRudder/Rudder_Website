// @mui
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Link, Stack, Box } from "@mui/material";
import useOffSetTop from "../hooks/useOffSetTop";
import { bgBlur } from "../utils/cssStyles";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export default function NavBar2({ data }) {
  const theme = useTheme();
  const HEADER = { H_MOBILE: 64, H_MAIN_DESKTOP: 88 };
  const isOffset = useOffSetTop();

  return (
    <Box sx={{ bgcolor: "background.neutral" }}>
      <AppBar color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_MAIN_DESKTOP,
            },
            transition: theme.transitions.create(
              ["height", "background-color"],
              {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }
            ),
            ...{
              color: "common.white",
            },
            ...(isOffset && {
              ...bgBlur({ color: theme.palette.background.default }),
              color: "text.primary",
              height: {
                md: HEADER.H_MAIN_DESKTOP - 16,
              },
            }),
          }}
        >
          <Logo />
        </Toolbar>
      </AppBar>

      <Outlet data={data} />
    </Box>
  );
}
