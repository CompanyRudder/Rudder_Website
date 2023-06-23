import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
//utils
import { bgGradient } from "../../utils/cssStyles";
//@mui
import { Stack, Typography, InputAdornment, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { alpha, styled } from "@mui/material/styles";
//box
import FormProvider, { RHFTextField } from "../../box/hook-form";
import Iconify from "../../box/iconify/Iconify";
import axios from "axios";

export default function Admin_Login(props) {
  const navigate = useNavigate();
  const StyledRoot = styled("div")(({ theme }) => ({
    ...bgGradient({
      color: alpha(theme.palette.background.default, 0.9),
    }),
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(12, 2),
  }));
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Email or ID is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("id") != null) {
      navigate("/auth/write_kr");
    } else {
      axios
        .post("/api/login")
        .then((res) => {
          setId(res.data[0].id);
          setPw(res.data[0].pw);
        })
        .catch(() => {
          console.log("--ERROR");
        });
    }
  }, []);

  const loginCheck = (data) => {
    if (data.email === id && data.password === pw) {
      props.setAdmin(true);
      sessionStorage.setItem("id", id);
      navigate("/auth/write_kr");
    } else {
      props.setAdmin(false);
      alert("LOGIN FAILED...");
      return;
    }
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log("LOGIN--DATA--SUCCESS");
      loginCheck(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyledRoot>
      <Stack
        spacing={4}
        sx={{
          p: 4,
          width: 1,
          mx: "auto",
          flexShrink: 0,
          maxWidth: 400,
          borderRadius: 2,
          bgcolor: "background.default",
          textAlign: { xs: "center", md: "left" },
          boxShadow: (theme) => theme.customShadows.z24,
        }}
      >
        <div>
          <Typography variant="h3" paragraph>
            Admin Login
          </Typography>
        </div>

        <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <Stack spacing={2.5} alignItems="cemter">
            <RHFTextField name="email" label="Email address" />

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify
                        icon={showPassword ? "carbon:view" : "carbon:view-off"}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ mt: 2 }}
          >
            Login
          </LoadingButton>
        </FormProvider>
      </Stack>
    </StyledRoot>
  );
}
