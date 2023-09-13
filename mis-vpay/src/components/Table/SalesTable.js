import React, { useState } from "react";
import "./Table-CSS/SalesTable.css";
import RedemptionTable from "./RedemptionTable";
import NetSalesTable from "./NetSalesTable";
import SubSalesTable from "./SubTable/SubSalesTable";

const SalesTable = ({ transaction_summary_report, startDate, endDate, select_type, assetClass, formatNumberToIndianFormat }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [sortOrder, setSortOrder] = useState({ column: null, order: 'asc' });

  const handleHeaderClick = (column) => {
    const order = sortOrder.column === column && sortOrder.order === 'asc' ? 'desc' : 'asc';
    setSortOrder({ column, order });
  };

  const sortedData = [...transaction_summary_report].sort((a, b) => {
    const columnA = a[sortOrder.column] || "";
    const columnB = b[sortOrder.column] || "";
    if (sortOrder.order === 'asc') {
      if (sortOrder.column === 'ZONE') {
        return columnA.localeCompare(columnB);
      } else if (sortOrder.column === 'SEQUITY' || sortOrder.column === 'SHYBRID' ||
                 sortOrder.column === 'SARBITRAGE' || sortOrder.column === 'SPASSIVE' ||
                 sortOrder.column === 'SFIXED_INCOME' || sortOrder.column === 'SCASH') {
        return parseFloat(columnA) - parseFloat(columnB);
      }
    } else if (sortOrder.order === 'desc') {
      if (sortOrder.column === 'ZONE') {
        return columnB.localeCompare(columnA);
      } else if (sortOrder.column === 'SEQUITY' || sortOrder.column === 'SHYBRID' ||
                 sortOrder.column === 'SARBITRAGE' || sortOrder.column === 'SPASSIVE' ||
                 sortOrder.column === 'SFIXED_INCOME' || sortOrder.column === 'SCASH') {
        return parseFloat(columnB) - parseFloat(columnA);
      }
    }
  });

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
                        <th scope="col" onClick={() => handleHeaderClick('ZONE')}>ZONE</th>
                        <th scope="col" className="text-end" onClick={() => handleHeaderClick('SEQUITY')}>Equity</th>
                        <th scope="col" className="text-end" onClick={() => handleHeaderClick('SHYBRID')}>Hybrid</th>
                        <th scope="col" className="text-end" onClick={() => handleHeaderClick('SARBITRAGE')}>Arbitrage</th>
                        <th scope="col" className="text-end" onClick={() => handleHeaderClick('SPASSIVE')}>Passive(ex-Debt)</th>
                        <th scope="col" className="text-end" onClick={() => handleHeaderClick('SFIXED_INCOME')}>Fixed Income</th>
                        <th scope="col" className="text-end" onClick={() => handleHeaderClick('SCASH')}> Cash{" "}</th>
                        <th scope="col" className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody >
                      {sortedData.map((summary, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td>
                              <button
                                className="textlink"
                                onClick={() => handleButtonClick(index)}
                              >
                                <b className="sharp-font">{summary.ZONE}</b>
                              </button>
                            </td>
                            <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.SEQUITY))}</td>
                            <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.SHYBRID))}</td>
                            <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.SARBITRAGE))}</td>
                            <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.SPASSIVE))}</td>
                            <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.SFIXED_INCOME))}</td>
                            <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.SCASH))}</td>
                            <td className="text-end color-biege" id="total">
                              {formatNumberToIndianFormat(parseFloat(summary.STOTAL))}
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
                                  formatNumberToIndianFormat={formatNumberToIndianFormat}
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
                    formatNumberToIndianFormat={formatNumberToIndianFormat}
                  />
                  <NetSalesTable
                    transaction_summary_report={transaction_summary_report}
                    startDate={startDate}
                    endDate={endDate}
                    assetClass={assetClass}
                    select_type={select_type}
                    formatNumberToIndianFormat={formatNumberToIndianFormat}
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

