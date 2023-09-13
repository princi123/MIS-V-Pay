import React, { useState } from "react";
import "./Table-CSS/RedemptionTable.css";
import SubRedemptionTable from "./SubTable/SubRedemptionTable";
import Loader from './Loader';

const RedemptionTable = ({ transaction_summary_report, startDate, endDate, select_type, assetClass, formatNumberToIndianFormat }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = (index) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
        <table className="mt-3 table small border" id="table2">
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
                      disabled={isLoading}
                    >
                      <b className="sharp-font">{summary.ZONE}</b>
                    </button>
                    {isLoading && <Loader />}
                  </td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.REQUITY))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.RHYBRID))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.RARBITRAGE))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.RPASSIVE))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.RFIXED_INCOME))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(summary.RCASH))}</td>
                  <td className="text-end" id="total">
                    {formatNumberToIndianFormat(parseFloat(summary.RTOTAL))}
                  </td>
                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                    <td colSpan="8" className="p-0">
                      <SubRedemptionTable
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
      </div>
    </div>
  );
};

export default RedemptionTable;
