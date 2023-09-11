import React, { useState } from "react";
import "./AumReport.css";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar"

const AumReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const data = [
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC001",
      UFC: "UFC One",
      RMCode: "RM001",
      RMName: "John Doe",
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
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
    {
      Zone: "EAST",
      Region: "NORTH EAST",
      UFCCode: "UFC002",
      UFC: "UFC Two",
      RMCode: "RM002",
      RMName: "Jane hvf mh",
      TotalAUM: 800000,
      AUM: {
        Equity: 300000,
        Hybrid: 150000,
        Arbitrage: 80000,
        Passive: 120000,
        "Fixed Income": 100000,
        Cash: 50000,
      },
    },
  ];

  return (
    <>
      <div className="container-fluid p-0 home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}>
            <div className="card mt-4 m-3" style={{ borderRadius: "10px" }}>
              <div className="headline pt-4">
                <h4>
                  <b>Retail UFCWise AUM Report</b>
                </h4>
              </div>
              <div className="col-md-12 d-flex mt-3 justify-content-end p-2">
                <div className="d-flex">
                  <button className="btn btn-info">Export</button>
                </div>
              </div>
              <div className="container-fluid ">
                <div className=" mt-3" style={{ paddingLeft: "10px" }}>
                  <div
                    className=" d-flex"
                    style={{ paddingLeft: "10px", paddingBottom: "10px" }}
                  >
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
                <table className="table table-bordered p-1">
                  <thead className="Bgcolor">
                    <tr className="mid ">
                      <th rowSpan="2">Zone</th>
                      <th rowSpan="2">Region</th>
                      <th rowSpan="2">UFC Code</th>
                      <th rowSpan="2">UFC</th>
                      <th rowSpan="2">RM Code</th>
                      <th rowSpan="2">RM Name</th>
                      <th rowSpan="2">Total AUM</th>
                      <th colSpan="6">AUM</th>
                    </tr>
                    <tr>
                      <th className="forright">Equity</th>
                      <th className="forright">Hybrid</th>
                      <th className="forright">Arbitrage</th>
                      <th className="forright">Passive(ex-Debt)</th>
                      <th className="forright">Fixed Income</th>
                      <th className="forright">Cash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.SrNo}>
                        <td className="forleft">{item.Zone}</td>
                        <td className="forleft">{item.Region}</td>
                        <td className="forleft">{item.UFCCode}</td>
                        <td className="forleft">{item.UFC}</td>
                        <td className="forleft">{item.RMCode}</td>
                        <td className="forleft">{item.RMName}</td>
                        <td className="forright">{item.TotalAUM}</td>
                        <td className="forright">{item.AUM.Equity}</td>
                        <td className="forright">{item.AUM.Hybrid}</td>
                        <td className="forright">{item.AUM.Arbitrage}</td>
                        <td className="forright">{item.AUM.Passive}</td>
                        <td className="forright">{item.AUM["Fixed Income"]}</td>
                        <td className="forright">{item.AUM.Cash}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AumReport;
