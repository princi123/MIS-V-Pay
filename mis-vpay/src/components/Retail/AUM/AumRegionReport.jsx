import React, { useMemo, useState } from "react";
import "./AumRegionReport.css";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../Shared/SideBar/SideBar";
import Navbar from "../../Shared/Navbar";
import { useAUMApi } from "../RetailApi/AUM_Api";
import excel from "../../Assets/images/excel_icon.png";
import { ExportToExcel } from "./ExportToExcel";
import { ExcelToExport } from "../ExcelToExport";

import LoaderSearch from "../../Table/SubTable/LoaderSearch";
import AumUfcReport from "./AumUfcReport";
import Loader from "../../Table/Loader";

const AumRegionReport = ({
  zone,
  report_period,
  formatNumberToIndianFormat,
}) => {

  const [clickedIndex, setClickedIndex] = useState(-1);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = useMemo(
    () => ({
      zone: zone,
      report_period: report_period,
    }),
    [zone, report_period]
  );
  const queryParamsString = new URLSearchParams(queryParams).toString();
  const { aum_details, loading } = useAUMApi(queryParamsString);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExport = () => {
    ExcelToExport(aum_details, "AUM Region Report");
  };


  function calculateTotalAum() {
    let total = 0;
    aum_details.forEach((item) => {
      total += parseFloat(item.TOTAL_AUM);
    });
    return total;
  }

  function calculateTotal(columnName) {
    let total = 0;
    aum_details.forEach((item) => {
      total += parseFloat(item[columnName]);
    });
    return total;
  }
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
      <div className="container" >
        <div className="row mt-2 ">
          <div className="head">
            <h4>
              <b className="black-color"> {zone}</b>
            </h4>
            <h5>
              <b className="gray-color">(In Lakhs)</b>
            </h5>
          </div>
          
          <table className="table table-bordered active nested-table" id="table2">
            <thead className="bgcolorBlue text-white mainhead">
              <tr className="mid">
                <th rowSpan="2" className="headtable">
                  Zone
                </th>
                <th rowSpan="2" className="headtable">
                  Region code
                </th>
                <th rowSpan="2" className="headtable">
                  Region Name
                </th>
                <th rowSpan="2" className="headtable">
                  Total AUM
                </th>
                <th colSpan="6">AUM</th>
              </tr>
              <tr>
                <th className="">Equity</th>
                <th className="">Hybrid</th>
                <th className="">Arbitrage</th>
                <th className="">Passive</th>
                <th className="">Fixed Income</th>
                <th className="">Cash</th>
              </tr>
            </thead>
            <tbody  style={{ backgroundColor: "#DADADA" }}>
              {aum_details.map((item,index) => (
                <React.Fragment>
                <tr key={item.SrNo}>
                  <td>{item.ZONE}</td>
                  <td>
                  <button
                      className="textlink"
                      onClick={() => handleButtonClick(index)}
                      disabled={loading}
                    >
                       {item.REGION_CODE}
                    </button>
                    {isLoading && (
                                <div className="text-center mt-4">
                                  <i className="fas fa-spinner fa-spin fa-2x loder"></i>{" "}
                                  <Loader className="loder" />
                                </div>
                              )}
                  </td>
                  <td>{item.REGION_NAME}</td>
                  <td className="">
                    {formatNumberToIndianFormat(parseFloat(item.TOTAL_AUM))}
                  </td>
                  <td className="">
                    {formatNumberToIndianFormat(parseFloat(item.EQUITY_AUM))}
                  </td>
                  <td className="">
                    {formatNumberToIndianFormat(parseFloat(item.HYBRID_AUM))}
                  </td>
                  <td className="">
                    {formatNumberToIndianFormat(parseFloat(item.ARBITRAGE_AUM))}
                  </td>
                  <td className="">
                    {formatNumberToIndianFormat(parseFloat(item.PASSIVE_AUM))}
                  </td>
                  <td className="">
                    {formatNumberToIndianFormat(
                      parseFloat(item.FIXED_INCOME_AUM)
                    )}
                  </td>
                  <td className="">
                    {formatNumberToIndianFormat(parseFloat(item.CASH_AUM))}
                  </td>
                </tr>
                 {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                    <td colSpan="10" className="">
                      <AumUfcReport
                       region_code={item.REGION_CODE}
                        zone=  {item.ZONE}
                        report_period={report_period}
                        formatNumberToIndianFormat={formatNumberToIndianFormat}
                      />
                    </td>
                  </tr>
                )}
                </React.Fragment>
              ))}
              <tr className="totalhead">
                <td colSpan="3">Total</td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(calculateTotalAum().toFixed(2))}
                </td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(calculateTotal("EQUITY_AUM").toFixed(2))}
                </td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(calculateTotal("HYBRID_AUM").toFixed(2))}
                </td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(calculateTotal("ARBITRAGE_AUM").toFixed(2))}
                </td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(calculateTotal("PASSIVE_AUM").toFixed(2))}
                </td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(
                    calculateTotal("FIXED_INCOME_AUM").toFixed(2)
                  )}
                </td>
                <td className="totalheaad">
                  {formatNumberToIndianFormat(calculateTotal("CASH_AUM").toFixed(2))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AumRegionReport;
