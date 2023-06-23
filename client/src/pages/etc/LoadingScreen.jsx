import { m } from "framer-motion";
//@mui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
//utils
import { bgBlur } from "../../utils/cssStyles";
//
import Logo from "../../components/Logo";
import ProgressBar from "../../box/progress-bar";

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgBlur({
    blur: 2,
    opacity: 0.24,
    color: theme.palette.background.default,
  }),
  top: 0,
  zIndex: 9999,
  position: "fixed",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function LoadingScreen() {
  return (
    <>
      <ProgressBar />
      <StyledRoot>
        <m.div
          animate={{
            scale: [1, 0.96, 1, 0.96, 1],
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo
            single
            sx={{
              xs: { width: 150, height: 150 },
              md: { width: 150, height: 150 },
              lg: { width: 150, height: 150 },
            }}
          />
        </m.div>
      </StyledRoot>
    </>
  );
}
