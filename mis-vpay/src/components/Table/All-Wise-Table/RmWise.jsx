import React, { useState } from "react";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import ExportToPDF from "../../Retail/AUM/ExportToPDF";
import excel from "../../Assets/images/excel_icon.png";

const RmWise = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const data = [
    {
      ufcCode: "UFC1",
      ufcName: "UFC One",
      rmCode: "RM101",
      rmName: "RM One",
      funcRole: "Role 1",
      equity: 100000,
      hybrid: 75000,
      arbitrage: 25000,
      passive: 50000,
      fixedIncome: 80000,
      cash: 30000,
      total: 285000,
    },
    {
      ufcCode: "UFC2",
      ufcName: "UFC Two",
      rmCode: "RM102",
      rmName: "RM Two",
      funcRole: "Role 2",
      equity: 90000,
      hybrid: 70000,
      arbitrage: 22000,
      passive: 48000,
      fixedIncome: 75000,
      cash: 28000,
      total: 263000,
    },
    // Add more data as needed
  ];

  return (
    <div className="new-component container-fluid">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
        >
          <div className="bg-white card m-4" style={{ borderRadius: "10px" }}>
            <div className="col-md-12">
              <div className="row mt-2 bg-white">
                <div className="head">
                  <h4>
                    <b className="black-color">All India RM Wise</b>
                  </h4>
                  <h5>
                    <b className="gray-color">(In Lakhs)</b>
                  </h5>
                </div>
                <div className="col-md-12 d-flex justify-content-end m-0" style={{ marginTop: "30px" }}>
                      <p className="icon">
                        <button className="border-0">
                          <img src={excel} alt="excelicon" />
                        </button>
                        |
                        <ExportToPDF/>
                      </p>
                  </div>
              </div>
              <table className="mt-3 table nested-table">
                <thead
                  style={{
                    backgroundColor: "rgb(58 94 147 / 98%)",
                    color: "white",
                  }}
                >
                  <tr>
                    <th scope="col">UFC Code</th>
                    <th scope="col">UFC NAME</th>
                    <th scope="col">RM CODE</th>
                    <th scope="col">RM NAME</th>
                    <th scope="col">FUNCROLE</th>
                    <th scope="col" className="text-end">
                      Equity
                    </th>
                    <th scope="col" className="text-end">
                      Hybrid
                    </th>
                    <th scope="col" className="text-end">
                      Arbitrage
                    </th>
                    <th scope="col" className="text-end">
                      Passive(ex-Debt)
                    </th>
                    <th scope="col" className="text-end">
                      Fixed Income
                    </th>
                    <th scope="col" className="text-end">
                      Cash
                    </th>
                    <th scope="col" className="text-end">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.ufcCode}</td>
                      <td>{item.ufcName}</td>
                      <td>{item.rmCode}</td>
                      <td>{item.rmName}</td>
                      <td>{item.funcRole}</td>
                      <td className="text-end">{item.equity}</td>
                      <td className="text-end">{item.hybrid}</td>
                      <td className="text-end">{item.arbitrage}</td>
                      <td className="text-end">{item.passive}</td>
                      <td className="text-end">{item.fixedIncome}</td>
                      <td className="text-end">{item.cash}</td>
                      <td className="text-end">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RmWise;
