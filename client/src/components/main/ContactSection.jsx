import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//@mui
import {
  Box,
  Container,
  Typography,
  Stack,
  FormHelperText,
  ToggleButton,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
//box
import FormProvider, { RHFTextField } from "../../box/hook-form";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
//language
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        overflow: "hidden",
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
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
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
            fontFamily: "Jamsil2",
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          CONTACT US
        </Typography>
      </Stack>
      <Grid xs={12} md={6} lg={6}>
        <ContactForm />
      </Grid>
    </Container>
  );
}

function ContactForm() {
  const { t } = useTranslation();
  const MarketingContactSchema = Yup.object().shape({
    services: Yup.array()
      .required()
      .max(1, "You can only choose 1")
      .min(1, "This field must have 1 item"),
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
  });
  const defaultValues = {
    services: [],
    email: "",
    phoneNumber: "",
    name: "",
    message: "",
  };
  const methods = useForm({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("DATA", data);

      const form = {
        services: data.services[0],
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        message: data.message,
      };

      axios({
        url: "https://script.google.com/macros/s/AKfycbyv8aoqyCyyC05k6ZjadhL8uY27m_N2wSztGMQmlcauv6Yj1E25l54O0bqCK6NXgcuH/exec", //zinkkiiiii@gmail.com
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        target: "tempdiv",
        data: form,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch(() => console.log("ERROR!"));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];
  const SERVICES = [t(`contact.one`), t(`contact.two`), t(`contact.three`)];
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <iframe
        title="temp"
        id="tempdiv"
        name="tempdiv"
        style={{ display: "none" }}
      />
      <Stack spacing={2.5} alignItems="flex-center">
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Stack direction="row" flexWrap="wrap">
                {SERVICES.map((service) => (
                  <ToggleButton
                    {...field}
                    key={service}
                    color="standard"
                    selected={field.value.includes(service)}
                    onChange={() =>
                      field.onChange(getSelected(field.value, service))
                    }
                    sx={{
                      m: 0.4,
                      textTransform: "initial",
                      typography: "title",
                      "&.Mui-selected": {
                        bgcolor: "text.primary",
                        borderColor: "transparent",
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "common.white"
                            : "grey.800",
                        "&:hover": {
                          bgcolor: "text.primary",
                        },
                      },
                    }}
                  >
                    {service}
                  </ToggleButton>
                ))}
              </Stack>

              {!!error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        />

        <RHFTextField name="email" label="Email" />
        <RHFTextField name="phoneNumber" label="Phone number" />
        <RHFTextField name="name" label="Name" />
        <RHFTextField name="message" label="Message" multiline rows={4} />
      </Stack>
      <Box sx={{ textAlign: "center" }}>
        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{
            mt: 3,
            fontFamily: "Jamsil1",
            fontWeight: "700",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
          color="secondary"
        >
          Send MESSAGE
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}
