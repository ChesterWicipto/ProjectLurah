import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import firebase from "../Firebase";
import { storage } from "../Firebase";

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
  const [button, setButton] = useState("Save");
  const [select, setSelect] = useState({});
  const [buktiktp, setKtp] = useState("");
  const [buktikk, setFotoKk] = useState("");

  const [vaksinasi, setVaksin] = useState("");

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
    setSelect({});
  };
  const submit = () => {
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
      vaksinasi: vaksinasi,
      buktikk: buktikk,
      buktiktp: buktiktp,
    };
    console.log(data);

    if (button === "Save") {
      firebase
        .database()
        .ref("users1")
        .push(data)
        .then(() => {})
        .catch(() => alert("gagal"));

      resetForm();
      onReload();
    } else {
      firebase
        .database()
        .ref(`users1/${select.id}`)
        .set(data)
        .then(() => {
          alert("berhasil, berhasil, berhasil hore");
        })
        .catch(() => alert("gagal"));
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
          alert("No data available");
        }
      })
      .catch((error) => {
        alert("gagal");
      });
  };

  useEffect(() => {
    onReload();
  }, []);

  const onUpdateData = (item) => {
    console.log(item);
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
    setVaksin(item.vaksinasi);
    setKtp(item.buktiktp);
    setFotoKk(item.buktikk);
    setButton("Update");
  };
  const onDeleteData = (item) => {
    firebase
      .database()
      .ref(`users1/${item.id}`)
      .remove()
      .then(() => {
        alert("delete berhasil");
      })
      .catch(() => alert("gagal delete"));
    onReload();
  };

  const uploadFiles = (file) => {
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (res) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setVaksin(url);
          });
      }
    );
  };

  const validasi = () => {
    let namalengkap = document.getElementById("namalengkap").value;
    let jeniskelamin = document.getElementById("jeniskelamin").value;
    let pernikahan = document.getElementById("pernikahan").value;
    let kelahiran = document.getElementById("kelahiran").value;
    let agama = document.getElementById("agama").value;
    let pendidikan = document.getElementById("pendidikan").value;
    let pekerjaan = document.getElementById("pekerjaan").value;
    let alamat = document.getElementById("alamat").value;
    let kewarganegaraan = document.getElementById("kewarganegaraan").value;
    let kk = document.getElementById("kk").value;
    let nik = document.getElementById("nik").value;
    let status = document.getElementById("status").value;
    let vaksinasi = document.getElementById("vaksinasi").value;
    let buktiktp = document.getElementById("buktiktp").value;
    let buktikk = document.getElementById("buktikk").value;

    if (
      namalengkap !== "" &&
      vaksinasi !== "" &&
      buktiktp !== "" &&
      buktikk !== "" &&
      alamat !== "" &&
      status !== "" &&
      kewarganegaraan !== "" &&
      kk !== "" &&
      nik !== "" &&
      pendidikan !== "" &&
      pekerjaan !== "" &&
      jeniskelamin !== "" &&
      pernikahan !== "" &&
      kelahiran !== "" &&
      agama !== ""
    ) {
      submit();
    } else {
      alert("anda harus mengisi data dengan lengkap");
    }
  };
  return (
    <div className="tabeldata">
      <Navbar />

      <div className="container mt-4  text-black colorTable fw-bold">
        <form>
          <form action="action_page.html" className="was-validated" method="get">
            <form action="action_page.html" className="was-validated" method="get">
              <div className="form-group">
                <label for="namalengkap">Nama Lengkap:</label>
                <input type="text" value={namalengkap} onChange={(e) => setNamaLengkap(e.target.value)} className="form-control" id="namalengkap" placeholder="Masukan Nama Lengkap" name="namalengkap" required />
              </div>
              <div className="form-group">
                <label for="jeniskelamin">Jenis Kelamin</label>
                <input type="text" value={jeniskelamin} onChange={(e) => setJeniskelamin(e.target.value)} className="form-control" id="jeniskelamin" name="jeniskelamin" required />
              </div>
              <div className="form-group">
                <label for="pernikahan">Status</label>
                <input type="text" value={pernikahan} onChange={(e) => setMarried(e.target.value)} className="form-control" id="pernikahan" name="pernikahan" required />
              </div>
              <div className="form-group">
                <label for="kelahiran">Tanggal Lahir</label>
                <input type="date" value={kelahiran} onChange={(e) => setBirthday(e.target.value)} className="form-control" id="kelahiran" name="kelahiran" required />
              </div>
              <div className="form-group">
                <label for="agama">Agama</label>
                <input type="text" value={agama} onChange={(e) => setAgama(e.target.value)} className="form-control" id="agama" name="agama" required />
              </div>
              <div className="form-group">
                <label for="pendidikan">Pendidikan Terakhir</label>
                <input type="text" value={pendidikan} onChange={(e) => setPendidikan(e.target.value)} className="form-control" id="pendidikan" name="pendidikan" required />
              </div>
              <div className="form-group">
                <label for="pekerjaan">Pekerjaan</label>
                <input type="text" value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} className="form-control" id="pekerjaan" name="pekerjaan" required />
              </div>
              <div className="form-group">
                <label for="alamat">Alamat</label>
                <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="form-control" id="alamat" name="alamat" required />
              </div>
              <div className="form-group">
                <label for="kewarganegaraan">Kewarganegaraan</label>
                <input type="text" value={kewarganegaraan} onChange={(e) => setKewarganegaraan(e.target.value)} className="form-control" id="kewarganegaraan" name="kewarganegaraan" required />
              </div>
              <div className="form-group">
                <label for="kk">Nomor Kartu Keluarga</label>
                <input type="text" value={kk} onChange={(e) => setKk(e.target.value)} className="form-control" id="kk" name="kk" required />
              </div>{" "}
              <div className="form-group">
                <label for="nik">NIK</label>
                <input type="text" value={nik} onChange={(e) => setNik(e.target.value)} className="form-control" id="nik" name="nik" required />
              </div>
              <div className="form-group">
                <label for="status">Status dalam Keluarga</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control" id="status" name="status" required />
              </div>
              <div>
                <label htmlFor="vaksinasi">Vaksinasi (Vaksinasi)</label>
                <br />
                <input className="form-control" type="file" id="vaksinasi" onChange={(e) => uploadFiles(e.target.files[0])} />
              </div>
              <div>
                <label htmlFor="buktiktp">Foto KTP</label>
                <br />
                <input className="form-control" type="file" id="buktiktp" onChange={(e) => uploadFiles(e.target.files[0])} />
              </div>
              <div>
                <label htmlFor="buktikk">Foto KK</label>
                <br />
                <input className="form-control" type="file" id="buktikk" onChange={(e) => uploadFiles(e.target.files[0])} />
              </div>
              <br />
              <button type="submit" className="btn btn-primary" onClick={validasi}>
                Save
              </button>
            </form>
          </form>
        </form>
      </div>
      <br></br>
      <br />
      <table className="container table colorTable table-striped table-responsive">
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
              <td>
                <button className="btn btn-primary " onClick={() => onUpdateData(item)}>
                  Update
                </button>
                <button className="btn btn-warning" onClick={() => onDeleteData(item)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
