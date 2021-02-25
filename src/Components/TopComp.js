import React from "react";
import DataTable from "./DataTable";
import CheckImg from "./imgs/check.png";
import CardImg from "./imgs/cart.png";

const TopComp = ({ DataTables, setDataTables }) => {
  return (
    <div>
      <div className="cards">
        <div className="card filerCard">
          <p>Filter By:</p>
          <div className="btns">
            <button>1D</button>
            <button className="active">1M</button>
            <button>1Y</button>
          </div>
        </div>

        <div className="card cardImg">
          <div className=" number numberChecks">
            <p>Total Checkouts</p>

            <h1>
              72
              <span style={{ fontSize: "14px", fontWeight: "400" }}> / 82</span>
            </h1>
          </div>

          <img src={CheckImg} width="auto" height="40px" alt="check" />
        </div>

        <div className="card cardImg">
          <div className="number numberFailure">
            <p>Total Failure</p>

            <h1>
              10
              <span style={{ fontSize: "14px", fontWeight: "400" }}> / 82</span>
            </h1>
          </div>

          <img src={CardImg} width="auto" height="40px" alt="check" />
        </div>
      </div>

      <DataTable DataTables={DataTables} setDataTables={setDataTables} />
    </div>
  );
};

export default TopComp;
