import { m } from "framer-motion";
import { Route, Routes, useNavigate } from "react-router-dom";
//@mui
import {
  Container,
  Stack,
  Typography,
  Box,
  alpha,
  styled,
  Button,
} from "@mui/material";
//utils
import { bgGradient } from "../../utils/cssStyles";
//box
import { varHover, varTranHover } from "../../box/animate";
import Image from "../../box/image";
//
import { useEffect, useState } from "react";

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

export default function PortfolioSection({ slice, slice_en, lang }) {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
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
          sx={{
            color: "text.disabled",
            fontFamily: "Jamsil2",
            fontSize: "1.325rem",
          }}
        >
          OUR WORK
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
            fontFamily: "Jamsil2",
            fontWeight: 900,
          }}
        >
          PORTFOLIO
        </Typography>
      </Stack>

      {lang === "ko" ? (
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
          {slice.map((slice, i) => (
            <Portfolio key={i} slice={slice} lang={lang} i={slice.idx} />
          ))}
        </Box>
      ) : (
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
          {slice_en.map((slice_en, i) => (
            <Portfolio key={i} slice={slice_en} lang={lang} i={slice_en.idx} />
          ))}
        </Box>
      )}

      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        {lang === "ko" ? (
          <Button
            size="large"
            color="secondary"
            variant="contained"
            sx={{
              fontFamily: "Jamsil1",
              fontWeight: "700",
              paddingLeft: "5rem",
              paddingRight: "5rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
            onClick={() => {
              navigate(
                "/list"
                // { state: { lang: lang } }
              );
            }}
          >
            VIEW MORE
          </Button>
        ) : (
          <Button
            size="large"
            color="secondary"
            variant="contained"
            sx={{
              fontFamily: "Jamsil1",
              fontWeight: "700",
              paddingLeft: "5rem",
              paddingRight: "5rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
            onClick={() => {
              navigate(
                "/list_en"
                // { state: { lang: lang } }
              );
            }}
          >
            VIEW MORE
          </Button>
        )}
      </Box>
    </Container>
  );
}

function Portfolio({ slice, i, lang }) {
  const navigate = useNavigate();
  const url1 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/${slice.e_title}/${slice.pic1}`;
  const url_en = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/en/${slice.e_title}/${slice.pic1}`;
  return (
    <>
      <Stack
        onClick={() => {
          if (lang === "ko") {
            navigate(`portfolio/${i}`);
          } else {
            navigate(`portfolio_en/${i}`);
          }
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
                  fontSize: { xs: "16px", md: "16px", lg: "16px" },
                }}
              >
                {slice.e_title}
              </Typography>
            </Stack>
          </StyledOverlay>
          <m.div>
            {lang === "ko" ? (
              <Image src={url1} alt="" ratio="1/1" />
            ) : (
              <Image src={url_en} alt="" ratio="1/1" />
            )}
          </m.div>
        </Box>
      </Stack>
    </>
  );
}
