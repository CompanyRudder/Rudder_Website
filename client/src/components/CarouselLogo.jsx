import { Link, Box } from "@mui/material";
//language
import { useTranslation } from "react-i18next";

export default function CarouselLogo({ single = false, sx }) {
  const { t } = useTranslation();

  const singleLogo = <img src={t(`header.img1`)} alt="" />;
  const fullLogo = <img src={t(`header.img2`)} alt="" />;

  return (
    <Link
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0, overflow: "hidden" }}
    >
      <Box
        sx={{
          width: { xs: 200, md: 350, lg: 440 },
          lineHeight: 100,
          display: "inline-flex",
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}
