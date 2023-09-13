import React, { useMemo } from "react";
import RmApi from "../Api/RmApi";

const TableRowWithRedemption = ({
  pzone,
  startDate,
  endDate,
  select_type,
  region_name,
  ufc_code,formatNumberToIndianFormat
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
      <div className="new-component container-fluid ">
      <table className="mt-3 table nested-table"  >
          <thead style={{ backgroundColor: "rgb(58 94 147 / 98%)",color:"white" }} >
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
                    <b className="sharp-font">{rm.UFC_CODE}</b>
                  </button>
                </td>
                <td>
                  <button className="textlink">
                    <b className="sharp-font">{rm.UFC_NAME}</b>
                  </button>
                </td>
                <td>
                  <button className="textlink">
                    <b className="sharp-font">{rm.RMCODE}</b>
                  </button>
                </td>
                <td >{rm.RMNAME}</td>
                <td className="text-end">{rm.FUNCROLE}</td>
                <td className="text-end">{formatNumberToIndianFormat(parseFloat(rm.REQUITY))}</td>
                <td className="text-end">{formatNumberToIndianFormat(parseFloat(rm.RHYBRID))}</td>
                <td className="text-end">{formatNumberToIndianFormat(parseFloat(rm.RARBITRAGE))}</td>
                <td className="text-end">{formatNumberToIndianFormat(parseFloat(rm.RPASSIVE))}</td>
                <td className="text-end">{formatNumberToIndianFormat(parseFloat(rm.RFIXED_INCOME))}</td>
                <td className="text-end">{formatNumberToIndianFormat(parseFloat(rm.RCASH))}</td>
                <td className="text-end"><b>{formatNumberToIndianFormat(parseFloat(rm.RTOTAL))}</b></td>                        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRowWithRedemption;