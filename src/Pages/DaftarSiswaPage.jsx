import DaftarSiswa from "../Components/DaftarSiswa";

const DaftarSiswaPage = () => {
  return (
    <div className="p-5 bg-white h-screen">
      <h1 className="font-bold text-2xl text-center text-blue-600">
        UTOPIS EDUCATION
      </h1>
      <h1 className="text-xl font-semibold text-center">List Data Siswa</h1>
      <p className="text-sm text-center mb-4">
        Berikut adalah list daftar siswa.
      </p>
      <DaftarSiswa />
    </div>
  );
};
export default DaftarSiswaPage;
