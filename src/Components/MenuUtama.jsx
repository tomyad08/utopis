import { useNavigate } from "react-router-dom";

const MenuUtama = () => {
  const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      nama: "Daftar Siswa & Report",
      link: "/daftar-siswa",
    },
    {
      id: 2,
      nama: "Input Siswa Baru",
      link: "/input-siswa",
    },
    {
      id: 3,
      nama: "Absensi & Input Progress",
      link: "/absensi-siswa",
    },
  ];
  return (
    <div>
      {Data.map((value) => (
        <div
          className="my-4  bg-blue-100 rounded-lg p-2 cursor-pointer"
          key={value.id}
          onClick={() => navigate(value.link)}
        >
          <p className="text-center font-semibold">{value.nama}</p>
        </div>
      ))}
    </div>
  );
};
export default MenuUtama;
