import { m } from "framer-motion";
//@mui
import {
  Container,
  Typography,
  Box,
  Stack,
  Unstable_Grid2 as Grid,
} from "@mui/material";
//box
import Image from "../../box/image";
import { MotionViewport, varFade } from "../../box/animate";

const FEATURE_HIGHLIGHTS = [
  { id: 0, image: "/assets/partners/kolon.svg" },
  { id: 1, image: "/assets/partners/michelin.svg" },
  { id: 2, image: "/assets/partners/hyundai.svg" },
  { id: 3, image: "/assets/partners/genesis.svg" },
  { id: 4, image: "/assets/partners/audi.svg" },
  { id: 5, image: "/assets/partners/volkswagen.svg" },
  { id: 6, image: "/assets/partners/afreecatv.svg" },
  { id: 7, image: "/assets/partners/innocean.svg" },
  { id: 8, image: "/assets/partners/hankook.svg" },
  { id: 9, image: "/assets/partners/benq.svg" },
  { id: 10, image: "/assets/partners/logitech.svg" },
  { id: 11, image: "/assets/partners/kara.svg" },
  { id: 12, image: "/assets/partners/iracing.svg" },
];
export default function PartnerSection() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
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
      >
        <Typography
          variant="overline"
          sx={{ color: "text.disabled", fontFamily: "Jamsil2" }}
        ></Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
            fontFamily: "Jamsil2",
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          PARTNERS
        </Typography>
      </Stack>
      <Grid
        container="true"
        spacing={{ xs: 8, md: 3 }}
        justifyContent={{ md: "space-between" }}
      >
        <Grid xs={12} md={12} sx={{ mt: 5 }}>
          <m.div variants={varFade().inUp}>
            <Box
              sx={{
                rowGap: 7,
                columnGap: 10,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(5, 1fr)",
                  lg: "repeat(6, 1fr)",
                  xl: "repeat(6, 1fr)",
                },
              }}
            >
              {FEATURE_HIGHLIGHTS.map((feature) => (
                <m.div key={feature.id}>
                  <Box sx={{ textAlign: "center" }}>
                    <Image src={feature.image} alt="" />
                  </Box>
                </m.div>
              ))}
            </Box>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
