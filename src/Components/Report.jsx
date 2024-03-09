import { useEffect, useState } from "react";
import { ENDPOINT } from "../Utils/endpoints";
import { Month } from "../DataStatics/Month";

const Report = (input) => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState(`0${new Date().getMonth()}`);
  const [total, setTotal] = useState(0);

  useEffect(() => {}, []);

  const getFilter = (x) => {
    const y = x
      .filter((value) => {
        if (value.nama_siswa === input.input) {
          return value;
        }
      })
      .filter((value) => {
        if (value.timestamp.slice(5, 7) === select) {
          return value;
        }
      });

    let ipa_kognitif = 0;
    let ipa_motorik = 0;
    let matematika_kognitif = 0;
    let matematika_motorik = 0;
    let ips_kognitif = 0;
    let ips_motorik = 0;
    let bahasa_indonesia_motorik = 0;
    let bahasa_indonesia_kognitif = 0;
    let pkn_motorik = 0;
    let pkn_kognitif = 0;
    let bahasa_inggris_kognitif = 0;
    let bahasa_inggris_motorik = 0;

    let countMat = 0;
    let countIpa = 0;
    let countIps = 0;
    let countBindo = 0;
    let countBing = 0;
    let countPkn = 0;
    let count = 0;
    y.map((value) => {
      count += 1;
      if (value.mapel === "Matematika") {
        countMat += 1;
        matematika_kognitif += value.nilai_kognitif;
        matematika_motorik += value.nilai_motorik;
      } else if (value.mapel === "IPA") {
        countIpa += 1;
        ipa_kognitif += value.nilai_kognitif;
        ipa_motorik += value.nilai_motorik;
      } else if (value.mapel === "IPS") {
        countIps += 1;
        ips_kognitif += value.nilai_kognitif;
        ips_motorik += value.nilai_motorik;
      } else if (value.mapel === "Bahasa Indonesia") {
        countBindo += 1;
        bahasa_indonesia_kognitif += value.nilai_kognitif;
        bahasa_indonesia_motorik += value.nilai_motorik;
      } else if (value.mapel === "Bahasa Inggris") {
        countBing += 1;
        bahasa_inggris_kognitif += value.nilai_kognitif;
        bahasa_inggris_motorik += value.nilai_motorik;
      } else if (value.mapel === "PKn") {
        countPkn += 1;
        pkn_kognitif += value.nilai_kognitif;
        pkn_motorik += value.nilai_motorik;
      }
    });
    const datas = [
      {
        id: 1,
        mapel: "IPA",
        nilai_kognitif: ipa_kognitif / countIpa,
        nilai_motorik: ipa_motorik / countIpa,
        pertemuan: countIpa,
      },
      {
        id: 2,
        mapel: "IPS",
        nilai_kognitif: ips_kognitif / countIps,
        nilai_motorik: ips_motorik / countIps,
        pertemuan: countIps,
      },
      {
        id: 3,
        mapel: "Matematika",
        nilai_kognitif: matematika_kognitif / countMat,
        nilai_motorik: matematika_motorik / countMat,
        pertemuan: countMat,
      },
      {
        id: 4,
        mapel: "PKn",
        nilai_kognitif: pkn_kognitif / countPkn,
        nilai_motorik: pkn_motorik / countPkn,
        pertemuan: countPkn,
      },
      {
        id: 5,
        mapel: "Bahasa Indonesia",
        nilai_kognitif: bahasa_indonesia_kognitif / countBindo,
        nilai_motorik: bahasa_indonesia_motorik / countBindo,
        pertemuan: countBindo,
      },
      {
        id: 6,
        mapel: "Bahasa Inggris",
        nilai_kognitif: bahasa_inggris_kognitif / countBing,
        nilai_motorik: bahasa_inggris_motorik / countBing,
        pertemuan: countBing,
      },
    ];
    setData(datas);
    setTotal(count);
  };

  const getData = () => {
    fetch(ENDPOINT.ABSENSI, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        getFilter(data);
      });
  };
  useEffect(() => {
    getData();
  }, [select]);

  return (
    <div>
      <div className="flex justify-end m-2 text-white">
        <select
          className="bg-blue-500 p-2 rounded-xl"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option>Bulan</option>
          {Month.map((value) => (
            <option value={value.id}>{value.name}</option>
          ))}
        </select>
      </div>
      <h1 className="font-bold text-2xl text-blue-600">UTOPIS EDUCATION</h1>
      <h1 className="text-xl font-bold">Rapor {input.input}</h1>
      <p className="text-sm mb-4">
        Berikut adalah laporan nilai rata-rata sdr/i {input.input}:
      </p>
      {data ? (
        <div>
          <tabel>
            <thead>
              <tr>
                <th className="p-1">Mata Pelajaran</th>
                <th className="p-1">Nilai Kognitif</th>
                <th className="p-1">Nilai Motorik</th>
                <th className="p-1">Jum. Pertemuan</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => (
                <tr key={value.timestamp}>
                  <td className="p-1 text-center">{value.mapel}</td>
                  <td className="p-1 text-center">
                    {value.nilai_kognitif ? value.nilai_kognitif : 0}
                  </td>
                  <td className="p-1 text-center">
                    {value.nilai_motorik ? value.nilai_motorik : 0}
                  </td>
                  <td className="p-1 text-center">{value.pertemuan}</td>
                </tr>
              ))}
            </tbody>
          </tabel>
          <p className="font-semibold mt-2 text-center p-2 border border-2 border-black rounded-lg">{`Total Pertemuan: ${total} Pertemuan`}</p>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
export default Report;
