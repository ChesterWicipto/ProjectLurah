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
  // const [vaksinasi, setVaksin] = useState("");
  const [vaksinasi, setVaksin] = useState("");
  const onSubmit = (dat) => console.log(dat);

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
    };
    console.log(data);
    // uploadFiles(vaksinasi);

    if (button === "Save") {
      firebase
        .database()
        .ref("users")
        .push(data)
        .then(() => {})
        .catch(() => alert("gagal"));

      resetForm();
      onReload();
      // uploadFiles();
    } else {
      firebase
        .database()
        .ref(`users/${select.id}`)
        .set(data)
        .then(() => {
          alert("berhasil, berhasil, berhasil hore");
        })
        .catch(() => alert("gagal"));
      resetForm();
      onReload();
      // uploadFiles();
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

  // const onChangeHandlerVaksinasi = (e) => {
  //   const reader = new FileReader();
  //   reader.onloadend = function () {
  //     setVaksin(reader.result);
  //   };
  //   reader.readAsDataURL(e);

  //   // var file = e.target.files[0];
  //   // if (!file) {
  //   //   return;
  //   // }
  //   // var reader = new FileReader();
  //   // reader.onload = function (e) {
  //   //   var contents = e.target.resu lt;
  //   // };
  //   // reader.readAsText(file);
  //   // console.log(e.target.files[0]);
  //   // // }
  // };

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
    setButton("Update");
  };
  const onDeleteData = (item) => {
    firebase
      .database()
      .ref(`users/${item.id}`)
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

    if (
      namalengkap != "" &&
      vaksinasi != "" &&
      alamat != "" &&
      status != "" &&
      kewarganegaraan != "" &&
      kk != "" &&
      nik != "" &&
      pendidikan != "" &&
      pekerjaan != "" &&
      jeniskelamin != "" &&
      pernikahan != "" &&
      kelahiran != "" &&
      agama != ""
    ) {
      submit();
    } else {
      alert("anda harus mengisi data dengan lengkap");
    }
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />

      <div className="container mt-4  text-black colorTable fw-bold">
        <form>
          <form action="action_page.html" className="was-validated" method="get">
            {/* <div className="mb-1">
              <label className="form-label">Nama Lengkap</label>
              <input required type="text" className="form-control" value={namalengkap} id="namebox" onChange={(e) => setNamaLengkap(e.target.value)} />
              <div className="form-text">Nama sesuai dengan identitas KTP</div>
            </div>
            <label className="form-label">Jenis kelamin</label>
            <br />
            <input className="form-control" value={jeniskelamin} onChange={(e) => setJeniskelamin(e.target.value)} type="text" id="genbox" required />
            <div className="form-text">Pria/Wanita</div>
            <div>
              <label className="form-label">Status Pernikahan</label>
              <input type="text" className="form-control" value={pernikahan} id="mariedbox" onChange={(e) => setMarried(e.target.value)} />
            </div>
            <div className="form-text">Kawin / Belum Kawin</div>
            <div className="mb-1">
              <label className="form-label">Tempat,Tanggal Lahir</label>
              <input type="text" className="form-control" value={kelahiran} id="birthdaybox" onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">Pendidikan</label>
              <input type="text" className="form-control" value={pendidikan} id="studybox" onChange={(e) => setPendidikan(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">Agama</label>
              <input type="text" className="form-control" value={agama} id="religionbox" onChange={(e) => setAgama(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">Pekerjaan</label>
              <input type="text" className="form-control" value={pekerjaan} id="workbox" onChange={(e) => setPekerjaan(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">Kewarga Negaraan</label>
              <input type="text" className="form-control" value={kewarganegaraan} id="nationalbox" onChange={(e) => setKewarganegaraan(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">Alamat</label>
              <input type="text" className="form-control" value={alamat} id="frombox" onChange={(e) => setAlamat(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">Status dalam keluarga</label>
              <input type="text" className="form-control" value={status} id="statusbox" onChange={(e) => setStatus(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">NIK</label>
              <input type="text" className="form-control" value={nik} id="nikbox" onChange={(e) => setNik(e.target.value)} />
            </div>
            <div className="mb-1">
              <label className="form-label">NO KK</label>
              <input type="text" className="form-control" value={kk} id="kkbox" onChange={(e) => setKk(e.target.value)} />
            </div>
            
            <button type="button" className="btn btn-primary" onClick={submit}>
              {button}
            </button> */}
            <form action="action_page.html" className="was-validated" method="get">
              <div className="form-group">
                <label for="namalengkap">Nama Lengkap:</label>
                <input type="text" value={namalengkap} onChange={(e) => setNamaLengkap(e.target.value)} className="form-control" id="namalengkap" placeholder="Masukan Nama Lengkap" name="namalengkap" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="jeniskelamin">Jenis Kelamin</label>
                <input type="text" value={jeniskelamin} onChange={(e) => setJeniskelamin(e.target.value)} className="form-control" id="jeniskelamin" name="jeniskelamin" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="pernikahan">Status</label>
                <input type="text" value={pernikahan} onChange={(e) => setMarried(e.target.value)} className="form-control" id="pernikahan" name="pernikahan" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="kelahiran">Tanggal Lahir</label>
                <input type="date" value={kelahiran} onChange={(e) => setBirthday(e.target.value)} className="form-control" id="kelahiran" name="kelahiran" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="agama">Agama</label>
                <input type="text" value={agama} onChange={(e) => setAgama(e.target.value)} className="form-control" id="agama" name="agama" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="pendidikan">Pendidikan Terakhir</label>
                <input type="text" value={pendidikan} onChange={(e) => setPendidikan(e.target.value)} className="form-control" id="pendidikan" name="pendidikan" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="pekerjaan">Pekerjaan</label>
                <input type="text" value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} className="form-control" id="pekerjaan" name="pekerjaan" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="alamat">Alamat</label>
                <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="form-control" id="alamat" name="alamat" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="kewarganegaraan">Kewarganegaraan</label>
                <input type="text" value={kewarganegaraan} onChange={(e) => setKewarganegaraan(e.target.value)} className="form-control" id="kewarganegaraan" name="kewarganegaraan" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="kk">Nomor Kartu Keluarga</label>
                <input type="text" value={kk} onChange={(e) => setKk(e.target.value)} className="form-control" id="kk" name="kk" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>{" "}
              <div className="form-group">
                <label for="nik">NIK</label>
                <input type="text" value={nik} onChange={(e) => setNik(e.target.value)} className="form-control" id="nik" name="nik" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              <div className="form-group">
                <label for="status">Status dalam Keluarga</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control" id="status" name="status" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div>
              {/* <div className="form-group">
                <label Htmlfor="vaksinasi">Bukti Vaksinasi</label>
                <input type="file" value={vaksinasi} onChange={(e) => uploadFiles(e.target.files[0])} className="form-control" id="vaksinasi" name="vaksinasi" required />
                <div className="valid-feedback">data Valid</div>
                <div className="invalid-feedback">maaf, ini tidak boleh kosong !</div>
              </div> */}
              <div>
                <label htmlFor="vaksinasi">Vaksinasi (Vaksinasi)</label>
                <br />
                <input className="form-control" type="file" id="vaksinasi" onChange={(e) => uploadFiles(e.target.files[0])} />
              </div>
              <br />
              <button type="submit" className="btn btn-primary" onClick={validasi}>
                Save
              </button>
            </form>
          </form>
        </form>

        {/* <div className="form-group">
            <label htmlFor="image" className="form-label">
              Picture
            </label>
            <input className="form-control" type="file" id="image" required />
          </div> */}
        <br />
        {/* <div className="mb-1">
            <label className="form-label">Vaksinasi</label>
            <div className="input-group mb-3">
              <input type="file" className="form-control" value={vaksinasi} id="vaksinbox" onChange={(e) => setVaksin(e.target.value)} />
              <label className="input-group-text" for="vaksinbox">
                Upload
              </label>
            </div>
          </div>
          <br /> */}
      </div>
      <br></br>
      <br />
      <table className="container table colorTable table-striped table-responsive">
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
            <th scope="col">Edit</th>
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
                  Buka Gambar
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
