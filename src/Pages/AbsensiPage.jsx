import Absensi from "../Components/Absensi";

const AbsensiPage = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center p-10">
      <div>
        <h1 className="font-bold text-2xl text-blue-600">UTOPIS EDUCATION</h1>
        <h1 className="text-xl font-bold">Absensi Siswa</h1>
        <p className="text-sm mb-5">
          Silahkan input data absensi di bawah ini.
        </p>
        <Absensi />
      </div>
    </div>
  );
};
export default AbsensiPage;
