import { useEffect, useState } from "react";
import { ENDPOINT } from "../Utils/endpoints";
import { useNavigate } from "react-router-dom";

const DaftarSiswa = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState("");
  const [select, setSelect] = useState("");

  const getData = () => {
    fetch(ENDPOINT.SISWA, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <label className="text-sm mb-1 mt-2">Nama Siswa</label>
        <input
          className="p-2 w-full focus:text-bold outline-none rounded-lg bg-blue-100 mb-5"
          onChange={(e) => setSelect(e.target.value)}
        />
      </div>
      {Data ? (
        <div>
          {Data.filter((value) => {
            if (select === "") {
              return value;
            } else if (value.nama_siswa.includes(select)) {
              return value;
            }
          }).map((value) => (
            <div
              className="p-2 rounded-lg border-2 border-blue-400 my-2 bg-blue-100"
              key={value.timestamp}
            >
              <h1 className="text-xl font-semibold">{value.nama_siswa}</h1>
              <div className="text-sm py-1">
                <p>Nama Orang Tua: {value.nama_orang_tua}</p>
                <p>No_hp: {value.no_hp_orang_tua}</p>
              </div>
              <button
                className="w-full p-2 text-white font-semibold border-2 rounded-lg border-white bg-red-500"
                onClick={() =>
                  navigate("/rapor", {
                    state: value.nama_siswa,
                  })
                }
              >
                Rapor
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
export default DaftarSiswa;
