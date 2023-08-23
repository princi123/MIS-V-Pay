import React, { useState } from "react";
import "./SalesTable.css";
import RedemptionTable from "./RedemptionTable";
import NetSalesTable from "./NetSalesTable";
import SubSalesTable from "./SubTable/SubSalesTable";
import Api from "../Retail/Api";

const SalesTable = ({ transaction_summary_report }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1); 
    } else {
      setClickedIndex(index); 
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex">
          <div>
            <div>
              <div className="row mt-4 mr-4 ">
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
                <div className="col-md-3" />
                <div className="col-md-12">
                  <table className="table small border">
                    <thead>
                    <tr className="bgcolorBlue text-white">
                      <th scope="col">ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /><img src="/mis_vpay/assets/images/table2icon.png" alt="" /></th>
                      <th scope="col" className="text-end">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                      <th scope="col" className="text-end">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                      <th scope="col" className="text-end">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                      <th scope="col" className="text-end">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                      <th scope="col" className="text-end">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
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
                            <td className="text-end">{summary.SEQUITY}</td>
                            <td className="text-end">{summary.SHYBRID}</td>
                            <td className="text-end">{summary.SARBITRAGE}</td>
                            <td className="text-end">{summary.SPASSIVE}</td>
                            <td className="text-end">
                              {summary.SFIXED_INCOME}
                            </td>
                            <td className="text-end">{summary.SCASH}</td>
                            <td className="text-end color-biege">{summary.STOTAL}</td>
                          </tr>
                          {clickedIndex === index && (
                            <tr key={`subtable-${index}`}>
                              <td colSpan="8">
                                <SubSalesTable  />
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <RedemptionTable transaction_summary_report={transaction_summary_report} />
                  <NetSalesTable transaction_summary_report={transaction_summary_report} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesTable;
