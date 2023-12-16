import React from "react";

const DaftarKosong = ({ type }) => {
  return (
    <div className="col-lg-12 w-100 d-flex flex-column justify-content-center align-items-center">
      <img src="images/undraw_selection_re_ycpo 1.png" alt="empty-list" />
      <p className="mt-5 text-empty">
        Belum ada produkmu yang {type} nih, sabar ya rejeki nggak kemana kok
      </p>
    </div>
  );
};

export default DaftarKosong;
