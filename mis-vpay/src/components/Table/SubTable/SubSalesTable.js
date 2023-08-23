import React, { useState } from "react";
import "./SubSalesTable.css";
import TableRowWithCollapse from "./TableRowWithCollapse";

const SubSalesTable = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  
  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1);
    } else {
      setClickedIndex(index); 
    }
  };

  return (
    <div className="new-component container-fluid p-0">
      <div className="row mt-2 bg-white">
        <div className="head">
          <h4>
            <b className="black-color">Sales</b>
          </h4>

          <h5>
            <b className="gray-color">(In Lakhs)</b>
          </h5>
        </div>
      </div>

      <table className="table" style={{ backgroundColor: "white" }}>
        <thead>
          <tr className="colorwhite BgcolorOrange">
            <th scope="col">
              ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              <img src="/mis_vpay/assets/images/table2icon.png" alt="" />
            </th>

            <th scope="col">
              Equity{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col">
              Hybrid{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col">
              Arbitrage{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col">
              Passive(ex-Debt){" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col">
              Fixed Income{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col">
              Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col">
              Total{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {transaction_summary_report_region.map((summary, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <button
                    className="textlink"
                    onClick={() => handleButtonClick(index)}
                  >
                    <b>{summary.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{summary.SEQUITY}</td>
                <td className="text-end">{summary.SHYBRID}</td>
                <td className="text-end">{summary.SARBITRAGE}</td>
                <td className="text-end">{summary.SPASSIVE}</td>
                <td className="text-end">
                  {summary.SFIXED_INCOME}
                </td>
                <td className="text-end">{summary.SCASH}</td>
                <td className="text-end">{summary.STOTAL}</td>
              </tr>
              {clickedIndex === index && (
                <tr key={`subtable-${index}`}>
                <td colSpan="8">
                  {clickedIndex === index && <TableRowWithCollapse />}
                </td>
              </tr>
              )}
            </React.Fragment>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default SubSalesTable;
