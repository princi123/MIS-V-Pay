import React, { useState } from "react";
import "./SalesTable.css";
import RedemptionTable from "./RedemptionTable";
import NetSalesTable from "./NetSalesTable";
import SubSalesTable from "./SubTable/SubSalesTable";

const SalesTable = ({ transaction_summary_report,startDate, endDate, select_type, assetClass }) => {
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
                        <th scope="col">ZONE</th>
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
                          Cash{" "}
                        </th>
                        <th scope="col" className="text-end">Total</th>
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
                            <td className="text-end color-biege" id="total">
                              {summary.STOTAL}
                            </td>
                          </tr>
                          {clickedIndex === index && (
                            <tr key={`subtable-${index}`}>
                              <td colSpan="8" className="p-0">
                                <SubSalesTable
                                  pzone={summary.ZONE}
                                  startDate={startDate}
                                  endDate={endDate}
                                  assetClass={assetClass}
                                  select_type={select_type}
                                />
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <RedemptionTable
                    transaction_summary_report={transaction_summary_report}
                    startDate={startDate}
                    endDate={endDate}
                    assetClass={assetClass}
                    select_type={select_type}
                  />
                  <NetSalesTable
                    transaction_summary_report={transaction_summary_report}
                    startDate={startDate}
                    endDate={endDate}
                    assetClass={assetClass}
                    select_type={select_type}
                  />
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
