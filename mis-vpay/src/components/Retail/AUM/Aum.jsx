import React, { useState  } from "react";
import { Link } from "react-router-dom";
import "./Aum.css";


const Aum = () => {

  const data = [
    {
      Zone: "E-ARN ",

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

    {
      Zone: "EAST",

      TotalAUM: 1200000,

      AUM: {
        Equity: 450000,

        Hybrid: 180000,

        Arbitrage: 90000,

        Passive: 160000,

        "Fixed Income": 110000,

        Cash: 60000,
      },
    },

    {
      Zone: "FINTECH",

      TotalAUM: 1200000,

      AUM: {
        Equity: 450000,

        Hybrid: 180000,

        Arbitrage: 90000,

        Passive: 160000,

        "Fixed Income": 110000,

        Cash: 60000,
      },
    },

    {
      Zone: "GULF",

      TotalAUM: 1200000,

      AUM: {
        Equity: 450000,

        Hybrid: 180000,

        Arbitrage: 90000,

        Passive: 160000,

        "Fixed Income": 110000,

        Cash: 60000,
      },
    },

    {
      Zone: "NORTH",

      TotalAUM: 1200000,

      AUM: {
        Equity: 450000,

        Hybrid: 180000,

        Arbitrage: 90000,

        Passive: 160000,

        "Fixed Income": 110000,

        Cash: 60000,
      },
    },

    {
      Zone: "NO MAPPING",

      TotalAUM: 1200000,

      AUM: {
        Equity: 450000,

        Hybrid: 180000,

        Arbitrage: 90000,

        Passive: 160000,

        "Fixed Income": 110000,

        Cash: 60000,
      },
    },

    {
      Zone: "SOUTH",

      TotalAUM: 1200000,

      AUM: {
        Equity: 450000,

        Hybrid: 180000,

        Arbitrage: 90000,

        Passive: 160000,

        "Fixed Income": 110000,

        Cash: 60000,
      },
    },
  ];

  return (
    <>
      <div className="container-fluid p-0">
        <div className="card" style={{paddingLeft:"10px"}}>
         <div className=" d-flex" style={{paddingLeft:"10px",paddingBottom:"10px"}}>
         <div className="col-md-3 d-flex">
                  <h4>
                    <b>SALES</b>
                  </h4>
                  <h5>
                    <b className="gray-color">(In Lakhs)</b>
                  </h5>
                </div>
                <div className="col-md-2 list-group">
                  <p className="theader">
                    <b>All India Region Wise</b>
                  </p>
                </div>
                <div className="col-md-2">
                  <p className="theader">
                    <b>All India UFC Wise </b>
                  </p>
                </div>
                <div className="col-md-2">
                  <p className="theader">
                    <b>All India RM Wise </b>
                  </p>
                </div>
         </div>
          <div className="col-md-12 d-flex justify-content-center"></div>
          <table className="table table-bordered table-striped">
            <thead className="Aum-Head headtable ">
              <tr className="mid ">
                <th rowSpan="2" className="headtbl">
                  Sr.No
                </th>
                <th rowSpan="2" className="headtbl">
                  Zone
                </th>
                <th rowSpan="2" className="headtbl">
                  Total AUM
                </th>
                <th colSpan="6">AUM</th>
              </tr>
              <tr>
                <th className="forright ">Equity</th>
                <th className="forright">Hybrid</th>
                <th className="forright">Arbitrage</th>
                <th className="forright">Passive</th>
                <th className="forright">Fixed Income</th>
                <th className="forright">Cash</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
               
                  <tr key={item.SrNo}>
                    <td>{item.SrNo}</td>
                    <td>{item.Zone}</td>
                    <td className="forright">{item.TotalAUM}</td>
                    <td className="forright">{item.AUM.Equity}</td>
                    <td className="forright">{item.AUM.Hybrid}</td>
                    <td className="forright">{item.AUM.Arbitrage}</td>
                    <td className="forright">{item.AUM.Passive}</td>
                    <td className="forright">{item.AUM["Fixed Income"]}</td>
                    <td className="forright">{item.AUM.Cash}</td>
                  </tr>
                
              ))}
              
               <tr className="total">
                <td colSpan={2} className="forright">
                  Total
                </td>
                <td className="forright">2000</td>
                <td className="forright">2000</td>
                <td className="forright">2000</td>
                <td className="forright">20000</td>
                <td className="forright">21000</td>
                <td className="forright">20000</td>
                <td className="forright">200000</td>
              </tr>
               
            </tbody>
          </table>
        </div>
        <div className="col-md-12 d-flex justify-content-center"></div>
        <table className="table table-bordered table-striped">
          <thead className="Aum-Head headtable">
            <tr className="mid">
              <th rowSpan="4" className="headtbl">
                Zone
              </th>
              <th rowSpan="2" className="headtbl">
                Total AUM
              </th>
              <th colSpan="6">AUM</th>
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
              <tr key={item.Zone}>
                <td>
                  <Link className="textlink" to="/RetailZoneReport" >
                    {item.Zone}
                  </Link>
                </td>
                <td className="forright">{item.TotalAUM}</td>

                <td className="forright">{item.AUM.Equity}</td>

                <td className="forright">{item.AUM.Hybrid}</td>

                <td className="forright">{item.AUM.Arbitrage}</td>

                <td className="forright">{item.AUM.Passive}</td>

                <td className="forright">{item.AUM["Fixed Income"]}</td>

                <td className="forright">{item.AUM.Cash}</td>
              </tr>
            ))}
            <tr className="total">
              <td colSpan={1} className="forright">
                Total
              </td>
              <td className="forright">2000</td>
              <td className="forright">2000</td>
              <td className="forright">2000</td>
              <td className="forright">20000</td>
              <td className="forright">21000</td>
              <td className="forright">20000</td>
              <td className="forright">200000</td>
            </tr>
          </tbody>
        </table>
      </div>
   
  </>
  );
};

export default Aum;
