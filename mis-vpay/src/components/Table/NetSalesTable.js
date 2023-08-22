import React, { useState } from "react";
import SubNetSalesTable from "./SubTable/SubNetSalesTable";

const NetSalesTable = ({ transaction_summary_report }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1); 
    } else {
      setClickedIndex(index); 
    }
  };

  return (
    <div className="new-component">
      <div className="head">
        <h4><b>NET SALES</b></h4>
        <h5><b className="gray-color">(In Lakhs)</b></h5>
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
                    <td className="text-end">{summary.NEQUITY}</td>
                    <td className="text-end">{summary.NHYBRID}</td>
                    <td className="text-end">{summary.NARBITRAGE}</td>
                    <td className="text-end">{summary.NPASSIVE}</td>
                    <td className="text-end">{summary.NFIXED_INCOME}</td>
                    <td className="text-end">{summary.NCASH}</td>
                    <td className="text-end">{summary.NTOTAL}</td>
                  </tr>
                  {clickedIndex === index && (
                    <tr key={`subtable-${index}`}>
                      <td colSpan="8">
                        <SubNetSalesTable />
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

export default NetSalesTable;
