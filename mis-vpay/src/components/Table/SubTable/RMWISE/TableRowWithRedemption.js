import React, { useMemo } from "react";
import RmApi from "../Api/RmApi";

const TableRowWithRedemption = ({
  pzone,
  startDate,
  endDate,
  select_type,
  region_name,
  ufc_code,
}) => {
  const queryParams = useMemo(() => {
    const formattedStartDate = startDate.split("-").reverse().join("/");
    const formattedEndDate = endDate.split("-").reverse().join("/");
    return new URLSearchParams({
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      asset_class: 1,
      select_type: select_type,
      employee_code: 2941,
      p_zone: pzone,
      region_name: region_name,
      ufc_code: ufc_code,
    });
  }, [startDate, endDate, region_name, select_type, pzone, ufc_code]);
  const transaction_summary_report_rm = RmApi(queryParams);
  return (
    <>
      <div className="new-component container-fluid p-0">
      <table className="table" style={{ backgroundColor: "#2530b170" }} >
          <thead >
            <tr className="">
              <th scope="col">UFC Code</th>
              <th scope="col">UFC NAME</th>
              <th scope="col">RM CODE</th>
              <th scope="col">RM NAME</th>
              <th scope="col">FUNCROLE</th>
              <th scope="col"className="text-end">Equity</th>
              <th scope="col"className="text-end">Hybrid</th>
              <th scope="col"className="text-end">Arbitrage</th>
              <th scope="col"className="text-end">Passive(ex-Debt)</th>
              <th scope="col"className="text-end">Fixed Income</th>
              <th scope="col"className="text-end">Cash</th>
              <th scope="col"className="text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            {transaction_summary_report_rm.map((rm) => (
              <tr style={{ backgroundColor: "#dee2e69c" }}>
                <td>
                  <button className="textlink">
                    <b>{rm.UFC_CODE}</b>
                  </button>
                </td>
                <td>
                  <button className="textlink">
                    <b>{rm.UFC_NAME}</b>
                  </button>
                </td>
                <td>
                  <button className="textlink">
                    <b>{rm.RMCODE}</b>
                  </button>
                </td>
                <td className="text-end">{rm.RMNAME}</td>
                <td className="text-end">{rm.FUNCROLE}</td>
                <td className="text-end">{rm.REQUITY}</td>
                <td className="text-end">{rm.RHYBRID}</td>
                <td className="text-end">{rm.RARBITRAGE}</td>
                <td className="text-end">{rm.RPASSIVE}</td>
                <td className="text-end">{rm.RFIXED_INCOME}</td>
                <td className="text-end">{rm.RCASH}</td>  
                <td className="text-end"><b>{rm.RTOTAL}</b></td>                            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRowWithRedemption;
