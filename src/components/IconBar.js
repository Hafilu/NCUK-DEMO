import React from "react";

function IconBar() {
  return (
    <div className="container-fluid rectangle">
      <i className="fa-regular fa-square icon"></i>
      <i className="fa-regular fa-trash-can icon"></i>
      <i className="fa-solid fa-ellipsis" style={{ color: "#080b12" }}></i>
    </div>
  );
}

export default IconBar;
