import React from "react";
import UfcApi from "../Api/UfcApi";

const TableRowWithCollapse = ({ pzone, startDate, endDate, select_type, assetClass,region_name }) => {
  const formattedStartDate = startDate.split("-").reverse().join("/");
  const formattedEndDate = endDate.split("-").reverse().join("/");
  
  const queryParams = new URLSearchParams({
    start_date: formattedStartDate,
    end_date: formattedEndDate,
    asset_class: assetClass,
    select_type: select_type,
    employee_code: 2941,
    p_zone: pzone,
    region_name: region_name
  });

  const transaction_summary_report_ufc = UfcApi(queryParams);

  return (
    <>
      <div className="new-component container-fluid p-0">
        <table className="table" style={{ backgroundColor: "white" }}>
          <thead>
            <tr className="">
              <th scope="col">UFC code</th>
              <th scope="col">UFC</th>
              <th scope="col">
                Region{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Equity{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Hybrid{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Arbitrage{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Passive(ex-Debt){" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Fixed Income{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Cash{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>

              <th scope="col">
                Total{" "}
                <img src="/mis_vpay/assets/images/up-down_icon.png" alt="" />
              </th>
            </tr>
          </thead>

          <tbody>
            {transaction_summary_report_ufc.map((ufc)=>(
                 <tr style={{ backgroundColor: "#DADADA" }}>
                 <td>
                   <button className="textlink">
                     <b>{ufc.UFC_CODE}</b>
                   </button>
                 </td>
                 <td>
                   <button className="textlink">
                     <b></b>
                   </button>
                 </td>
                <td></td>  
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRowWithCollapse;
