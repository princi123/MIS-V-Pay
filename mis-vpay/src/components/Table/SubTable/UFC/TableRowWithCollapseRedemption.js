import React, { useMemo, useState } from "react";
import UfcApi from "../Api/UfcApi";
import TableRowWithRedemption from "../RMWISE/TableRowWithRedemption";

const TableRowWithCollapseRedemption = ({
  pzone,
  startDate,
  endDate,
  select_type,
  region_name,formatNumberToIndianFormat
}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);

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
    });
  }, [startDate, endDate, region_name, select_type, pzone]);

  const transaction_summary_report_ufc = UfcApi(queryParams);

  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1);
    } else {
      setClickedIndex(index);
    }
  };

  return (
    <>
      <div className="new-component container-fluid ">
        <table className="mt-3 table nested-table" >
          <thead style={{ backgroundColor: "#4C6072",color:"white" }}>
            <tr className="">
              <th scope="col">UFC code</th>
              <th scope="col">UFC</th>
              <th scope="col" className="text-end">
                Equity
              </th>
              <th scope="col" className="text-end">
                Hybrid
              </th>
              <th scope="col" className="text-end">
                Arbitrage
              </th>
              <th scope="col" className="text-end">
                Passive(ex-Debt)
              </th>
              <th scope="col" className="text-end">
                Fixed Income
              </th>
              <th scope="col" className="text-end">
                Cash{" "}
              </th>
              <th scope="col" className="text-end">
                Total
              </th>
            </tr>
          </thead>

          <tbody style={{ backgroundColor: "#8080805c" }}>
            {transaction_summary_report_ufc.map((ufc, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <button
                      className="textlink"
                      onClick={() => handleButtonClick(index)}
                    >
                      <b>{ufc.UFC_CODE}</b>
                    </button>
                  </td>
                  <td >{ufc.UFC_NAME}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(ufc.REQUITY))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(ufc.RHYBRID))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(ufc.RARBITRAGE))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(ufc.RPASSIVE))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(ufc.RFIXED_INCOME))}</td>
                  <td className="text-end">{formatNumberToIndianFormat(parseFloat(ufc.RCASH))}</td>
                  <td className="text-end" style={{ backgroundColor: "#8080805c" }}>
                    <b>{formatNumberToIndianFormat(parseFloat(ufc.RTOTAL))}</b>
                  </td>

                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                    <td colSpan="9" className="p-0">
                      {clickedIndex === index && <TableRowWithRedemption 
                         startDate={startDate}
                         endDate={endDate}
                         select_type={select_type}
                         pzone={pzone}
                         region_name={region_name}
                         ufc_code={ufc.UFC_CODE}
                         formatNumberToIndianFormat={formatNumberToIndianFormat}
                      />}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRowWithCollapseRedemption;