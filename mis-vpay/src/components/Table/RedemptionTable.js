import React from "react";
import "./RedemptionTable.css";

const RedemptionTable = () => {
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
              <th scope="col">S no.</th>
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
            <tr>
              <td>1.</td>
              <td>
                <button className="textlink">
                  <b>EAST</b>
                </button></td>
              <td>102.45</td>
              <td>18.54</td>
              <td>1.05</td>
              <td>62.47</td>
              <td>37.6</td>
              <td>657.39</td>
              <td>879.5</td>
            </tr>
            <tr><td>2.</td>
              <td>
                <button className="textlink">
                  <b>E-ARN</b>
                </button></td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>
                <button className="textlink">
                  <b>FINTECH</b>
                </button></td>
              <td>5242.13</td>
              <td>148.11</td>
              <td>444.02</td>
              <td>35828.14</td>
              <td>3598.07</td>
              <td>8394.81</td>
              <td>53655.27</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>
                <button className="textlink">
                  <b>GULF</b>
                </button></td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>
                <button className="textlink">
                  <b>NORTH</b>
                </button></td>
              <td>5242.13</td>
              <td>148.11</td>
              <td>444.02</td>
              <td>35828.14</td>
              <td>3598.07</td>
              <td>8394.81</td>
              <td>53655.27</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>
                <button className="textlink">
                  <b>NORTH</b>
                </button></td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>
                <button className="textlink">
                  <b>NO MAPPING</b>
                </button></td>
              <td>5242.13</td>
              <td>148.11</td>
              <td>444.02</td>
              <td>35828.14</td>
              <td>3598.07</td>
              <td>8394.81</td>
              <td>53655.27</td>
            </tr>
            <tr>
              <td>8.</td>
              <td>
                <button className="textlink">
                  <b>SOUTH</b>
                </button></td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>
                <button className="textlink">
                  <b>WEST</b>
                </button></td>
              <td>5242.13</td>
              <td>148.11</td>
              <td>444.02</td>
              <td>35828.14</td>
              <td>3598.07</td>
              <td>8394.81</td>
              <td>53655.27</td>
            </tr>
            <tr>
              <td>10.</td>
              <td>
                <button className="textlink">
                  <b>WRONG INVPIN</b>
                </button></td>
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>
            <tr className="bgcolorBlue text-white">
              <td>Total</td>
              <td />
              <td>50445.55</td>
              <td>8400.66</td>
              <td>851.86</td>
              <td>8701.79</td>
              <td>49287.18</td>
              <td>39089.01</td>
              <td>156776.05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RedemptionTable;
