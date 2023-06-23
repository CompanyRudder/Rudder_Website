import AdminLayout from "../../components/auth/AdminLayout";
//@mui
import { Typography } from "@mui/material";
export default function Visit() {
  return (
    <AdminLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        구글계정 받기
      </Typography>
    </AdminLayout>
  );
}
