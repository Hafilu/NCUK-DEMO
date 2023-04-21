import React from "react";

function Card(props) {
  const { data } = props;
  return (
    <div className="container-fluid" style={{ marginTop: "13px" }}>
      <div className="card shadow">
        <div className="row no-gutters">
          <div className="col-xl-auto border-right sub-card">
            <h5>{data.title}</h5>
          </div>
          <div className="col-xl-auto">
            <div className="row">
              <div className="col">
                <h6>Curriculum Name</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{data.curriculamName}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="row">
              <div className="col">
                <h6>Combo</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{data.combo}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="row">
              <div className="col">
                <h6>Stream Name</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{data.streamName}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="row">
              <div className="col">
                <h6>Intake Name</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{data.intakeName}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="row">
              <div className="col">
                <h6>Result Released?</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{data.resultReleased}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="row">
              <div className="col">
                <h6>Release Date</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{data.releaseDate}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="row">
              <div className="col">
                <h6>Student Count</h6>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ textDecoration: "underline" }}>
                <p>{data.studentCount}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="row">
              <div className="col">
                <h6>Action</h6>
              </div>
            </div>
            <div className="row">
              <div className="col action">
                <i
                  className="fa-solid fa-trash"
                  style={{ color: "#d50707" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
