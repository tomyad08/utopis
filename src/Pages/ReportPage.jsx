import { useLocation } from "react-router-dom";
import Report from "../Components/Report";

const ReportPage = () => {
  const location = useLocation();
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-blue-100 p-4 rounded-lg w-4/5">
        <h1 className="font-bold text-2xl text-blue-600">UTOPIS EDUCATION</h1>
        <h1 className="text-xl font-bold">Rapor {location.state}</h1>
        <p className="text-sm mb-4">
          Berikut adalah laporan nilai rata-rata sdr/i {location.state}:
        </p>
        <Report input={location.state} />
        <p className="pt-5">
          <strong>Keterangan:</strong>
        </p>
        <p>
          <strong>Nilai kognitif:</strong> adalah nilai yang diukur dari
          kemampuan siswa untuk menyelesaikan masalah melalui berfikir.
        </p>
        <br />
        <p>
          <strong>Nilai motorik:</strong> adalah nilai yang diukur dari
          kemampuan siswa untuk menyelesaikan masalah melalui aktivitas gerak.
        </p>
        <br />
      </div>
    </div>
  );
};
export default ReportPage;
