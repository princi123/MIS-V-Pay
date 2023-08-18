import React, { useEffect, useState } from "react";
import SubNetSalesTable from "./SubTable/SubNetSalesTable";

const NetSalesTable = () => {
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
    <div className="new-component">
      <div className="head">
        <h4><b>NET SALES</b></h4>
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
                <td>{eastZoneData.NEQUITY}</td>
                <td>{eastZoneData.NHYBRID}</td>
                <td>{eastZoneData.NARBITRAGE}</td>
                <td>{eastZoneData.NPASSIVE}</td>
                <td>{eastZoneData.NFIXED_INCOME}</td>
                <td>{eastZoneData.NCASH}</td>
                <td>{eastZoneData.NTOTAL}</td>
            </tr>)}
            {isButtonClicked && (
                <tr>
                  <td colSpan="9">
                    <SubNetSalesTable/>
                  </td>
                </tr>
              )}
            {E_ARN_ZoneData && (
              <tr>
                <td><button className="textlink">
                  <b>{E_ARN_ZoneData.ZONE}</b>
                </button></td>
                <td>{E_ARN_ZoneData.NEQUITY}</td>
                <td>{E_ARN_ZoneData.NHYBRID}</td>
                <td>{E_ARN_ZoneData.NARBITRAGE}</td>
                <td>{E_ARN_ZoneData.NPASSIVE}</td>
                <td>{E_ARN_ZoneData.NFIXED_INCOME}</td>
                <td>{E_ARN_ZoneData.NCASH}</td>
                <td>{E_ARN_ZoneData.NTOTAL}</td>
              </tr>)}
              {FINTECH_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{FINTECH_ZoneData.ZONE}</b>
                  </button></td>
                <td>{FINTECH_ZoneData.NEQUITY}</td>
                <td>{FINTECH_ZoneData.NHYBRID}</td>
                <td>{FINTECH_ZoneData.NARBITRAGE}</td>
                <td>{FINTECH_ZoneData.NPASSIVE}</td>
                <td>{FINTECH_ZoneData.NFIXED_INCOME}</td>
                <td>{FINTECH_ZoneData.NCASH}</td>
                <td>{FINTECH_ZoneData.NTOTAL}</td>
              </tr>)}
              {GULF_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{GULF_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td>{GULF_ZoneData.NEQUITY}</td>
                <td>{GULF_ZoneData.NHYBRID}</td>
                <td>{GULF_ZoneData.NARBITRAGE}</td>
                <td>{GULF_ZoneData.NPASSIVE}</td>
                <td>{GULF_ZoneData.NFIXED_INCOME}</td>
                <td>{GULF_ZoneData.NCASH}</td>
                <td>{GULF_ZoneData.NTOTAL}</td>
              </tr>)}
              {NOMAPPING_ZoneData && (
              <tr >
                <td>
                  <button className="textlink">
                    <b>{NOMAPPING_ZoneData.ZONE}</b>
                  </button>
                </td>
                <td>{NOMAPPING_ZoneData.NEQUITY}</td>
                <td>{NOMAPPING_ZoneData.NHYBRID}</td>
                <td>{NOMAPPING_ZoneData.NARBITRAGE}</td>
                <td>{NOMAPPING_ZoneData.NPASSIVE}</td>
                <td>{NOMAPPING_ZoneData.NFIXED_INCOME}</td>
                <td>{NOMAPPING_ZoneData.NCASH}</td>
                <td>{NOMAPPING_ZoneData.NTOTAL}</td>
              </tr>)}
              {north_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{north_ZoneData.ZONE}</b>
                  </button></td>
                <td>{north_ZoneData.NEQUITY}</td>
                <td>{north_ZoneData.NHYBRID}</td>
                <td>{north_ZoneData.NARBITRAGE}</td>
                <td>{north_ZoneData.NPASSIVE}</td>
                <td>{north_ZoneData.NFIXED_INCOME}</td>
                <td>{north_ZoneData.NCASH}</td>
                <td>{north_ZoneData.NTOTAL}</td>
              </tr>)}
              {NO_MAPPING_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NO_MAPPING_ZoneData.ZONE}</b>
                  </button></td>
                <td>{NO_MAPPING_ZoneData.NEQUITY}</td>
                <td>{NO_MAPPING_ZoneData.NHYBRID}</td>
                <td>{NO_MAPPING_ZoneData.NARBITRAGE}</td>
                <td>{NO_MAPPING_ZoneData.NPASSIVE}</td>
                <td>{NO_MAPPING_ZoneData.NFIXED_INCOME}</td>
                <td>{NO_MAPPING_ZoneData.NCASH}</td>
                <td>{NO_MAPPING_ZoneData.NTOTAL}</td>
              </tr>)}
              {SOUTH_ZoneData &&(
              <tr>
                <td>
                  <button className="textlink">
                    <b>{SOUTH_ZoneData.ZONE}</b>
                  </button></td>
                <td>{SOUTH_ZoneData.NEQUITY}</td>
                <td>{SOUTH_ZoneData.NHYBRID}</td>
                <td>{SOUTH_ZoneData.NARBITRAGE}</td>
                <td>{SOUTH_ZoneData.NPASSIVE}</td>
                <td>{SOUTH_ZoneData.NFIXED_INCOME}</td>
                <td>{SOUTH_ZoneData.NCASH}</td>
                <td>{SOUTH_ZoneData.NTOTAL}</td>
              </tr>)}
                {WEST_ZoneData && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{WEST_ZoneData.ZONE}</b>
                  </button></td>
                <td>{WEST_ZoneData.NEQUITY}</td>
                <td>{WEST_ZoneData.NHYBRID}</td>
                <td>{WEST_ZoneData.NARBITRAGE}</td>
                <td>{WEST_ZoneData.NPASSIVE}</td>
                <td>{WEST_ZoneData.NFIXED_INCOME}</td>
                <td>{WEST_ZoneData.NCASH}</td>
                <td>{WEST_ZoneData.NTOTAL}</td>
              </tr>)}
              {WRONG_INVPIN_ZoneData && (
                <tr>
                <td>
                  <button className="textlink">
                    <b>{WRONG_INVPIN_ZoneData.ZONE}</b>
                  </button></td>
                <td>{WRONG_INVPIN_ZoneData.NEQUITY}</td>
                <td>{WRONG_INVPIN_ZoneData.NHYBRID}</td>
                <td>{WRONG_INVPIN_ZoneData.NARBITRAGE}</td>
                <td>{WRONG_INVPIN_ZoneData.NPASSIVE}</td>
                <td>{WRONG_INVPIN_ZoneData.NFIXED_INCOME}</td>
                <td>{WRONG_INVPIN_ZoneData.NCASH}</td>
                <td>{WRONG_INVPIN_ZoneData.NTOTAL}</td>
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

export default NetSalesTable;
