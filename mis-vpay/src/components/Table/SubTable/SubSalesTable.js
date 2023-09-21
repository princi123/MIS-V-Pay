import React, { useState, useMemo } from "react";
import "./SubTable-CSS/SubSalesTable.css";
import RegionApi from "./Api/RegionApi";
import TableRowWithCollapse from "./UFC/TableRowWithCollapse";
import Loader from "../Loader";

const SubSalesTable = ({
  pzone,
  startDate,
  endDate,
  select_type,
  assetClass,
  formatNumberToIndianFormat,
}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const queryParams = useMemo(() => {
    const formattedStartDate = startDate.split("-").reverse().join("/");
    const formattedEndDate = endDate.split("-").reverse().join("/");
    return new URLSearchParams({
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      asset_class: assetClass,
      select_type: select_type,
      employee_code: 2941,
      p_zone: pzone,
    });
  }, [startDate, endDate, assetClass, select_type, pzone]);
  const transaction_summary_report_region = RegionApi(queryParams);
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

  let totalEquity = 0;
  let totalHybrid = 0;
  let totalArbitrage = 0;
  let totalPassive = 0;
  let totalFixedIncome = 0;
  let totalCash = 0;
  let grandTotal = 0;

  return (
    <div className="new-component container-fluid p-0">
      <div className="row mt-2 ">
        <div className="head">
          <h4>
            <b className="black-color"> {pzone} Data</b>
          </h4>
          <h5>
            <b className="gray-color">(In Lakhs)</b>
          </h5>
        </div>
      </div>
      <table
        className="mt-3 table nested-table"
        style={{
          backgroundColor: "white",
          border: "2px solid",
          borderColor: "#EE8B3A",
          borderBottomColor: "white",
        }}
      >
        <thead>
          <tr className="colorwhite BgcolorOrange">
            <th scope="col">REGION</th>
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
            <th scope="col" className="text-end">
              Total
            </th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#DADADA" }}>
          {transaction_summary_report_region.map((summary, index) => {
            totalEquity += parseFloat(summary.SEQUITY);
            totalHybrid += parseFloat(summary.SHYBRID);
            totalArbitrage += parseFloat(summary.SARBITRAGE);
            totalPassive += parseFloat(summary.SPASSIVE);
            totalFixedIncome += parseFloat(summary.SFIXED_INCOME);
            totalCash += parseFloat(summary.SCASH);
            grandTotal += parseFloat(summary.STOTAL);
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <button
                      className="textlink"
                      onClick={() => handleButtonClick(index)}
                      disabled={isLoading}
                    >
                      <b className="sharp-font">{summary.REGION_NAME}</b>
                    </button>
                    {isLoading && (
                      <div className="text-center mt-4">
                        <i className="fas fa-spinner fa-spin fa-2x loder"></i>{" "}
                        <Loader className="loder" />
                      </div>
                    )}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SEQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(
                      parseFloat(summary.SFIXED_INCOME)
                    )}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SCASH))}
                  </td>
                  <td className="text-end color-biege" id="total">
                    {formatNumberToIndianFormat(parseFloat(summary.STOTAL))}
                  </td>
                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                    <td colSpan="8" className="p-0">
                      {clickedIndex === index && (
                        <TableRowWithCollapse
                          region_name={summary.REGION_NAME}
                          startDate={startDate}
                          endDate={endDate}
                          assetClass={assetClass}
                          select_type={select_type}
                          pzone={pzone}
                          formatNumberToIndianFormat={
                            formatNumberToIndianFormat
                          }
                        />
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
          <tr className="colorwhite BgcolorOrange">
            <td>TOTAL</td>
            <td className="text-end">
              {formatNumberToIndianFormat(parseFloat(totalEquity.toFixed(2)))}
            </td>
            <td className="text-end">
              {formatNumberToIndianFormat(parseFloat(totalHybrid.toFixed(2)))}
            </td>
            <td className="text-end">
              {formatNumberToIndianFormat(
                parseFloat(totalArbitrage.toFixed(2))
              )}
            </td>
            <td className="text-end">
              {formatNumberToIndianFormat(parseFloat(totalPassive.toFixed(2)))}
            </td>
            <td className="text-end">
              {formatNumberToIndianFormat(
                parseFloat(totalFixedIncome.toFixed(2))
              )}
            </td>
            <td className="text-end">
              {formatNumberToIndianFormat(parseFloat(totalCash.toFixed(2)))}
            </td>
            <td className="text-end">
              {formatNumberToIndianFormat(parseFloat(grandTotal.toFixed(2)))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubSalesTable;
