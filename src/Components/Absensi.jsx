import { useEffect, useState } from "react";
import { ENDPOINT } from "../Utils/endpoints";
import { useNavigate } from "react-router-dom";

const Absensi = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = () => {
    var formData = new FormData();
    for (var key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        formData.append(key, inputs[key]);
      }
    }
    fetch(ENDPOINT.ABSENSI, {
      method: "POST",
      body: formData,
    }).then(() => {
      setInputs({});
    });
  };
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
  const nilai = [
    {
      id: 0,
      nilai: 40,
    },
    {
      id: 1,
      nilai: 50,
    },
    {
      id: 2,
      nilai: 60,
    },
    {
      id: 3,
      nilai: 70,
    },
    {
      id: 4,
      nilai: 80,
    },
    {
      id: 5,
      nilai: 90,
    },
    {
      id: 6,
      nilai: 100,
    },
  ];
  const mapel = [
    {
      id: 1,
      mapel: "Matematika",
    },
    {
      id: 2,
      mapel: "IPA",
    },
    {
      id: 3,
      mapel: "IPS",
    },
    {
      id: 4,
      mapel: "PKn",
    },
    {
      id: 5,
      mapel: "Bahasa Indonesia",
    },
    {
      id: 6,
      mapel: "Bahasa Inggris",
    },
  ];

  return (
    <div>
      {data ? (
        <form>
          <label className="text-sm">Nama Siswa</label>
          <select
            className="p-2 w-full rounded-lg bg-blue-100"
            name="nama_siswa"
            onChange={handleChange}
          >
            <option>Silahkan input nama</option>
            {data.map((value) => (
              <option key={value.timestamp} value={value.nama_siswa}>
                {value.nama_siswa}
              </option>
            ))}
          </select>

          <label className="text-sm mt-2">Mata Pelajaran</label>
          <select
            className="p-2 w-full rounded-lg bg-blue-100"
            name="mapel"
            onChange={handleChange}
          >
            <option>Silahkan pilih ...</option>
            {mapel.map((value) => (
              <option key={value.id} value={value.nilai}>
                {value.mapel}
              </option>
            ))}
          </select>

          <label className="text-sm mt-2">Keaktifan Motorik</label>
          <select
            className="p-2 w-full rounded-lg bg-blue-100"
            name="nilai_motorik"
            onChange={handleChange}
          >
            <option>Silahkan pilih ...</option>
            {nilai.map((value) => (
              <option key={value.id} value={value.nilai}>
                {value.nilai}
              </option>
            ))}
          </select>

          <label className="text-sm mt-2">Keaktifan Kognitif</label>
          <select
            className="p-2 w-full rounded-lg bg-blue-100"
            name="nilai_kognitif"
            onChange={handleChange}
          >
            <option>Silahkan pilih ...</option>
            {nilai.map((value) => (
              <option key={value.id} value={value.nilai}>
                {value.nilai}
              </option>
            ))}
          </select>
          <button
            className="text-sm font-semibold p-2 w-full rounded-lg text-center bg-red-500 text-white mt-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="flex justify-end">
            <button
              className="p-2 rounded-lg bg-blue-100 font-bold my-5"
              onClick={() => navigate("/menu")}
            >
              Back
            </button>
          </div>
        </form>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
export default Absensi;
