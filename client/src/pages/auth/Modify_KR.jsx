import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AdminLayout from "../../components/auth/AdminLayout";
//@mui
import { Typography, Stack, Box, InputAdornment, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
//box
import FormProvider, { RHFTextField } from "../../box/hook-form";
import axios from "axios";

export default function Modify_KR() {
  const location = useLocation();
  const navigate = useNavigate();

  const PortfolioModifyForm = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Date is required"),
    contents: Yup.string().required("Contents is required"),
    sub_title1: Yup.string().required("SubTitle1 is required"),
    sub_contents1: Yup.string().required("SubContents is required"),
  });
  const defaultValues = {
    idx: location.state.copydata.idx,
    title: location.state.copydata.e_title,
    date: location.state.copydata.e_date,
    contents: location.state.copydata.e_contents,
    sub_title1: location.state.copydata.sub_title1,
    sub_contents1: location.state.copydata.sub_contents1,
    sub_title2: location.state.copydata.sub_title2,
    sub_contents2: location.state.copydata.sub_contents2,
    sub_title3: location.state.copydata.sub_title3,
    sub_contents3: location.state.copydata.sub_contents3,
    sub_title4: location.state.copydata.sub_title4,
    sub_contents4: location.state.copydata.sub_contents4,
    sub_title5: location.state.copydata.sub_title5,
    sub_contents5: location.state.copydata.sub_contents5,
    sub_link_title: location.state.copydata.sub_link_title,
    sub_link_adrs: location.state.copydata.sub_link_adrs,
  };
  const methods = useForm({
    resolver: yupResolver(PortfolioModifyForm),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log("DATA", data);

      //--DB UPDATE
      axios
        .post("/api/updatePortfolio", { data })
        .then(() => {
          console.log("SUCCESS");
          alert("수정되었습니다!");
          navigate("/");
        })
        .catch(() => console.log("ERROR"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        포폴 수정(한글)
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <RHFTextField name="title" label="이벤트 제목" disabled />
          <RHFTextField name="date" label="이벤트 날짜" />
          <Box
            rowGap={1}
            columnGap={1}
            display="grid"
            gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <RHFTextField name="sub_title1" label="서브제목 1" />
            <RHFTextField name="sub_contents1" label="서브내용 1" />
            <RHFTextField name="sub_title2" label="서브제목 2" />
            <RHFTextField name="sub_contents2" label="서브내용 2" />
            <RHFTextField name="sub_title3" label="서브제목 3" />
            <RHFTextField name="sub_contents3" label="서브내용 3" />
            <RHFTextField name="sub_title4" label="서브제목 4" />
            <RHFTextField name="sub_contents4" label="서브내용 4" />
            <RHFTextField name="sub_title5" label="서브제목 5" />
            <RHFTextField name="sub_contents5" label="서브내용 5" />
            <RHFTextField name="sub_link_title" label="링크있으면?링크 제목" />
            <RHFTextField name="sub_link_adrs" label="링크 주소 입력" />
          </Box>
          <RHFTextField name="contents" label="내용" multiline rows={4} />
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
              paddingLeft: "3rem",
              paddingRight: "3rem",
            }}
            color="secondary"
          >
            UPDATE
          </LoadingButton>
        </Box>
      </FormProvider>
    </AdminLayout>
  );
}
