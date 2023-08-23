import React, { useEffect, useState } from "react";
import "./SubSalesTable.css";
import TableRowWithCollapse from "./TableRowWithCollapse";
import RegionApi from "./RegionApi";

const SubSalesTable = ({ pzone, startDate, endDate, select_type, assetClass }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const formattedStartDate = startDate.split("-").reverse().join("/");
  const formattedEndDate = endDate.split("-").reverse().join("/");
  const queryParams = new URLSearchParams({
    start_date: formattedStartDate,
    end_date: formattedEndDate,
    asset_class: assetClass,
    select_type: select_type,
    employee_code: 2941,
    p_zone: pzone,
  });

  const transaction_summary_report_region = RegionApi(queryParams);
 
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
              REGION <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              <img src="/mis_vpay/assets/images/table2icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Equity{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Hybrid{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Arbitrage{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Passive(ex-Debt){" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Fixed Income{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>

            <th scope="col" className="text-end">
              Total{" "}
              <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {transaction_summary_report_region.map((summary, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <button
                    className="textlink"
                    onClick={() => handleButtonClick(index)}
                  >
                    <b>{summary.REGION}</b>
                  </button>
                </td>
                <td className="text-end">{summary.SEQUITY}</td>
                <td className="text-end">{summary.SHYBRID}</td>
                <td className="text-end">{summary.SARBITRAGE}</td>
                <td className="text-end">{summary.SPASSIVE}</td>
                <td className="text-end">{summary.SFIXED_INCOME}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubSalesTable;
