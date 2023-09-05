import React, { useState } from "react";
import "./RetailZhReport.css";
import { Link } from "react-router-dom";
import SideBar from "../../Shared/SideBar/SideBar";
import Navbar from "../../Shared/Navbar";
const data = [
  {
    SrNo: 1,
    Zone: "EAST",
    Region: "B&ND KOLKATA",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
  {
    SrNo: 1,
    Zone: "EAST",
    Region: "BIHAR",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
  {
    SrNo: 1,
    Zone: "EAST",
    Region: "KOLK",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
  {
    SrNo: 1,
    Zone: "EAST",
    Region: "NORT EAST",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
  {
    SrNo: 1,
    Zone: "EAST",
    Region: "ORISSA & JHARKHAND",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
  {
    SrNo: 1,
    Zone: "EAST",
    Region: "WEST BENGAL",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
];

const RetailZhReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div className="container-fluid p-0 home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >
            <div className="card p-2 m-4">
              <h5 className="headline p-2">
                <b>RETAIL ZH/RH/RM REGION REPORT </b>
              </h5>
              <div className="col-md-12 col-md-12 d-flex justify-content-end">
                <button className="btn bg-info export">Export</button>
              </div>
              <br />
              <div style={{ paddingLeft: "10px" }}>
                <div className=" d-flex" style={{ paddingLeft: "10px" }}>
                  <div className="col-md-3 d-flex">
                    <h4>
                      <b>SALES</b>
                    </h4>
                    <h5>
                      <b className="gray-color">(In Lakhs)</b>
                    </h5>
                  </div>
                  <div className="col-md-2 list-group">
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
                  </div>
                </div>
              </div>
              <table className="table table-bordered ">
                <thead className="bgcolorBlue text-white mainhead">
                  <tr className="mid ">
                    <th rowSpan="4" className="headtable">
                      Zone
                    </th>
                    <th rowSpan="2" className="headtable">
                      Region
                    </th>
                    <th rowSpan="2" className="headtable">
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
                  {data.map((item) => (
                    <>
                      <tr key={item.SrNo}>
                        <td>{item.Zone}</td>
                        <td>
                          <Link to="/Aumreport">{item.Region}</Link>
                        </td>
                        <td className="forright">{item.TotalAUM}</td>
                        <td className="forright">{item.AUM.Equity}</td>
                        <td className="forright">{item.AUM.Hybrid}</td>
                        <td className="forright">{item.AUM.Arbitrage}</td>
                        <td className="forright">{item.AUM.Passive}</td>
                        <td className="forright">{item.AUM["Fixed Income"]}</td>
                        <td className="forright">{item.AUM.Cash}</td>
                      </tr>
                    </>
                  ))}
                  <tr className="total">
                    <td className="forright">Total</td>
                    <td></td>
                    <td className="forright">200</td>
                    <td className="forright">200</td>
                    <td className="forright">200</td>
                    <td className="forright">2000</td>
                    <td className="forright">2000</td>
                    <td className="forright">200000</td>
                    <td className="forright">2000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RetailZhReport;
