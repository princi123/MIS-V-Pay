import React, { useState } from "react";
import "./SalesTable.css";
import RedemptionTable from "./RedemptionTable";
import NetSalesTable from "./NetSalesTable";
import SubSalesTable from "./SubTable/SubSalesTable";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar";

const SalesTable = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => 
  {
  setSidebarOpen(!sidebarOpen);
  }

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
                <th scope="col">S no.</th>
                <th scope="col">ZONE <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /><img src="/mis_vpay/assets/images/table2icon.png" alt="" /></th>
                <th scope="col">Equity <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Hybrid <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Arbitrage <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Passive(ex-Debt) <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Fixed Income <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Cash <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
                <th scope="col">Total <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" /></th>
              </tr>
              <tr className="accordion-toggle collapsed" id="accordion1" data-mdb-toggle="collapse" data-mdb-parent="#accordion1" href="#collapseOne" aria-controls="collapseOne">

                <td>1.</td>
                <td>
                  <button onClick={handleButtonClick} className="textlink"><b>EAST</b></button>
                </td>
                <td>102.45</td>
                <td>18.54</td>
                <td>1.05</td>
                <td>62.47</td>
                <td>37.6</td>
                <td>657.39</td>
                <td>879.5</td>
              </tr>
              {isButtonClicked && (
                <tr>
                  <td colSpan="9">
                    <SubSalesTable />
                  </td>
                </tr>
              )}
              <tr>
                <td>2.</td>
                <td><button className="textlink">
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
              <tr >
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
              <tr className="">
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
