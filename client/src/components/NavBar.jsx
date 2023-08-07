// @mui
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Link, Stack } from "@mui/material";
import useOffSetTop from "../hooks/useOffSetTop";
import { bgBlur } from "../utils/cssStyles";
import Logo from "./Logo";
import Logo2 from "./Logo2";

export default function NavBar({ getLang }) {
  const theme = useTheme();
  const HEADER = { H_MOBILE: 64, H_MAIN_DESKTOP: 88 };
  const isOffset = useOffSetTop();

  return (
    <AppBar color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
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
        {isOffset ? <Logo /> : <Logo2 />}
        <Stack spacing={1} direction="row" alignItems="center">
          <Link
            variant="subtitle2"
            color="inherit"
            sx={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => {
              getLang("ko");
            }}
          >
            KR
          </Link>
          <Link
            variant="subtitle2"
            color="inherit"
            sx={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => {
              getLang("en");
            }}
          >
            / EN
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
