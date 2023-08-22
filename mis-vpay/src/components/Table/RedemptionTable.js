import React, {useState } from "react";
import "./RedemptionTable.css";
import SubRedemptionTable from "./SubTable/SubRedemptionTable";

const RedemptionTable = ({eastZone, EARN_ZONE, FINTECH_ZONE, GULF_ZONE, NOMAPPING_ZONE,NORTH_ZONE, NO_MAPPING, SOUTH_ZONE,  WEST_ZONE, WRONG_INVPIN_ZONE}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };

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
              <th className="text-end" scope="col">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th className="text-end"scope="col">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th className="text-end"scope="col">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th className="text-end"scope="col">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th className="text-end"scope="col">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
              <th className="text-end"scope="col">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              <th className="text-end"scope="col">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
            </tr>
            {eastZone && (
            <tr>
              <td>
                <button className="textlink" onClick={handleButtonClick}>
                <b>{eastZone.ZONE }</b>
                </button></td>
                <td className="text-end">{eastZone.REQUITY}</td>
                <td className="text-end">{eastZone.RHYBRID}</td>
                <td className="text-end">{eastZone.RARBITRAGE}</td>
                <td className="text-end">{eastZone.RPASSIVE}</td>
                <td className="text-end">{eastZone.RFIXED_INCOME}</td>
                <td className="text-end">{eastZone.RCASH}</td>
                <td className="text-end">{eastZone.RTOTAL}</td>
            </tr>)}
            {isButtonClicked && (
                <tr>
                  <td colSpan="9">
                    <SubRedemptionTable/>
                  </td>
                </tr>
              )}
            {EARN_ZONE && (
              <tr>
                <td><button className="textlink">
                  <b>{EARN_ZONE.ZONE}</b>
                </button></td>
                <td className="text-end">{EARN_ZONE.REQUITY}</td>
                <td className="text-end">{EARN_ZONE.RHYBRID}</td>
                <td className="text-end">{EARN_ZONE.RARBITRAGE}</td>
                <td className="text-end">{EARN_ZONE.RPASSIVE}</td>
                <td className="text-end">{EARN_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{EARN_ZONE.RCASH}</td>
                <td className="text-end">{EARN_ZONE.RTOTAL}</td>
              </tr>)}
              {FINTECH_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{FINTECH_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{FINTECH_ZONE.REQUITY}</td>
                <td className="text-end">{FINTECH_ZONE.RHYBRID}</td>
                <td className="text-end">{FINTECH_ZONE.RARBITRAGE}</td>
                <td className="text-end">{FINTECH_ZONE.RPASSIVE}</td>
                <td className="text-end">{FINTECH_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{FINTECH_ZONE.RCASH}</td>
                <td className="text-end">{FINTECH_ZONE.RTOTAL}</td>
              </tr>)}
              {GULF_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{GULF_ZONE.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{GULF_ZONE.REQUITY}</td>
                <td className="text-end">{GULF_ZONE.RHYBRID}</td>
                <td className="text-end">{GULF_ZONE.RARBITRAGE}</td>
                <td className="text-end">{GULF_ZONE.RPASSIVE}</td>
                <td className="text-end">{GULF_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{GULF_ZONE.RCASH}</td>
                <td className="text-end">{GULF_ZONE.RTOTAL}</td>
              </tr>)}
              {NOMAPPING_ZONE && (
              <tr >
                <td>
                  <button className="textlink">
                    <b>{NOMAPPING_ZONE.ZONE}</b>
                  </button>
                </td>
                <td className="text-end">{NOMAPPING_ZONE.REQUITY}</td>
                <td className="text-end">{NOMAPPING_ZONE.RHYBRID}</td>
                <td className="text-end">{NOMAPPING_ZONE.RARBITRAGE}</td>
                <td className="text-end">{NOMAPPING_ZONE.RPASSIVE}</td>
                <td className="text-end">{NOMAPPING_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{NOMAPPING_ZONE.RCASH}</td>
                <td className="text-end">{NOMAPPING_ZONE.RTOTAL}</td>
              </tr>)}
              {NORTH_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NORTH_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{NORTH_ZONE.REQUITY}</td>
                <td className="text-end">{NORTH_ZONE.RHYBRID}</td>
                <td className="text-end">{NORTH_ZONE.RARBITRAGE}</td>
                <td className="text-end">{NORTH_ZONE.RPASSIVE}</td>
                <td className="text-end">{NORTH_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{NORTH_ZONE.RCASH}</td>
                <td className="text-end">{NORTH_ZONE.RTOTAL}</td>
              </tr>)}
              {NO_MAPPING && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{NO_MAPPING.ZONE}</b>
                  </button></td>
                <td className="text-end">{NO_MAPPING.REQUITY}</td>
                <td className="text-end">{NO_MAPPING.RHYBRID}</td>
                <td className="text-end">{NO_MAPPING.RARBITRAGE}</td>
                <td className="text-end">{NO_MAPPING.RPASSIVE}</td>
                <td className="text-end">{NO_MAPPING.RFIXED_INCOME}</td>
                <td className="text-end">{NO_MAPPING.RCASH}</td>
                <td className="text-end">{NO_MAPPING.RTOTAL}</td>
              </tr>)}
              {SOUTH_ZONE &&(
              <tr>
                <td>
                  <button className="textlink">
                    <b>{SOUTH_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{SOUTH_ZONE.REQUITY}</td>
                <td className="text-end">{SOUTH_ZONE.RHYBRID}</td>
                <td className="text-end">{SOUTH_ZONE.RARBITRAGE}</td>
                <td className="text-end">{SOUTH_ZONE.RPASSIVE}</td>
                <td className="text-end">{SOUTH_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{SOUTH_ZONE.RCASH}</td>
                <td className="text-end">{SOUTH_ZONE.RTOTAL}</td>
              </tr>)}
                {WEST_ZONE && (
              <tr>
                <td>
                  <button className="textlink">
                    <b>{WEST_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{WEST_ZONE.REQUITY}</td>
                <td className="text-end">{WEST_ZONE.RHYBRID}</td>
                <td className="text-end">{WEST_ZONE.RARBITRAGE}</td>
                <td className="text-end">{WEST_ZONE.RPASSIVE}</td>
                <td className="text-end">{WEST_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{WEST_ZONE.RCASH}</td>
                <td className="text-end">{WEST_ZONE.RTOTAL}</td>
              </tr>)}
              {WRONG_INVPIN_ZONE && (
                <tr>
                <td>
                  <button className="textlink">
                    <b>{WRONG_INVPIN_ZONE.ZONE}</b>
                  </button></td>
                <td className="text-end">{WRONG_INVPIN_ZONE.REQUITY}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.RHYBRID}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.RARBITRAGE}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.RPASSIVE}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.RFIXED_INCOME}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.RCASH}</td>
                <td className="text-end">{WRONG_INVPIN_ZONE.RTOTAL}</td>
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