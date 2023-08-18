import React, { useEffect, useState } from "react";
import "./RedemptionTable.css";
import SubRedemptionTable from "./SubTable/SubRedemptionTable";



const RedemptionTable = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [transaction_summary_report, setTransactionSummaryReport]= useState([]);

  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };
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
    <div>
      <div className="head">
        <h4><b>REDEMPTION</b></h4>
        <h5><b className="gray-color">(In Lakhs)</b></h5>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12">
        <table className="table small border">
          <tbody>
            <tr className="bgcolorBlue text-white">
              <th scope="col">ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /><img src="/mis_vpay/assets/images/table2icon.png" alt="" /></th>
              <th scope="col">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th scope="col">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th scope="col">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
            </tr>
            {eastZoneData && (
            <tr>
              <td>
                <button className="textlink" onClick={handleButtonClick}>
                <b>{eastZoneData.ZONE }</b>
                </button></td>
                <td>{eastZoneData.REQUITY}</td>
                <td>{eastZoneData.RHYBRID}</td>
                <td>{eastZoneData.RARBITRAGE}</td>
                <td>{eastZoneData.RPASSIVE}</td>
                <td>{eastZoneData.RFIXED_INCOME}</td>
                <td>{eastZoneData.RCASH}</td>
                <td>{eastZoneData.RTOTAL}</td>
            </tr>)}
            {isButtonClicked && (
                <tr>
                  <td colSpan="9">
                    <SubRedemptionTable/>
                  </td>
                </tr>
              )}
            {E_ARN_ZoneData && (
              <tr>
                <td><button className="textlink">
                  <b>{E_ARN_ZoneData.ZONE}</b>
                </button></td>
                <td>{E_ARN_ZoneData.REQUITY}</td>
                <td>{E_ARN_ZoneData.RHYBRID}</td>
                <td>{E_ARN_ZoneData.RARBITRAGE}</td>
                <td>{E_ARN_ZoneData.RPASSIVE}</td>
                <td>{E_ARN_ZoneData.RFIXED_INCOME}</td>
                <td>{E_ARN_ZoneData.RCASH}</td>
                <td>{E_ARN_ZoneData.RTOTAL}</td>
              </tr>)}
              {FINTECH_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{FINTECH_ZoneData.ZONE}</b>
                  </button></td>
                <td>{FINTECH_ZoneData.REQUITY}</td>
                <td>{FINTECH_ZoneData.RHYBRID}</td>
                <td>{FINTECH_ZoneData.RARBITRAGE}</td>
                <td>{FINTECH_ZoneData.RPASSIVE}</td>
                <td>{FINTECH_ZoneData.RFIXED_INCOME}</td>
                <td>{FINTECH_ZoneData.RCASH}</td>
                <td>{FINTECH_ZoneData.RTOTAL}</td>
              </tr>)}
              {GULF_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{GULF_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td>{GULF_ZoneData.REQUITY}</td>
                <td>{GULF_ZoneData.RHYBRID}</td>
                <td>{GULF_ZoneData.RARBITRAGE}</td>
                <td>{GULF_ZoneData.RPASSIVE}</td>
                <td>{GULF_ZoneData.RFIXED_INCOME}</td>
                <td>{GULF_ZoneData.RCASH}</td>
                <td>{GULF_ZoneData.RTOTAL}</td>
              </tr>)}
              {NOMAPPING_ZoneData && (
              <tr >
                <td>
                  <button className="textlink">
                    <b>{NOMAPPING_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td>{NOMAPPING_ZoneData.REQUITY}</td>
                <td>{NOMAPPING_ZoneData.RHYBRID}</td>
                <td>{NOMAPPING_ZoneData.RARBITRAGE}</td>
                <td>{NOMAPPING_ZoneData.RPASSIVE}</td>
                <td>{NOMAPPING_ZoneData.RFIXED_INCOME}</td>
                <td>{NOMAPPING_ZoneData.RCASH}</td>
                <td>{NOMAPPING_ZoneData.RTOTAL}</td>
              </tr>)}
              {north_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{north_ZoneData.ZONE}</b>
                  </button></td>
                <td>{north_ZoneData.REQUITY}</td>
                <td>{north_ZoneData.RHYBRID}</td>
                <td>{north_ZoneData.RARBITRAGE}</td>
                <td>{north_ZoneData.RPASSIVE}</td>
                <td>{north_ZoneData.RFIXED_INCOME}</td>
                <td>{north_ZoneData.RCASH}</td>
                <td>{north_ZoneData.RTOTAL}</td>
              </tr>)}
              {NO_MAPPING_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NO_MAPPING_ZoneData.ZONE}</b>
                  </button></td>
                <td>{NO_MAPPING_ZoneData.REQUITY}</td>
                <td>{NO_MAPPING_ZoneData.RHYBRID}</td>
                <td>{NO_MAPPING_ZoneData.RARBITRAGE}</td>
                <td>{NO_MAPPING_ZoneData.RPASSIVE}</td>
                <td>{NO_MAPPING_ZoneData.RFIXED_INCOME}</td>
                <td>{NO_MAPPING_ZoneData.RCASH}</td>
                <td>{NO_MAPPING_ZoneData.RTOTAL}</td>
              </tr>)}
              {SOUTH_ZoneData &&(
              <tr>
                <td>
                  <button className="textlink">
                    <b>{SOUTH_ZoneData.ZONE}</b>
                  </button></td>
                <td>{SOUTH_ZoneData.REQUITY}</td>
                <td>{SOUTH_ZoneData.RHYBRID}</td>
                <td>{SOUTH_ZoneData.RARBITRAGE}</td>
                <td>{SOUTH_ZoneData.RPASSIVE}</td>
                <td>{SOUTH_ZoneData.RFIXED_INCOME}</td>
                <td>{SOUTH_ZoneData.RCASH}</td>
                <td>{SOUTH_ZoneData.RTOTAL}</td>
              </tr>)}
                {WEST_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{WEST_ZoneData.ZONE}</b>
                  </button></td>
                <td>{WEST_ZoneData.REQUITY}</td>
                <td>{WEST_ZoneData.RHYBRID}</td>
                <td>{WEST_ZoneData.RARBITRAGE}</td>
                <td>{WEST_ZoneData.RPASSIVE}</td>
                <td>{WEST_ZoneData.RFIXED_INCOME}</td>
                <td>{WEST_ZoneData.RCASH}</td>
                <td>{WEST_ZoneData.RTOTAL}</td>
              </tr>)}
              {WRONG_INVPIN_ZoneData && (
                <tr>
                <td>
                  <button className="textlink">
                    <b>{WRONG_INVPIN_ZoneData.ZONE}</b>
                  </button></td>
                <td>{WRONG_INVPIN_ZoneData.REQUITY}</td>
                <td>{WRONG_INVPIN_ZoneData.RHYBRID}</td>
                <td>{WRONG_INVPIN_ZoneData.RARBITRAGE}</td>
                <td>{WRONG_INVPIN_ZoneData.RPASSIVE}</td>
                <td>{WRONG_INVPIN_ZoneData.RFIXED_INCOME}</td>
                <td>{WRONG_INVPIN_ZoneData.RCASH}</td>
                <td>{WRONG_INVPIN_ZoneData.RTOTAL}</td>
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
      </div>
    </div>
  );
};

export default RedemptionTable;
