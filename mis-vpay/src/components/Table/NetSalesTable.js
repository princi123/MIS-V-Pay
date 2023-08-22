import React, { useState } from "react";
import SubNetSalesTable from "./SubTable/SubNetSalesTable";

const NetSalesTable = ({eastZone, EARN_ZONE, FINTECH_ZONE, GULF_ZONE, NOMAPPING_ZONE,NORTH_ZONE, NO_MAPPING, SOUTH_ZONE,  WEST_ZONE, WRONG_INVPIN_ZONE}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };

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
              <th scope="col" className="text-end">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th scope="col" className="text-end">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th scope="col" className="text-end">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th scope="col" className="text-end">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
            </tr>
            {eastZone && (
            <tr>
              <td>
                <button className="textlink" onClick={handleButtonClick}>
                <b>{eastZone.ZONE }</b>
                </button></td>
                <td className="text-end">{eastZone.NEQUITY}</td>
                <td className="text-end">{eastZone.NHYBRID}</td>
                <td className="text-end">{eastZone.NARBITRAGE}</td>
                <td className="text-end">{eastZone.NPASSIVE}</td>
                <td className="text-end">{eastZone.NFIXED_INCOME}</td>
                <td className="text-end">{eastZone.NCASH}</td>
                <td className="text-end">{eastZone.NTOTAL}</td>
            </tr>)}
            {isButtonClicked && (
                <tr>
                  <td colSpan="9">
                    <SubNetSalesTable/>
                  </td>
                </tr>
              )}
            {EARN_ZONE && (
              <tr>
                <td><button className="textlink">
                  <b>{EARN_ZONE.ZONE}</b>
                </button></td>
                <td className="text-end">{EARN_ZONE.NEQUITY}</td>
                <td className="text-end">{EARN_ZONE.NHYBRID}</td>
                <td className="text-end">{EARN_ZONE.NARBITRAGE}</td>
                <td className="text-end">{EARN_ZONE.NPASSIVE}</td>
                <td className="text-end">{EARN_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{EARN_ZONE.NCASH}</td>
                <td className="text-end">{EARN_ZONE.NTOTAL}</td>
              </tr>)}
              {FINTECH_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{FINTECH_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{FINTECH_ZONE.NEQUITY}</td>
                <td className="text-end">{FINTECH_ZONE.NHYBRID}</td>
                <td className="text-end">{FINTECH_ZONE.NARBITRAGE}</td>
                <td className="text-end">{FINTECH_ZONE.NPASSIVE}</td>
                <td className="text-end">{FINTECH_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{FINTECH_ZONE.NCASH}</td>
                <td className="text-end">{FINTECH_ZONE.NTOTAL}</td>
              </tr>)}
              {GULF_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{GULF_ZONE.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{GULF_ZONE.NEQUITY}</td>
                <td className="text-end">{GULF_ZONE.NHYBRID}</td>
                <td className="text-end">{GULF_ZONE.NARBITRAGE}</td>
                <td className="text-end">{GULF_ZONE.NPASSIVE}</td>
                <td className="text-end">{GULF_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{GULF_ZONE.NCASH}</td>
                <td className="text-end">{GULF_ZONE.NTOTAL}</td>
              </tr>)}
              {NOMAPPING_ZONE && (
              <tr >
                <td>
                  <button className="textlink">
                    <b>{NOMAPPING_ZONE.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{NOMAPPING_ZONE.NEQUITY}</td>
                <td className="text-end">{NOMAPPING_ZONE.NHYBRID}</td>
                <td className="text-end">{NOMAPPING_ZONE.NARBITRAGE}</td>
                <td className="text-end">{NOMAPPING_ZONE.NPASSIVE}</td>
                <td className="text-end">{NOMAPPING_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{NOMAPPING_ZONE.NCASH}</td>
                <td className="text-end">{NOMAPPING_ZONE.NTOTAL}</td>
              </tr>)}
              {NORTH_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NORTH_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{NORTH_ZONE.NEQUITY}</td>
                <td className="text-end">{NORTH_ZONE.NHYBRID}</td>
                <td className="text-end">{NORTH_ZONE.NARBITRAGE}</td>
                <td className="text-end">{NORTH_ZONE.NPASSIVE}</td>
                <td className="text-end">{NORTH_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{NORTH_ZONE.NCASH}</td>
                <td className="text-end">{NORTH_ZONE.NTOTAL}</td>
              </tr>)}
              {NO_MAPPING && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NO_MAPPING.ZONE}</b>
                  </button></td>
                <td className="text-end">{NO_MAPPING.NEQUITY}</td>
                <td className="text-end">{NO_MAPPING.NHYBRID}</td>
                <td className="text-end">{NO_MAPPING.NARBITRAGE}</td>
                <td className="text-end">{NO_MAPPING.NPASSIVE}</td>
                <td className="text-end">{NO_MAPPING.NFIXED_INCOME}</td>
                <td className="text-end">{NO_MAPPING.NCASH}</td>
                <td className="text-end">{NO_MAPPING.NTOTAL}</td>
              </tr>)}
              {SOUTH_ZONE &&(
              <tr>
                <td>
                  <button className="textlink">
                    <b>{SOUTH_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{SOUTH_ZONE.NEQUITY}</td>
                <td className="text-end">{SOUTH_ZONE.NHYBRID}</td>
                <td className="text-end">{SOUTH_ZONE.NARBITRAGE}</td>
                <td className="text-end">{SOUTH_ZONE.NPASSIVE}</td>
                <td className="text-end">{SOUTH_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{SOUTH_ZONE.NCASH}</td>
                <td className="text-end">{SOUTH_ZONE.NTOTAL}</td>
              </tr>)}
                {WEST_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{WEST_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{WEST_ZONE.NEQUITY}</td>
                <td className="text-end">{WEST_ZONE.NHYBRID}</td>
                <td className="text-end">{WEST_ZONE.NARBITRAGE}</td>
                <td className="text-end">{WEST_ZONE.NPASSIVE}</td>
                <td className="text-end">{WEST_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{WEST_ZONE.NCASH}</td>
                <td className="text-end">{WEST_ZONE.NTOTAL}</td>
              </tr>)}
              {WRONG_INVPIN_ZONE && (
                <tr>
                <td>
                  <button className="textlink">
                    <b>{WRONG_INVPIN_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NEQUITY}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NHYBRID}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NARBITRAGE}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NPASSIVE}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NFIXED_INCOME}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NCASH}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.NTOTAL}</td>
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
