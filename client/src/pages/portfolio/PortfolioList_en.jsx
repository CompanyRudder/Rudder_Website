import { m } from "framer-motion";
import NavBar2 from "../../components/NavBar2";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "../etc/LoadingScreen";
//@mui
import {
  Container,
  Stack,
  Typography,
  Box,
  styled,
  alpha,
  Button,
} from "@mui/material";
//box
import { varHover, varTranHover } from "../../box/animate";
import Image from "../../box/image";
//utils
import { bgGradient } from "../../utils/cssStyles";
import Footer from "../../components/main/Footer";

const StyledOverlay = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  "&:hover": { opacity: 1 },
}));

export default function PortfolioList({ data }) {
  const navigate = useNavigate();
  const lang = "en";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <NavBar2 />
      <Container
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 1200,
            mb: { xs: 8, md: 5 },
            mx: { xs: "auto", md: "unset" },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "text.disabled", fontFamily: "Jamsil2" }}
          ></Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1rem", md: "2rem", lg: "2.5rem" },
              fontFamily: "Jamsil2",
              fontWeight: 900,
            }}
          >
            PORTFOLIO LIST
          </Typography>
        </Stack>
        <Box
          style={{ marginBottom: "4rem", marginTop: "2.5rem" }}
          sx={{
            columnGap: 1,
            display: "grid",
            rowGap: { xs: 1, md: 1 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {data.map((data, i) => (
            <Portfolio key={i} data={data} i={data.idx} lang={lang} />
          ))}
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            size="large"
            color="secondary"
            variant="contained"
            sx={{
              fontFamily: "Jamsil1",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "4.5rem",
              paddingRight: "4.5rem",
              fontWeight: "700",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            GO MAIN
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  );
}

function Portfolio({ data, i, lang }) {
  const navigate = useNavigate();
  const url1 = `https://s3.ap-northeast-2.amazonaws.com/auto-manix.com/en/${data.e_title}/${data.pic1}`;
  return (
    <>
      <Stack
        onClick={() => {
          navigate(`/portfolio_en/${i}`, { state: { ...data, lang: lang } });
        }}
      >
        <Box
          component={m.div}
          whileHover="hover"
          variants={varHover(0.99)}
          transition={varTranHover()}
          sx={{
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <StyledOverlay>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ width: 1, zIndex: 9, bottom: 24, position: "absolute" }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "common.white",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1rem" },
                }}
              >
                {data.e_title}
              </Typography>
            </Stack>
          </StyledOverlay>
          <m.div>
            <Image src={url1} alt="" ratio="1/1" />
          </m.div>
        </Box>
      </Stack>
    </>
  );
}
