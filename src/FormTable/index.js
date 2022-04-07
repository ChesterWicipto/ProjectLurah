import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { set, ref, push, remove, update, onChildAdded, onValue } from "firebase/database";
import firebase from "../Firebase";
import { getDatabase, child, get, onSnapshot } from "firebase/database";

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
    setButton("Save");
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
    };
    console.log(data);

    if (button === "Save") {
      firebase
        .database()
        .ref("users")
        .push(data);
      resetForm();
      onReload();
    } else {
      firebase
        .database()
        .ref(`users/${select.id}`)
        .set(data);
      resetForm();
      onReload();
    }
  };

  const onReload = () => {
    firebase
      .database()
      .ref("users")
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
    setSelect(item);
    setButton("Update");
  };
  const onDeleteData = (item) => {
    firebase
      .database()
      .ref(`users/${item.id}`)
      .remove();
    onReload();
  };

  return (
    <div>
      <Navbar />

      <br></br>
      <br />
      <table class="container table table-responsive colorTable table-striped shadow-sm">
        <thead>
          <tr>
            <th scope="col">Nama Lengkap</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Alamat</th>
            <th scope="col">Pendidikan</th>
            <th scope="col">Pernikahan</th>
            <th scope="col">Kelahiran</th>
            <th scope="col">Status</th>
            <th scope="col">Agama</th>
            <th scope="col">NIK</th>
            <th scope="col">Kartu Keluarga</th>
            <th scope="col">Pekerjaan</th>
            <th scope="col">kewarganegaraan</th>
            <th scope="col">Vaksinasi</th>
            {/* <th scope="col">Edit</th> */}
          </tr>
        </thead>
        <tbody>
          {array.map((item) => (
            <tr>
              <td>{item.namalengkap}</td>
              <td>{item.jeniskelamin}</td>
              <td>{item.alamat}</td>
              <td>{item.pendidikan}</td>
              <td>{item.pernikahan}</td>
              <td>{item.kelahiran}</td>
              <td>{item.status}</td>
              <td>{item.agama}</td>
              <td>{item.nik}</td>
              <td>{item.kk}</td>
              <td>{item.pekerjaan}</td>
              <td>{item.kewarganegaraan}</td>
              <td>
                <a href={item.vaksinasi} target="_blank">
                  buka gambar
                </a>
              </td>
              {/* <td>
                <button className="btn btn-primary " onClick={() => onUpdateData(item)}>
                  Update
                </button>
                <button className="btn btn-warning" onClick={() => onDeleteData(item)}>
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
