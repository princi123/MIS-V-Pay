import React,{useState} from "react";
import "./RetailZhReport.css"
import { Link } from "react-router-dom";
import SideBar from "../../Shared/SideBar";
import Navbar from "../../Shared/Navbar";
const data = [
  {
    SrNo: 1,
    Zone: "Zone A",
    Region: "Bihar",
    TotalAUM: 1000000,
    AUM: {
      Equity: 400000,
      Hybrid: 200000,
      Arbitrage: 100000,
      Passive: 150000,
      "Fixed Income": 100000,
      Cash: 50000,
    },
  },
  // Add more data entries as needed
];



const  RetailZhReport=()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
     
      <div className="container-fluid p-0">
      <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >
      <p className="headline ">Retail ZH/RH/RM Region Report  </p>
      <div className="col-md-12 col-md-12 d-flex justify-content-center ">
          <div className="card w-25 mt-2">
            <div className="d-flex justify-content-center">
              <button className="btn export">Export</button>
            </div>
          </div>
        </div>
        <br />
        <p className="sub">
          <b>Rs. in Lakhs</b>
        </p>
        <table className="table table-bordered table-striped">
          <thead className="BgcolorOrange headtable">
            <tr className="mid ">
              <th rowSpan="2"className="headtable">Sr.No</th>
              <th rowSpan="2" className="headtable">Zone</th>
              <th rowSpan="2" className="headtable">Region</th>
              <th rowSpan="2" className="headtable">Total AUM</th>
              <th colSpan="6" >AUM</th>
            </tr>
            <tr>
              <th className="forright">Equity</th>
              <th className="forright">Hybrid</th>
              <th className="forright">Arbitrage</th>
              <th className="forright">Passive</th>
              <th className="forright">Fixed Income</th>
              <th className="forright">Cash</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <><tr key={item.SrNo}>
                    <td>{item.SrNo}</td>
                    <td>{item.Zone}</td>
                    <td><Link to="/Aumreport">{item.Region}</Link></td>
                    <td className="forright">{item.TotalAUM}</td>
                    <td className="forright">{item.AUM.Equity}</td>
                    <td className="forright">{item.AUM.Hybrid}</td>
                    <td className="forright">{item.AUM.Arbitrage}</td>
                    <td className="forright">{item.AUM.Passive}</td>
                    <td className="forright">{item.AUM["Fixed Income"]}</td>
                    <td className="forright">{item.AUM.Cash}</td>

                </tr><tr className="total">
                        
                        <td colSpan="2" className="forright">Total</td>
                        <td></td>
                        <td className="forright">{item.TotalAUM}</td>
                        <td className="forright">{item.AUM.Equity}</td>
                        <td className="forright">{item.AUM.Hybrid}</td>
                        <td className="forright">{item.AUM.Arbitrage}</td>
                        <td className="forright">{item.AUM.Passive}</td>
                        <td className="forright">{item.AUM["Fixed Income"]}</td>
                        <td className="forright">{item.AUM.Cash}</td>

                    </tr></>
              
              
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default RetailZhReport;
