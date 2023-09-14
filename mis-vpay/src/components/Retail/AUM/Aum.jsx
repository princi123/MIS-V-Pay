import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Aum.css";
import { usePeriodApi } from "../RetailApi/AUM_Api";


const Aum = () => {
  const aumPeriod = usePeriodApi();
  const formatNumberToIndianFormat = (number) => {
    if (typeof number !== "number") {
      return number;
    }
  
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  return (
    <>
     
      <div className="container-fluid ">
        <div className="card" style={{ paddingLeft: "10px" }}>
          <div
            className=" d-flex"style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
            <div className="col-md-3 d-flex">
              <h4>
                <b>SALES</b>
              </h4>
              <h5>
                <b className="gray-color">(In Lakhs)</b>
              </h5>
            </div>
            {/* <div className="col-md-2 list-group">
              <p className="theader">
                <b>All India Region Wise</b>
              </p>
            </div>
            <div className="col-md-2">
              <p className="theader">
                <b>All India UFC Wise </b>
              </p>
            </div>
            <div className="col-md-2">
              <p className="theader">
                <b>All India RM Wise </b>
              </p>
            </div> */}
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center"></div>
        <table className="table table-bordered active" id="AUM">
          <thead className="Aum-Head">
            <tr className="mid">
              <th rowSpan="4" className="headtbl" style={{ lineHeight: "4" }}>
                Zone
              </th>
              <th rowSpan="2" className="headtbl" style={{ lineHeight: "4" }}>
                Total AUM
              </th>
              <th colSpan="6">AUM</th>
            </tr>
            <tr>
              <th className="forright">Equity</th>
              <th className="forright">Hybrid</th>
              <th className="forright">Arbitrage</th>
              <th className="forright">Passive</th>
              <th className="forright">Fixed Income</th>
              <th className="forright">Cash</th>
            </tr>
          </thead>
          <tbody>
            {aumPeriod.map((item) => (
              <tr key={item.Zone}>
                <td>
                  <Link className="textlink" to="/RetailZoneReport">
                    {item.ZONE}
                  </Link>
                </td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.TOTAL_AUM))}</td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.EQUITY_AUM))}</td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.HYBRID_AUM))}</td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.ARBITRAGE_AUM))}</td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.PASSIVE_AUM))}</td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.FIXED_INCOME_AUM))}</td>
                <td className="forright">{formatNumberToIndianFormat(parseFloat(item.CASH_AUM))}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Aum;
