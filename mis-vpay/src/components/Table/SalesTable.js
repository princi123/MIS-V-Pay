import React, { useState, useEffect } from "react";
import "./SalesTable.css";
import RedemptionTable from "./RedemptionTable";
import NetSalesTable from "./NetSalesTable";
import SubSalesTable from "./SubTable/SubSalesTable";

const SalesTable = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [transaction_summary_report, setTransactionSummaryReport]= useState([]);

  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => 
  {
  setSidebarOpen(!sidebarOpen);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/api/v1/summary_transactions");
        const data = await response.json();
        setTransactionSummaryReport(data);

      } catch (error) {
        console.error("Error fetching transaction summary report:", error);
      }
    };

    fetchData();
  }, []);

  const eastZoneData = transaction_summary_report.find(entry => entry.ZONE === "EAST");
  const E_ARN_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "E-ARN");
  const FINTECH_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "FINTECH");
  const GULF_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "GULF");
  const NOMAPPING_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "NO MAPPING");
  const north_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "NORTH");
  const NO_MAPPING_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "NO_MAPPING");
  const SOUTH_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "SOUTH");
  const WEST_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "WEST");
  const WRONG_INVPIN_ZoneData = transaction_summary_report.find(entry => entry.ZONE === "WRONG_INVPIN");

  return (
    <>
    <div className="container-fluid">
    <div className="d-flex">
     <div >
      <div >
      <div className="row mt-4 mr-4 ">
        <div className="col-md-3 d-flex">
          <h4><b>SALES</b></h4>
          <h5><b className="gray-color">(In Lakhs)</b></h5>
        </div>
        <div className="col-md-2 list-group">
          <p className="theader"><b>All India Region Wise</b></p>
        </div>
        <div className="col-md-2">
          <p className="theader"><b>All India UFC Wise </b></p>
        </div>
        <div className="col-md-2">
          <p className="theader"><b>All India RM Wise </b></p>
        </div>
        <div className="col-md-3" />
        <div className="col-md-12">
          <table className="table small border">
            <tbody>

              <tr className="bgcolorBlue text-white">
                <th scope="col">ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /><img src="/mis_vpay/assets/images/table2icon.png" alt="" /></th>
                <th className="text-end" scope="col">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th className="text-end" scope="col">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th className="text-end" scope="col">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th className="text-end" scope="col">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th className="text-end" scope="col">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th className="text-end" scope="col">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th className="text-end" scope="col">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              </tr>
              {eastZoneData && (
              <tr>
                <td>
                  <button className="textlink" onClick={handleButtonClick} >
                    <b>{eastZoneData.ZONE }</b></button>
                </td>
                <td className="text-end">{eastZoneData.SEQUITY}</td>
                <td className="text-end">{eastZoneData.SHYBRID}</td>
                <td className="text-end">{eastZoneData.SARBITRAGE}</td>
                <td className="text-end">{eastZoneData.SPASSIVE}</td>
                <td className="text-end">{eastZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{eastZoneData.SCASH}</td>
                <td className="text-end">{eastZoneData.STOTAL}</td>
              </tr>
              )}
              {isButtonClicked && (
                <tr>
                  <td colSpan="9">
                    <SubSalesTable />
                  </td>
                </tr>
              )}
              {E_ARN_ZoneData && (
              <tr>
                <td><button className="textlink">
                  <b>{E_ARN_ZoneData.ZONE}</b>
                </button></td>
                <td className="text-end">{E_ARN_ZoneData.SEQUITY}</td>
                <td className="text-end">{E_ARN_ZoneData.SHYBRID}</td>
                <td className="text-end">{E_ARN_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{E_ARN_ZoneData.SPASSIVE}</td>
                <td className="text-end">{E_ARN_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{E_ARN_ZoneData.SCASH}</td>
                <td className="text-end">{E_ARN_ZoneData.STOTAL}</td>
              </tr>)}
              {FINTECH_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{FINTECH_ZoneData.ZONE}</b>
                  </button></td>
                <td className="text-end">{FINTECH_ZoneData.SEQUITY}</td>
                <td className="text-end">{FINTECH_ZoneData.SHYBRID}</td>
                <td className="text-end">{FINTECH_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{FINTECH_ZoneData.SPASSIVE}</td>
                <td className="text-end">{FINTECH_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{FINTECH_ZoneData.SCASH}</td>
                <td className="text-end">{FINTECH_ZoneData.STOTAL}</td>
              </tr>)}
              {GULF_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{GULF_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{GULF_ZoneData.SEQUITY}</td>
                <td className="text-end">{GULF_ZoneData.SHYBRID}</td>
                <td className="text-end">{GULF_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{GULF_ZoneData.SPASSIVE}</td>
                <td className="text-end">{GULF_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{GULF_ZoneData.SCASH}</td>
                <td className="text-end">{GULF_ZoneData.STOTAL}</td>
              </tr>)}
              {NOMAPPING_ZoneData && (
              <tr >
                <td>
                  <button className="textlink">
                    <b>{NOMAPPING_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{NOMAPPING_ZoneData.SEQUITY}</td>
                <td className="text-end">{NOMAPPING_ZoneData.SHYBRID}</td>
                <td className="text-end">{NOMAPPING_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{NOMAPPING_ZoneData.SPASSIVE}</td>
                <td className="text-end">{NOMAPPING_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{NOMAPPING_ZoneData.SCASH}</td>
                <td className="text-end">{NOMAPPING_ZoneData.STOTAL}</td>
              </tr>)}
              {north_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{north_ZoneData.ZONE}</b>
                  </button></td>
                <td className="text-end">{north_ZoneData.SEQUITY}</td>
                <td className="text-end">{north_ZoneData.SHYBRID}</td>
                <td className="text-end">{north_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{north_ZoneData.SPASSIVE}</td>
                <td className="text-end">{north_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{north_ZoneData.SCASH}</td>
                <td className="text-end">{north_ZoneData.STOTAL}</td>
              </tr>)}
              {NO_MAPPING_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NO_MAPPING_ZoneData.ZONE}</b>
                  </button></td>
                <td className="text-end">{NO_MAPPING_ZoneData.SEQUITY}</td>
                <td className="text-end">{NO_MAPPING_ZoneData.SHYBRID}</td>
                <td className="text-end">{NO_MAPPING_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{NO_MAPPING_ZoneData.SPASSIVE}</td>
                <td className="text-end">{NO_MAPPING_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{NO_MAPPING_ZoneData.SCASH}</td>
                <td className="text-end">{NO_MAPPING_ZoneData.STOTAL}</td>
              </tr>)}
              {SOUTH_ZoneData &&(
              <tr>
                <td>
                  <button className="textlink">
                    <b>{SOUTH_ZoneData.ZONE}</b>
                  </button></td>
                <td className="text-end">{SOUTH_ZoneData.SEQUITY}</td>
                <td className="text-end">{SOUTH_ZoneData.SHYBRID}</td>
                <td className="text-end">{SOUTH_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{SOUTH_ZoneData.SPASSIVE}</td>
                <td className="text-end">{SOUTH_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{SOUTH_ZoneData.SCASH}</td>
                <td className="text-end">{SOUTH_ZoneData.STOTAL}</td>
              </tr>)}
                {WEST_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{WEST_ZoneData.ZONE}</b>
                  </button></td>
                <td className="text-end">{WEST_ZoneData.SEQUITY}</td>
                <td className="text-end">{WEST_ZoneData.SHYBRID}</td>
                <td className="text-end">{WEST_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{WEST_ZoneData.SPASSIVE}</td>
                <td className="text-end">{WEST_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{WEST_ZoneData.SCASH}</td>
                <td className="text-end">{WEST_ZoneData.STOTAL}</td>
              </tr>)}
              {WRONG_INVPIN_ZoneData && (
                <tr>
                <td>
                  <button className="textlink">
                    <b>{WRONG_INVPIN_ZoneData.ZONE}</b>
                  </button></td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.SEQUITY}</td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.SHYBRID}</td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.SARBITRAGE}</td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.SPASSIVE}</td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.SFIXED_INCOME}</td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.SCASH}</td>
                <td className="text-end">{WRONG_INVPIN_ZoneData.STOTAL}</td>
              </tr>)}
              <tr className="bgcolorBlue text-white">
                <td>Total</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>

            </tbody>
          </table>
          <RedemptionTable eastZone={eastZoneData} EARN_ZONE= {E_ARN_ZoneData} FINTECH_ZONE= {FINTECH_ZoneData} GULF_ZONE={GULF_ZoneData} NOMAPPING_ZONE={NOMAPPING_ZoneData} 
          NORTH_ZONE= {north_ZoneData} NO_MAPPING={NO_MAPPING_ZoneData} SOUTH_ZONE={SOUTH_ZoneData}  WEST_ZONE={WEST_ZoneData} WRONG_INVPIN_ZONE={WRONG_INVPIN_ZoneData}/>

          <NetSalesTable eastZone={eastZoneData} EARN_ZONE= {E_ARN_ZoneData} FINTECH_ZONE= {FINTECH_ZoneData} GULF_ZONE={GULF_ZoneData} NOMAPPING_ZONE={NOMAPPING_ZoneData} 
          NORTH_ZONE= {north_ZoneData} NO_MAPPING={NO_MAPPING_ZoneData} SOUTH_ZONE={SOUTH_ZoneData}  WEST_ZONE={WEST_ZoneData} WRONG_INVPIN_ZONE={WRONG_INVPIN_ZoneData}/>
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
