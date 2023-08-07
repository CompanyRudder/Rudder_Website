import { Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Logo({ single = false, sx }) {
  const navigate = useNavigate();
  const singleLogo = <img src="/assets/logo/logo.svg" alt="" />;
  const fullLogo = <img src="/assets/logo/logo.svg" alt="" />;
  return (
    <Link
      onClick={() => {
        navigate("/");
      }}
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 150 : 150,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}
