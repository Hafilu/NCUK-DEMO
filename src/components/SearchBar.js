import React from "react";

function Searchbar() {
  return (
    <div className="container-fluid d-flex">
      <div className="square">
        <i className="fa-solid fa-filter" style={{ color: "#1c222b" }}></i>
      </div>
      <div className="input-group input">
        <input
          type="text"
          className="form-control shadow-none bg-secondary-subtle text-emphasis-secondary"
          placeholder="Search Users by Name, Universities, Email or Date"
        />
        <span
          className="input-group-text bg-danger text-white"
          id="basic-addon1"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <div className="dropdown" style={{ marginLeft: "220px" }}>
        <button
          className="btn btn-outline-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Display
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
