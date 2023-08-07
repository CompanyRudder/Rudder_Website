import { m } from "framer-motion";
// @mui
import { Typography, Container, Stack, Card, Box } from "@mui/material";
//box
import SvgColor from "../../box/svg-color";
import TextMaxLine from "../../box/text-max-line";
import { MotionViewport, varFade } from "../../box/animate";
//language
import { useTranslation } from "react-i18next";

const COLORS = ["#fa531b", "#37b47e", "#ffab00", "#754ffe"];

export default function CardSection({ lang }) {
  const { t } = useTranslation();
  const SERVICES = [
    {
      name: "Brand Marketing",
      icon: "/assets/icons/icon-marketing.svg",
      content: t(`card.card1_contents1`),
      content2: t(`card.card1_contents2`),
      path: "/",
    },
    {
      name: "Motorsports Marketing",
      icon: "/assets/icons/icon-motorsport.svg",
      content: t(`card.card2_contents1`),
      content2: t(`card.card2_contents2`),
      path: "/",
    },
    {
      name: "eSports Marketing",
      icon: "/assets/icons/icon-esport.svg",
      content: t(`card.card3_contents1`),
      content2: t(`card.card3_contents2`),
      path: "/",
    },
    {
      name: "Partnership Solutions",
      icon: "/assets/icons/icon-partmership.svg",
      content: t(`card.card4_contents1`),
      content2: t(`card.card4_contents2`),
      path: "/",
    },
  ];
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 5, md: 10 },
        bgcolor: "background.neutral",
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
          WHAT WE DO
        </Typography>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
              fontFamily: "Jamsil2",
              fontWeight: 900,
              wordBreak: "keep-all",
            }}
          >
            {t(`card.title`)}
            <br />
            {t(`card.title2`)}
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "18px",
              wordBreak: "keep-all",
            }}
          >
            {t(`card.sub_title`)}
          </Typography>
        </m.div>
      </Stack>

      <Box
        variants={varFade().inUp}
        sx={{
          gap: 4,
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          whiteSpace: "pre-line",
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

function ServiceItem({ service, index }) {
  const { name, icon, content, content2 } = service;

  return (
    <Card
      variant="outlined"
      sx={{
        px: 1,
        py: 5,
        textAlign: "center",
        borderColor: "#fff",
        boxShadow: "4.9px 6.3px 24.5px 9.5px rgba(110,112,124,0.05)",
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: "auto",
          color: [COLORS[index]],
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6" sx={{ fontFamily: "Jamsil2" }}>
          {name}
        </TextMaxLine>
        <TextMaxLine sx={{ color: "text.secondary", fontSize: "16px" }}>
          {content}
          <br />
          {content2}
        </TextMaxLine>
      </Stack>
    </Card>
  );
}
