import React,{useState}from "react";
import "./SubSalesTable.css";
import TableRowWithCollapse from "./TableRowWithCollapse";

const SubSalesTable = () => {
    const [isAnchorClicked, setIsAnchorClicked] = useState(false);
  
    const handleAnchorClicked = () => {
      setIsAnchorClicked((prevState) => !prevState);
    };
  return (
    <div className="new-component container-fluid">
      <div className="row mt-2 bg-white">
       <div className="head">
          <h4><b className="black-color">Sales</b></h4>
          <h5><b className="gray-color">(In Lakhs)</b></h5>
        </div>
      </div>
      <table className="table" style={{backgroundColor: 'white'}}>
        <tbody>
          <tr className="colorwhite BgcolorOrange">
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
          <tr className="zonerowone">
            <td>A.</td>
            <td>
            <button onClick={handleAnchorClicked} className="textlink"><b>Bihar</b></button>
              </td>
            <td>102.45</td>
            <td>18.54</td>
            <td>1.05</td>
            <td>62.47</td>
            <td>37.6</td>
            <td>657.39</td>
            <td>879.5</td>
          </tr>
          {isAnchorClicked && (
                <tr>
                  <td colSpan="9">
                    <TableRowWithCollapse />
                  </td>
                </tr>
              )}
              <tr className="zonerowtwo">
                <td>B.</td>
                <td>
                <button className="textlink">
                  <b>B & ND Kolkata</b>
                </button></td>
                <td>50445.55</td>
                <td>8400.66</td>
                <td>851.86</td>
                <td>8701.79</td>
                <td>49287.18</td>
                <td>39089.01</td>
                <td>156776.05</td>
              </tr>
              <tr className="zonerowone">
                <td>C.</td>
                <td>
                <button className="textlink">
                  <b>North East</b>
                </button>
                </td>
                <td>102.45</td>
                <td>18.54</td>
                <td>1.05</td>
                <td>62.47</td>
                <td>37.6</td>
                <td>657.39</td>
                <td>879.5</td>
              </tr>
              <tr className="zonerowtwo">
                <td>D.</td>
                <td>
                <button className="textlink">
                  <b>Tamilnadu & Kerala</b>
                </button></td>
                <td>50445.55</td>
                <td>8400.66</td>
                <td>851.86</td>
                <td>8701.79</td>
                <td>49287.18</td>
                <td>39089.01</td>
                <td>156776.05</td>
              </tr>
              <tr className="colorwhite BgcolorOrange">
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
  );
};

export default SubSalesTable;
