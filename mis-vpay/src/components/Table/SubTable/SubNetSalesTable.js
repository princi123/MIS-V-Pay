import React,{useState,useMemo} from "react";
import "../SubTable/SubtableCSS/SubRedemptionTable.css";
import RegionApi from "./Api/RegionApi";
import TableRowWithCollapseNetSales from "./UFC/TableRowWithCollapseNetSales";


const SubNetSalesTable = ({ pzone, startDate, endDate, select_type, assetClass }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const queryParams = useMemo(() => {
    const formattedStartDate = startDate.split("-").reverse().join("/");
    const formattedEndDate = endDate.split("-").reverse().join("/");
    return new URLSearchParams({
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      asset_class: assetClass,
      select_type: select_type,
      employee_code: 2941,
      p_zone: pzone,
    });
  }, [startDate, endDate, assetClass, select_type, pzone]);

  const transaction_summary_report_region = RegionApi(queryParams);

  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1);
    } else {
      setClickedIndex(index); 
    }
  };
  return (
    <div className="new-component container-fluid p-0">
      <div className="row mt-2 bg-white">
        <div className="head">
          <h4><b className="black-color">Net Sales</b></h4>
          <h5><b className="gray-color">(In Lakhs)</b></h5>
        </div>
      </div>

      <table className="mt-3 table" style={{ backgroundColor: "white",border:"2px solid",borderColor:"#EE8B3A" }}>
          <thead>
            <tr className="colorwhite BgcolorOrange">
              <th scope="col">REGION</th>
              <th scope="col"className="text-end">Equity</th>
              <th scope="col"className="text-end">Hybrid</th>
              <th scope="col"className="text-end">Arbitrage</th>
              <th scope="col"className="text-end">Passive(ex-Debt)</th>
              <th scope="col"className="text-end">Fixed Income</th>
              <th scope="col" className="text-end">Cash </th>
              <th scope="col" className="text-end">Total</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#DDD" }}>           
            {transaction_summary_report_region.map((summary, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <button
                      className="textlink"
                      onClick={() => handleButtonClick(index)}
                    >
                      <b>{summary.REGION_NAME}</b>
                    </button>
                  </td>
                  <td className="text-end">{summary.NEQUITY}</td>
                  <td className="text-end">{summary.NHYBRID}</td>
                  <td className="text-end">{summary.NARBITRAGE}</td>
                  <td className="text-end">{summary.NPASSIVE}</td>
                  <td className="text-end">{summary.NFIXED_INCOME}</td>
                  <td className="text-end">{summary.NCASH}</td>
                  <td className="text-end" id="total">{summary.NTOTAL}</td>
                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                  <td colSpan="8" className="p-0">
                    {clickedIndex === index && <TableRowWithCollapseNetSales
                      region_name={summary.REGION_NAME}
                      startDate={startDate}  
                      endDate={endDate}       
                      assetClass={assetClass} 
                      select_type={select_type}
                      pzone={pzone}
                    />}
                  </td>
                </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
      </table>
    </div>
  );
};

export default SubNetSalesTable;
