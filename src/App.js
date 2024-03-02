import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MenuUtamaPage from "./Pages/MenuUtama";
import DaftarSiswaPage from "./Pages/DaftarSiswaPage";
import InputSiswaPage from "./Pages/InputSiswaPage";
import AbsensiPage from "./Pages/AbsensiPage";
import ReportPage from "./Pages/ReportPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MenuUtamaPage />} />
          <Route path="/daftar-siswa" element={<DaftarSiswaPage />} />
          <Route path="/input-siswa" element={<InputSiswaPage />} />
          <Route path="/absensi-siswa" element={<AbsensiPage />} />
          <Route path="/rapor" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
