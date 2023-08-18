//@mui
import { Divider, Container, Typography, Box } from "@mui/material";
import Logo from "../Logo";
//language
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <Divider />
      <Box sx={{ bgcolor: "#f2f2f2" }}>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Logo single />

          <Typography
            variant="caption"
            component="div"
            sx={{
              color: "text.secondary",
              mt: 5,
              fontSize: "0.9rem",
              wordBreak: "keep-all",
            }}
          >
            {t(`footer.description`)}
            <a href="mailto:amx_biz@auto-manix.com" style={{ color: "#222" }}>
              abcd@rudder.com
            </a>
            <br />
            <br />© Copyright 2023 RUDDER Inc. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
