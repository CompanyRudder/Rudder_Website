import AWS from "aws-sdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function Write_EN({ admin }) {
  const navigate = useNavigate();

  const BucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
  const Region = process.env.REACT_APP_AWS_REGION;

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });
  const myBucket = new AWS.S3({
    params: { Bucket: BucketName },
    region: Region,
  });
  const [img1file, setImg1File] = useState(null);
  const [img1Name, setImg1Name] = useState("");
  const [img2file, setImg2File] = useState(null);
  const [img2Name, setImg2Name] = useState("");
  const [img3file, setImg3File] = useState(null);
  const [img3Name, setImg3Name] = useState("");
  const [img4file, setImg4File] = useState(null);
  const [img4Name, setImg4Name] = useState("");
  const [img5file, setImg5File] = useState(null);
  const [img5Name, setImg5Name] = useState("");

  const PortfolioWriteForm = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Date is required"),
    contents: Yup.string().required("Contents is required"),
    sub_title1: Yup.string().required("SubTitle1 is required"),
    sub_contents1: Yup.string().required("SubContents is required"),
    pic1: Yup.string().required("Main Image is required!"),
    pic2: Yup.string().required("This Image is required!"),
    pic3: Yup.string().required("This Image is required!"),
    pic4: Yup.string().required("This Image is required!"),
    pic5: Yup.string().required("This Image is required!"),
  });
  const defaultValues = {
    title: "",
    date: "",
    contents: "",
    sub_title1: "",
    sub_contents1: "",
    sub_title2: "",
    sub_contents2: "",
    sub_title3: "",
    sub_contents3: "",
    sub_title4: "",
    sub_contents4: "",
    sub_title5: "",
    sub_contents5: "",
    sub_link_title: "",
    sub_link_adrs: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
    pic5: "",
  };
  const methods = useForm({
    resolver: yupResolver(PortfolioWriteForm),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const inputFile = (e) => {
    setImg1Name(e.target.value.split("fakepath\\")[1]);
    setImg1File(e.target.files[0]);
  };
  const inputFile2 = (e) => {
    setImg2Name(e.target.value.split("fakepath\\")[1]);
    setImg2File(e.target.files[0]);
  };
  const inputFile3 = (e) => {
    setImg3Name(e.target.value.split("fakepath\\")[1]);
    setImg3File(e.target.files[0]);
  };
  const inputFile4 = (e) => {
    setImg4Name(e.target.value.split("fakepath\\")[1]);
    setImg4File(e.target.files[0]);
  };
  const inputFile5 = (e) => {
    setImg5Name(e.target.value.split("fakepath\\")[1]);
    setImg5File(e.target.files[0]);
  };
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log("DATA", data);

      //axios(INSERT)전에 버킷업로드
      const params = {
        ACL: "public-read",
        Body: img1file,
        Bucket: BucketName,
        Key: `en/${data.title}/${img1Name}`,
        ContentType: "image/jpeg",
        ContentDisposition: "inline",
        CacheControl: "no-cache",
      };
      const params2 = {
        ACL: "public-read",
        Body: img2file,
        Bucket: BucketName,
        Key: `en/${data.title}/${img2Name}`,
        ContentType: "image/jpeg",
        ContentDisposition: "inline",
        CacheControl: "no-cache",
      };
      const params3 = {
        ACL: "public-read",
        Body: img3file,
        Bucket: BucketName,
        Key: `en/${data.title}/${img3Name}`,
        ContentType: "image/jpeg",
        ContentDisposition: "inline",
        CacheControl: "no-cache",
      };
      const params4 = {
        ACL: "public-read",
        Body: img4file,
        Bucket: BucketName,
        Key: `en/${data.title}/${img4Name}`,
        ContentType: "image/jpeg",
        ContentDisposition: "inline",
        CacheControl: "no-cache",
      };
      const params5 = {
        ACL: "public-read",
        Body: img5file,
        Bucket: BucketName,
        Key: `en/${data.title}/${img5Name}`,
        ContentType: "image/jpeg",
        ContentDisposition: "inline",
        CacheControl: "no-cache",
      };

      myBucket.putObject(params).send((err) => {
        if (err) console.log(err);
        else console.log(params.Key);
      });
      myBucket.putObject(params2).send((err) => {
        if (err) console.log(err);
        else console.log(params2.Key);
      });
      myBucket.putObject(params3).send((err) => {
        if (err) console.log(err);
        else console.log(params3.Key);
      });
      myBucket.putObject(params4).send((err) => {
        if (err) console.log(err);
        else console.log(params4.Key);
      });
      myBucket.putObject(params5).send((err) => {
        if (err) console.log(err);
        else console.log(params5.Key);
      });

      //--DB INSERT
      axios
        .post("/api/insertPortfolio_en", { data })
        .then(() => {
          console.log("SUCCESS");
          alert("업로드 완료 되었습니다!");
          navigate("/auth/delete_en");
        })
        .catch(() => console.log("ERROR"));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AdminLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        포폴 작성(영문)
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <RHFTextField name="title" label="이벤트 제목" />
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
            <RHFTextField
              type="file"
              name="pic1"
              label="메인사진1"
              fullWidth
              onInput={inputFile}
              sx={{ maxWidth: 560 }}
              value={"" || undefined}
            />
            <RHFTextField
              type="file"
              name="pic2"
              label="메인사진2"
              fullWidth
              onInput={inputFile2}
              sx={{ maxWidth: 560 }}
              value={"" || undefined}
            />
            <RHFTextField
              type="file"
              name="pic3"
              label="메인사진3"
              fullWidth
              onInput={inputFile3}
              sx={{ maxWidth: 560 }}
              value={"" || undefined}
            />
            <RHFTextField
              type="file"
              name="pic4"
              label="메인사진4"
              fullWidth
              onInput={inputFile4}
              sx={{ maxWidth: 560 }}
              value={"" || undefined}
            />
            <RHFTextField
              type="file"
              name="pic5"
              label="메인사진5"
              fullWidth
              onInput={inputFile5}
              sx={{ maxWidth: 560 }}
              value={"" || undefined}
            />
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
            SAVE
          </LoadingButton>
        </Box>
      </FormProvider>
    </AdminLayout>
  );
}
