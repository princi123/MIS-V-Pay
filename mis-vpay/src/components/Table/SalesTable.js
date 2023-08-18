import React, { useState, useEffect } from "react";
import "./SalesTable.css";
import RedemptionTable from "./RedemptionTable";
import NetSalesTable from "./NetSalesTable";
import SubSalesTable from "./SubTable/SubSalesTable";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar";

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

              <tr className="bgcolorBlue text-white ">
                <th scope="col">ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /><img src="/mis_vpay/assets/images/table2icon.png" alt="" /></th>
                <th scope="col">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              </tr>
              {eastZoneData && (
              <tr>
                <td>
                  <button className="textlink" onClick={handleButtonClick} >
                    <b>{eastZoneData.ZONE }</b></button>
                </td>
                <td>{eastZoneData.SEQUITY}</td>
                <td>{eastZoneData.SHYBRID}</td>
                <td>{eastZoneData.SARBITRAGE}</td>
                <td>{eastZoneData.SPASSIVE}</td>
                <td>{eastZoneData.SFIXED_INCOME}</td>
                <td>{eastZoneData.SCASH}</td>
                <td>{eastZoneData.STOTAL}</td>
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
                <td>{E_ARN_ZoneData.SEQUITY}</td>
                <td>{E_ARN_ZoneData.SHYBRID}</td>
                <td>{E_ARN_ZoneData.SARBITRAGE}</td>
                <td>{E_ARN_ZoneData.SPASSIVE}</td>
                <td>{E_ARN_ZoneData.SFIXED_INCOME}</td>
                <td>{E_ARN_ZoneData.SCASH}</td>
                <td>{E_ARN_ZoneData.STOTAL}</td>
              </tr>)}
              {FINTECH_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{FINTECH_ZoneData.ZONE}</b>
                  </button></td>
                <td>{FINTECH_ZoneData.SEQUITY}</td>
                <td>{FINTECH_ZoneData.SHYBRID}</td>
                <td>{FINTECH_ZoneData.SARBITRAGE}</td>
                <td>{FINTECH_ZoneData.SPASSIVE}</td>
                <td>{FINTECH_ZoneData.SFIXED_INCOME}</td>
                <td>{FINTECH_ZoneData.SCASH}</td>
                <td>{FINTECH_ZoneData.STOTAL}</td>
              </tr>)}
              {GULF_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{GULF_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td>{GULF_ZoneData.SEQUITY}</td>
                <td>{GULF_ZoneData.SHYBRID}</td>
                <td>{GULF_ZoneData.SARBITRAGE}</td>
                <td>{GULF_ZoneData.SPASSIVE}</td>
                <td>{GULF_ZoneData.SFIXED_INCOME}</td>
                <td>{GULF_ZoneData.SCASH}</td>
                <td>{GULF_ZoneData.STOTAL}</td>
              </tr>)}
              {NOMAPPING_ZoneData && (
              <tr >
                <td>
                  <button className="textlink">
                    <b>{NOMAPPING_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td>{NOMAPPING_ZoneData.SEQUITY}</td>
                <td>{NOMAPPING_ZoneData.SHYBRID}</td>
                <td>{NOMAPPING_ZoneData.SARBITRAGE}</td>
                <td>{NOMAPPING_ZoneData.SPASSIVE}</td>
                <td>{NOMAPPING_ZoneData.SFIXED_INCOME}</td>
                <td>{NOMAPPING_ZoneData.SCASH}</td>
                <td>{NOMAPPING_ZoneData.STOTAL}</td>
              </tr>)}
              {north_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{north_ZoneData.ZONE}</b>
                  </button></td>
                <td>{north_ZoneData.SEQUITY}</td>
                <td>{north_ZoneData.SHYBRID}</td>
                <td>{north_ZoneData.SARBITRAGE}</td>
                <td>{north_ZoneData.SPASSIVE}</td>
                <td>{north_ZoneData.SFIXED_INCOME}</td>
                <td>{north_ZoneData.SCASH}</td>
                <td>{north_ZoneData.STOTAL}</td>
              </tr>)}
              {NO_MAPPING_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NO_MAPPING_ZoneData.ZONE}</b>
                  </button></td>
                <td>{NO_MAPPING_ZoneData.SEQUITY}</td>
                <td>{NO_MAPPING_ZoneData.SHYBRID}</td>
                <td>{NO_MAPPING_ZoneData.SARBITRAGE}</td>
                <td>{NO_MAPPING_ZoneData.SPASSIVE}</td>
                <td>{NO_MAPPING_ZoneData.SFIXED_INCOME}</td>
                <td>{NO_MAPPING_ZoneData.SCASH}</td>
                <td>{NO_MAPPING_ZoneData.STOTAL}</td>
              </tr>)}
              {SOUTH_ZoneData &&(
              <tr>
                <td>
                  <button className="textlink">
                    <b>{SOUTH_ZoneData.ZONE}</b>
                  </button></td>
                <td>{SOUTH_ZoneData.SEQUITY}</td>
                <td>{SOUTH_ZoneData.SHYBRID}</td>
                <td>{SOUTH_ZoneData.SARBITRAGE}</td>
                <td>{SOUTH_ZoneData.SPASSIVE}</td>
                <td>{SOUTH_ZoneData.SFIXED_INCOME}</td>
                <td>{SOUTH_ZoneData.SCASH}</td>
                <td>{SOUTH_ZoneData.STOTAL}</td>
              </tr>)}
                {WEST_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{WEST_ZoneData.ZONE}</b>
                  </button></td>
                <td>{WEST_ZoneData.SEQUITY}</td>
                <td>{WEST_ZoneData.SHYBRID}</td>
                <td>{WEST_ZoneData.SARBITRAGE}</td>
                <td>{WEST_ZoneData.SPASSIVE}</td>
                <td>{WEST_ZoneData.SFIXED_INCOME}</td>
                <td>{WEST_ZoneData.SCASH}</td>
                <td>{WEST_ZoneData.STOTAL}</td>
              </tr>)}
              {WRONG_INVPIN_ZoneData && (
                <tr>
                <td>
                  <button className="textlink">
                    <b>{WRONG_INVPIN_ZoneData.ZONE}</b>
                  </button></td>
                <td>{WRONG_INVPIN_ZoneData.SEQUITY}</td>
                <td>{WRONG_INVPIN_ZoneData.SHYBRID}</td>
                <td>{WRONG_INVPIN_ZoneData.SARBITRAGE}</td>
                <td>{WRONG_INVPIN_ZoneData.SPASSIVE}</td>
                <td>{WRONG_INVPIN_ZoneData.SFIXED_INCOME}</td>
                <td>{WRONG_INVPIN_ZoneData.SCASH}</td>
                <td>{WRONG_INVPIN_ZoneData.STOTAL}</td>
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
          <RedemptionTable />
          <NetSalesTable />
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
