import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import firebase from "../Firebase";
import { set } from "react-hook-form";

const Form = () => {
  const [array, setArr] = useState([]);
  const [namalengkap, setNamaLengkap] = useState("");
  const [jeniskelamin, setJeniskelamin] = useState("");
  const [pernikahan, setMarried] = useState("");
  const [kelahiran, setBirthday] = useState("");
  const [agama, setAgama] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("");
  const [nik, setNik] = useState("");
  const [kk, setKk] = useState("");
  const [vaksinasi, setVaksin] = useState("");
  const [button, setButton] = useState("Save");
  const [select, setSelect] = useState({});
  const [buktiktp, setKtp] = useState("");
  const [buktikk, setFotoKk] = useState("");
  const [search, setSearch] = useState("");

  const resetForm = () => {
    setNamaLengkap("");
    setJeniskelamin("");
    setMarried("");
    setBirthday("");
    setAgama("");
    setPendidikan("");
    setPekerjaan("");
    setKewarganegaraan("");
    setAlamat("");
    setStatus("");
    setNik("");
    setKk("");
    setVaksin("");
    setKtp("");
    setFotoKk("");
    setButton("Save");
    setKtp("");
    setFotoKk("");
    setSearch("");
    setSelect({});
  };
  const handleSubmit = () => {
    const data = {
      namalengkap: namalengkap,
      jeniskelamin: jeniskelamin,
      pernikahan: pernikahan,
      kelahiran: kelahiran,
      agama: agama,
      pendidikan: pendidikan,
      pekerjaan: pekerjaan,
      kewarganegaraan: kewarganegaraan,
      alamat: alamat,
      status: status,
      nik: nik,
      kk: kk,
      buktikk: buktikk,
      buktiktp: buktikk,
      search: search,
    };
    console.log(data);

    if (button === "Save") {
      firebase.database().ref("users1").push(data);
      resetForm();
      onReload();
    } else {
      firebase.database().ref(`users1/${select.id}`).set(data);
      resetForm();
      onReload();
    }
  };

  const onReload = () => {
    firebase
      .database()
      .ref("users1")
      .once("value", (res) => {
        if (res.val()) {
          const rawData = res.val();
          // console.log(Object.keys(rawData));
          const array2 = [];
          Object.keys(rawData).map((item) =>
            array2.push({
              id: item,
              ...rawData[item],
            })
          );
          // console.log(array2);
          setArr(array2);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    onReload();
  }, []);

  const onUpdateData = (item) => {
    setNamaLengkap(item.namalengkap);
    setJeniskelamin(item.jeniskelamin);
    setStatus(item.pernikahan);
    setAlamat(item.alamat);
    setPendidikan(item.pendidikan);
    setAgama(item.agama);
    setPekerjaan(item.pekerjaan);
    setKewarganegaraan(item.kewarganegaraan);
    setNik(item.nik);
    setKk(item.kk);
    setVaksin(item.vaksinasi);
    setKtp(item.buktiktp);
    setFotoKk(item.buktikk);
    setSearch(item.search);
    setSelect(item);
    setButton("Update");
  };
  const onDeleteData = (item) => {
    firebase.database().ref(`users1/${item.id}`).remove();
    onReload();
  };

  const onSearch = () => {
    // let nik = document.getElementById("nik").value;
    // let search = document.getElementById("search").value;
    console.log("adsfads");
    // if (search == nik) {
    //   console.log("ss");
    // }
  };

  return (
    <div className="bgmasuk">
      <Navbar />

      <br></br>
      <br />

      <form className="container d-flex">
        <input className="form-control me-2" id="search" value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" onClick={onSearch}>
          Search
        </button>
      </form>
      <br />
      <table className="container table table-responsive colorTable table-striped shadow-sm">
        <thead>
          <tr>
            <th scope="col">NIK</th>
            <th scope="col">Kartu Keluarga</th>
            <th scope="col">Nama Lengkap</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Alamat</th>
            <th scope="col">Pendidikan</th>
            <th scope="col">Pernikahan</th>
            <th scope="col">Kelahiran</th>
            <th scope="col">Status</th>
            <th scope="col">Agama</th>

            <th scope="col">Pekerjaan</th>
            <th scope="col">kewarganegaraan</th>
            <th scope="col">Vaksinasi</th>
            <th scope="col">Foto KTP</th>
            <th scope="col">Foto KK</th>

            {/* <th scope="col">Edit</th> */}
          </tr>
        </thead>
        <tbody>
          {array.map((item) => (
            <tr>
              <td>{item.nik}</td>
              <td>{item.kk}</td>
              <td>{item.namalengkap}</td>
              <td>{item.jeniskelamin}</td>
              <td>{item.alamat}</td>
              <td>{item.pendidikan}</td>
              <td>{item.pernikahan}</td>
              <td>{item.kelahiran}</td>
              <td>{item.status}</td>
              <td>{item.agama}</td>

              <td>{item.pekerjaan}</td>
              <td>{item.kewarganegaraan}</td>
              <td>
                <a href={item.vaksinasi} target="_blank">
                  buka gambar
                </a>
              </td>
              <td>
                <a href={item.buktiktp} target="_blank">
                  buka gambar
                </a>
              </td>
              <td>
                <a href={item.buktikk} target="_blank">
                  buka gambar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
