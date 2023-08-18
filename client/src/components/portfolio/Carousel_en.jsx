import { m } from "framer-motion";
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
import Iconify from "../../box/iconify/Iconify";
//utils
import { bgGradient } from "../../utils/cssStyles";
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResponsive from "../../hooks/useResponsive";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

export default function CarouselCompo({ data }) {
  const isMdUp = useResponsive("up", "md");

  const lang = "en";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrow: true,
    nextArrow: (
      <Iconify
        icon="carbon:chevron-right"
        sx={{ mx: 1, color: "#222", "&:hover": { color: "#4484c9" } }}
        width={24}
      />
    ),
    prevArrow: (
      <Iconify
        icon="carbon:chevron-left"
        sx={{ mx: 1, color: "#222", "&:hover": { color: "#4484c9" } }}
        width={24}
      />
    ),
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  const viewAllBtn = (
    <Button
      sx={{ fontFamily: "Jamsil2" }}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
      onClick={() => {
        navigate("/list_en");
      }}
    >
      View All
    </Button>
  );
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1rem", md: "2rem", lg: "2.5rem" },
            fontFamily: "Jamsil2",
            fontWeight: 900,
          }}
        >
          OUR PORTFOLIO
        </Typography>

        {isMdUp && viewAllBtn}
      </Stack>
      <Slider {...settings}>
        {data.map((data, i) => (
          <Portfolio1 key={i} data={data} i={data.idx} lang={lang} />
        ))}
      </Slider>

      {!isMdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </>
  );
}

function Portfolio1({ data, i, lang }) {
  const navigate = useNavigate();

  const url1 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/en/${data.e_title}/${data.pic1}`;
  return (
    <>
      <div>
        <Stack spacing={2} sx={{ px: 1, py: 5 }}>
          <Box
            component={m.div}
            whileHover="hover"
            variants={varHover(0.99)}
            transition={varTranHover()}
            onClick={() => {
              window.location.replace(`/portfolio_en/${i}`);
            }}
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
                    fontSize: { xs: "0.8rem", md: "0.8rem", lg: "0.8rem" },
                  }}
                >
                  {data.e_title}
                </Typography>
              </Stack>
            </StyledOverlay>
            <m.div>
              <Image src={url1} alt="" ratio="3/4" />
            </m.div>
          </Box>
        </Stack>
      </div>
    </>
  );
}

function Prev() {
  return (
    <span>
      <Iconify
        icon="carbon:chevron-left"
        sx={{ mx: 1, color: "#222", "&:hover": { color: "#4484c9" } }}
        width={24}
      />
    </span>
  );
}
function Next() {
  return (
    <span>
      <Iconify
        icon="carbon:chevron-right"
        sx={{ mx: 1, color: "#222", "&:hover": { color: "#4484c9" } }}
        width={24}
      />
    </span>
  );
}
