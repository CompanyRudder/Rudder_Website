//@mui
import { alpha } from "@mui/material";
import { Container, Stack, Typography, Button, Fab, Box } from "@mui/material";
//box
import { MotionViewport, varFade } from "../../box/animate";
import { m } from "framer-motion";
//language
import { useTranslation } from "react-i18next";

export default function GameSection() {
  const { t } = useTranslation();
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 800,
          mb: { xs: 8, md: 5 },
          mx: { xs: "auto", md: "unset" },
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "text.disabled",
            fontFamily: "Jamsil2",
            fontSize: "1.325rem",
          }}
        >
          AUTOMANIX
        </Typography>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h2"
            sx={{
              color: "#1191d0",
              fontSize: { xs: "1.8rem", md: "2rem", lg: "2.5rem" },
              fontFamily: "Jamsil2",
              fontWeight: 900,
              wordBreak: "keep-all",
            }}
          >
            We are Game Changers
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h5"
            sx={{
              my: 1,
              mb: 5,
              fontWeight: 700,
              wordBreak: "keep-all",
              fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" },
            }}
          >
            {t(`game.title1`)}
            <br />
            {t(`game.title2`)}
            {t(`game.title3`)}
            {t(`game.title4`)}
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              wordBreak: "keep-all",
              color: "text.secondary",
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
            }}
          >
            {t(`game.contents1`)}
            <br />
            {t(`game.contents2`)}
            <br />
            {t(`game.contents3`)}
            <br />
            {t(`game.contents4`)}
            <br />
            {t(`game.contents5`)}
          </Typography>
        </m.div>
      </Stack>
      <Stack
        spacing={-2}
        direction={{ xs: "row", sm: "row" }}
        alignItems={{ xs: "center", md: "unset" }}
        justifyContent={{ xs: "center", md: "unset" }}
        sx={{ mt: 5 }}
      >
        <Box>
          <img src={t(`game.img1`)} alt="" />
        </Box>
        <Box
          sx={{ cursor: "pointer", paddingRight: 3 }}
          onClick={() => {
            window.open("https://dunamu.com/ko", "_blank");
          }}
        >
          <img src={t(`game.img2`)} alt="" />
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://amxrace.com", "_blank");
          }}
        >
          <img src={t(`game.img3`)} alt="" />
        </Box>
      </Stack>
    </Container>
  );
}
