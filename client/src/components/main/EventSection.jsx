import { m } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
//@mui
import { styled, alpha } from "@mui/material";
import { Typography, Container } from "@mui/material";
//utils
import { bgGradient } from "../../utils/cssStyles";
//box
import { MotionViewport, varFade } from "../../box/animate";
//language
import { useTranslation } from "react-i18next";

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.1),
    imgUrl: "/assets/images/img-success.jpg",
  }),
  textAlign: "right",
  color: "#fff",
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function EventSection() {
  const { t } = useTranslation();
  return (
    <MotionViewport>
      <StyledRoot>
        <Container>
          <Typography
            variant="h2"
            sx={{
              mt: 8,
              mb: 8,
              mx: 4,
              zIndex: 99,
              color: "#fff",
              fontSize: { xs: "1.2rem", md: "1.8rem", lg: "3rem" },
            }}
          >
            <font style={{ fontWeight: 900, fontFamily: "Jamsil2" }}>
              {t(`event.first`)}
            </font>{" "}
            {t(`event.second`)}
            <br />
            {t(`event.third`)}
          </Typography>
        </Container>
      </StyledRoot>
    </MotionViewport>
  );
}
