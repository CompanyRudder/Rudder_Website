// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Typography, Container, Grid } from "@mui/material";
//utils
import { bgGradient } from "../../utils/cssStyles";
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselLogo from "../CarouselLogo";

export default function CarouselSection() {
  const StyledRoot = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/01.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const StyledRoot2 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/02.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const StyledRoot3 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/03.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const StyledRoot4 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/04.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const StyledRoot5 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/05.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    arrow: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <Box style={{ overflow: "hidden" }}>
      <Box
        sx={{
          textAlign: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: "99",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CarouselLogo />
      </Box>
      <Slider {...settings}>
        <StyledRoot>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `100vh`, md: `100vh` },
            }}
          ></Container>
        </StyledRoot>
        <StyledRoot2>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `100vh`, md: `100vh` },
            }}
          ></Container>
        </StyledRoot2>
        <StyledRoot3>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `100vh`, md: `100vh` },
            }}
          ></Container>
        </StyledRoot3>
        <StyledRoot4>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `100vh`, md: `100vh` },
            }}
          ></Container>
        </StyledRoot4>
        <StyledRoot5>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `100vh`, md: `100vh` },
            }}
          ></Container>
        </StyledRoot5>
      </Slider>
    </Box>
  );
}
