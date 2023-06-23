import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin_Login";
import WriteKR from "./Write_KR";
import DeleteKR from "./Delete_KR";
import ModifyKR from "./Modify_KR";
import WriteEN from "./Write_EN";
import DeleteEN from "./Delete_EN";
import ModifyEN from "./Modify_EN";
import Visit from "./Visit";
import Footer from "../../components/main/Footer";
import { useEffect, useState } from "react";
import NotFound from "../etc/NotFound";

export default function Admin({ data, data_en }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("id") != null) {
      setAdmin(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin setAdmin={setAdmin} />} />
        <Route
          path="/write_kr"
          element={
            admin === true ? <WriteKR admin={admin} /> : <div>잘못된 접근</div>
          }
        />
        <Route
          path="/delete_kr"
          element={
            admin === true ? (
              <DeleteKR data={data} admin={admin} />
            ) : (
              <div>잘못된 접근</div>
            )
          }
        />
        <Route path="/modify_kr/:id" element={<ModifyKR />} />
        <Route
          path="/write_en"
          element={
            admin === true ? <WriteEN admin={admin} /> : <div>잘못된 접근</div>
          }
        />
        <Route
          path="/delete_en"
          element={
            admin === true ? (
              <DeleteEN data_en={data_en} admin={admin} />
            ) : (
              <div>잘못된 접근</div>
            )
          }
        />
        <Route path="/modify_en/:id" element={<ModifyEN />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
