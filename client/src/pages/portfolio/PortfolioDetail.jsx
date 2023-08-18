import NavBar2 from "../../components/NavBar2";
import Footer from "../../components/main/Footer";
import LoadingScreen from "../etc/LoadingScreen";
import { m } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router-dom";
//@mui
import {
  Divider,
  Container,
  Stack,
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Button,
} from "@mui/material";
//box
import Image from "../../box/image/Image";
import Iconify from "../../box/iconify/Iconify";
import { varTranHover } from "../../box/animate";
import Carousel from "../../components/portfolio/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail({ data, data_en }) {
  const { id } = useParams(); //
  const navigate = useNavigate();
  const [lang, setLang] = useState("ko");
  const [detail, setDetail] = useState([
    {
      idx: 0,
      e_title: "",
      e_client: "",
      e_dateStart: "",
      e_dateEnd: "",
      e_location: "",
      e_platform: "",
      e_for: "",
      e_work: "",
      e_contents: "",
      write_timestamp: "",
      e_picture1: "",
      e_picture2: "",
      e_picture3: "",
      e_picture4: "",
      e_picture5: "",
      lang: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("/api/portfolioDetail", { id })
      .then((res) => {
        setDetail(res.data[0]);
        setLang(res.data[0].lang);
        if (res.data[0] == null) {
          console.log("PAGENOTFOUND");
          navigate("/pagenotfound");
        }
        console.log("SUCCESS");
      })
      .catch(() => console.log("ERROR"));

    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const url1 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/${detail.e_title}/${detail.pic1}`;
  const url2 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/${detail.e_title}/${detail.pic2}`;
  const url3 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/${detail.e_title}/${detail.pic3}`;
  const url4 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/${detail.e_title}/${detail.pic4}`;
  const url5 = `https://s3.ap-northeast-2.amazonaws.com/rudderuni.com/${detail.e_title}/${detail.pic5}`;

  return (
    <>
      {/* <NavBar2 /> */}
      <Container
        sx={{
          py: { xs: 10, md: 15 },
          wordWrap: "break-word",
          overflow: "hidden",
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
        ></Stack>

        {/* Gallery */}

        <Box
          sx={{
            gap: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            },
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div
            variants={{
              hover: { opacity: 0.8 },
            }}
            transition={varTranHover()}
          >
            <Image
              alt="photo"
              src={url1}
              ratio="1/1"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
          <Box
            sx={{
              gap: 1,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <m.div
              // whileHover="hover"
              variants={{
                hover: { opacity: 0.8 },
              }}
            >
              <Image
                alt="photo"
                src={url2}
                ratio="1/1"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
            <m.div
              // whileHover="hover"
              variants={{
                hover: { opacity: 0.8 },
              }}
            >
              <Image
                alt="photo"
                src={url3}
                ratio="1/1"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
            <m.div
              // whileHover="hover"
              variants={{
                hover: { opacity: 0.8 },
              }}
            >
              <Image
                alt="photo"
                src={url4}
                ratio="1/1"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
            <m.div
              // whileHover="hover"
              variants={{
                hover: { opacity: 0.8 },
              }}
            >
              <Image
                alt="photo"
                src={url5}
                ratio="1/1"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Box>
        </Box>

        {/* Description */}
        <Grid
          container
          columnSpacing={8}
          rowSpacing={5}
          direction="row-reverse"
        >
          <Grid xs={12} md={12} lg={12}>
            <Header detail={detail} lang={lang} />
            <Summury
              detail={detail}
              data={data}
              id={id}
              lang={lang}
              data_en={data_en}
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

function Header({ data, detail, lang }) {
  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: "column", md: "row" }}
        sx={{
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ flexGrow: 1, pr: { md: 10 }, fontFamily: "Jamsil2" }}
        >
          {detail.e_title}
        </Typography>
      </Stack>
    </>
  );
}

function Summury({ detail, data_en, id, data }) {
  const navigate = useNavigate();
  return (
    <Stack spacing={5}>
      <div>
        <Box
          sx={{
            rowGap: 2.5,
            columnGap: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
          }}
        >
          <OverviewItem label="이벤트 일자" text={detail.e_date} />
          <OverviewItem label={detail.sub_title1} text={detail.sub_contents1} />
          <OverviewItem label={detail.sub_title2} text={detail.sub_contents2} />
          <OverviewItem label={detail.sub_title3} text={detail.sub_contents3} />
          <OverviewItem label={detail.sub_title4} text={detail.sub_contents4} />
          <OverviewItem label={detail.sub_title5} text={detail.sub_contents5} />
          <OverviewItem2
            label={detail.sub_link_title}
            text={detail.sub_link_adrs}
          />
        </Box>
      </div>

      <Divider sx={{ borderStyle: "dashed", my: 5 }} />

      {/* contents */}
      <div>
        <Typography variant="h5" paragraph>
          내용
        </Typography>

        <Typography sx={{ mb: 2 }} style={{ whiteSpace: "pre-wrap" }}>
          {detail.e_contents}
        </Typography>
      </div>
      <Divider sx={{ borderStyle: "dashed", my: 5 }} />
      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
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
          onClick={() => navigate("/list")}
        >
          List
        </Button>
      </Box>
      {/* 캐러셀(Rudder- 캐러셀 잠깐 없앰) */}
      {/* <Carousel data={data} id={id} lang={"ko"} /> */}
    </Stack>
  );
}

function OverviewItem({ icon, label, text = "-" }) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      <Iconify icon={icon} width={24} />
      <Stack spacing={0.5}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  );
}
function OverviewItem2({ icon, label, text = "-" }) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      <Iconify icon={icon} width={24} />
      <Stack spacing={0.5}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
        <Typography
          sx={{ cursor: "pointer", color: "#0079f2" }}
          onClick={() => {
            window.open(`${text}`);
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
