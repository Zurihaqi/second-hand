import React, { useEffect, useState } from "react";
import "./InputProfil.css";

export default function InputProfilPage() {
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nohp, setNohp] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const SubmitInputProfile = () => {
    console.log(nama, kota, alamat, nohp);
    setNama("");
    setKota("");
    setAlamat("");
    setNohp("");
  };

  return (
    <div className="container container-fluid input-profile mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="mx-auto d-flex">
            <input
              type="file"
              onChange={onSelectFile}
              id="input-img"
              style={{ display: "none" }}
            />
            <label
              htmlFor="input-img"
              className="btn input-profile-img-btn mx-auto"
            >
              {selectedFile ? (
                <img
                  src={preview}
                  className="input-profile-img"
                  alt="gambar profil"
                />
              ) : (
                <img
                  src="images/pilih-gambar.png"
                  alt="pilih gambar"
                  className="input-profile-img"
                />
              )}
            </label>
          </div>
          <div className="input-profile-field">
            <p className="label-field">Nama*</p>
            <input
              type="text"
              placeholder="Nama"
              required
              autoComplete="off"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="input-profile-field">
            <p className="label-field">Kota*</p>
            <input
              type="text"
              placeholder="Malang"
              required
              autoComplete="off"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
            />
          </div>
          <div className="input-profile-field">
            <p className="label-field">Alamat*</p>
            <textarea
              type="text"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              required
              autoComplete="off"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="input-profile-field">
            <p className="label-field">No Handphone*</p>
            <input
              type="text"
              placeholder="contoh: +6281987654321"
              required
              autoComplete="off"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="input-profile-btn"
            onClick={SubmitInputProfile}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
