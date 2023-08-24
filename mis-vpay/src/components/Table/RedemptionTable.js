import React, { useState } from "react";
import "./RedemptionTable.css";
import SubRedemptionTable from "./SubTable/SubRedemptionTable";

const RedemptionTable = ({ transaction_summary_report }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  
  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1); 
    } else {
      setClickedIndex(index); 
    }
  };

  return (
    <div>
      <div className="head">
        <h4>
          <b>REDEMPTION</b>
        </h4>
        <h5>
          <b className="gray-color">(In Lakhs)</b>
        </h5>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12">
        <table className="table small border">
          <thead>
          <tr className="bgcolorBlue text-white">
              <th scope="col">ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /><img src="/mis_vpay/assets/images/table2icon.png" alt="" /></th>
              <th scope="col" className="text-end">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th scope="col" className="text-end">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th scope="col" className="text-end">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
            </tr>
          </thead>
          <tbody>
            {transaction_summary_report.map((summary, index) => (
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
                  <td className="text-end">{summary.REQUITY}</td>
                  <td className="text-end">{summary.RHYBRID}</td>
                  <td className="text-end">{summary.RARBITRAGE}</td>
                  <td className="text-end">{summary.RPASSIVE}</td>
                  <td className="text-end">{summary.RFIXED_INCOME}</td>
                  <td className="text-end">{summary.RCASH}</td>
                  <td className="text-end" id="total">{summary.RTOTAL}</td>
                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                    <td colSpan="8">
                      <SubRedemptionTable />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RedemptionTable;
