import AdminLayout from "../../components/auth/AdminLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//@mui
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableContainer,
  IconButton,
  TableHead,
} from "@mui/material";
//box
import Scrollbar from "../../box/scrollbar";
import Iconify from "../../box/iconify/Iconify";
import axios from "axios";

export default function Delete_KR({ data, admin }) {
  const navigate = useNavigate();
  const [copydata, setCopydata] = useState([...data]);

  useEffect(() => {
    axios.get("/api/portfolio").then((res) => {
      setCopydata(res.data);
    });
  }, [data]);

  const deletePortfolio = (idx) => {
    axios
      .post("/api/deletePortfolio", { idx })
      .then(() => {
        console.log("SUCCESS");
        alert("삭제 되었습니다!");
      })
      .catch(() => console.log("ERROR"));
  };

  return (
    <AdminLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        포폴 리스트(한글)
      </Typography>
      <TableContainer
        sx={{
          overflow: "unset",
          "& .MuiTableCell-head": {
            color: "text.primary",
          },
          "& .MuiTableCell-root": {
            bgcolor: "background.default",
            borderBottomColor: (theme) => theme.palette.divider,
          },
        }}
      >
        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>idx</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>작성 일자&시간</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {copydata.length > 0 ? (
                <>
                  {copydata.map((copydata, i) => (
                    <TableRow hover key={i}>
                      <TableCell>{copydata.idx}</TableCell>
                      <TableCell
                        sx={{
                          cursor: "pointer",
                          "&:hover": { color: "#57a2ed" },
                        }}
                        onClick={() => {
                          navigate(`/auth/modify_kr/${copydata.idx}`, {
                            state: { copydata: copydata, idx: copydata.idx },
                          });
                        }}
                      >
                        {copydata.e_title}
                      </TableCell>
                      <TableCell>{copydata.write_stamp}</TableCell>
                      <TableCell align="center" padding="none">
                        <IconButton
                          onClick={() => deletePortfolio(copydata.idx)}
                        >
                          <Iconify icon="carbon:trash-can" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : null}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </AdminLayout>
  );
}
