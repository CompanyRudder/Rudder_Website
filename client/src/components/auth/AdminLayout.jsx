import { useState } from "react";
//@mui
import { Container, Stack, Typography, Button, Box } from "@mui/material";
//hooks
import useResponsive from "../../hooks/useResponsive";
//config
import { NAV } from "../../config-global";
//box
import Iconify from "../../box/iconify/Iconify";
//component
import SideMenu from "./SideMenu";

export default function AdminLayout({ children }) {
  const isMdUp = useResponsive("up", "md");
  const [menuOpen, setMemuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMemuOpen(true);
  };
  const handleMenuClose = () => {
    setMemuOpen(false);
  };

  return (
    <>
      {isMdUp ? (
        <Container sx={{ my: 5, pt: 5 }}>
          <Typography variant="h3">Admin Page</Typography>
        </Container>
      ) : (
        <Box
          sx={{
            pt: 5,
            py: 2,
            mb: 5,
            borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          <Container>
            <Button
              size="small"
              color="inherit"
              startIcon={<Iconify icon="carbon:menu" />}
              onClick={handleMenuOpen}
            >
              Admin Page
            </Button>
          </Container>
        </Box>
      )}

      <Container>
        <Stack
          direction={{
            md: "row",
          }}
          alignItems={{
            md: "flex-start",
          }}
          sx={{
            mb: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <SideMenu open={menuOpen} onClose={handleMenuClose} />

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 4 },
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            {children}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
