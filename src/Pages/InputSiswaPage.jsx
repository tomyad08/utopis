import InputSiswa from "../Components/InputSiswa";

const InputSiswaPage = () => {
  return (
    <div className="bg-white h-screen p-10 flex justify-center items-center">
      <div>
        <h1 className="font-bold text-2xl text-blue-600">UTOPIS EDUCATION</h1>
        <h1 className="text-xl font-bold">Input Siswa</h1>
        <p className="text-sm mb-5">Silahkan input data siswa di bawah ini:</p>
        <InputSiswa />
      </div>
    </div>
  );
};
export default InputSiswaPage;
