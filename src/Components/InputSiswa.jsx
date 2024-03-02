import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../Utils/endpoints";

const InputSiswa = () => {
  const navigate = useNavigate();
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
    fetch(ENDPOINT.SISWA, {
      method: "POST",
      body: formData,
    }).then(() => {
      setInputs({});
    });
  };
  return (
    <div>
      <form>
        <label className="text-sm">Nama Siswa</label>
        <input
          className="focus:font-semibold bg-blue-100 p-2 w-full rounded-lg"
          name="nama_siswa"
          value={inputs.nama_siswa || ""}
          onChange={handleChange}
        />
        <label className="text-sm mt-2">Nama Orang Tua</label>
        <input
          className="focus:font-semibold bg-blue-100 p-2 w-full rounded-lg"
          name="nama_orang_tua"
          value={inputs.nama_orang_tua || ""}
          onChange={handleChange}
        />
        <label className="text-sm mt-2">No. Hp Orang Tua</label>
        <input
          className="focus:font-semibold bg-blue-100 p-2 w-full rounded-lg"
          name="no_hp_orang_tua"
          type="number"
          value={inputs.no_hp_orang_tua || ""}
          onChange={handleChange}
        />
        <label className="text-sm mt-2">Harga Per Pertemuan</label>
        <input
          className="focus:font-semibold bg-blue-100 p-2 w-full rounded-lg"
          name="harga"
          type="number"
          value={inputs.harga || ""}
          onChange={handleChange}
        />
        <button
          className="p-2 w-full rounded-lg bg-red-500 font-bold my-5 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <div className="flex justify-end">
        <button
          className="p-2 rounded-lg bg-blue-100 font-bold my-5"
          onClick={() => navigate("/menu")}
        >
          Back
        </button>
      </div>
    </div>
  );
};
export default InputSiswa;
