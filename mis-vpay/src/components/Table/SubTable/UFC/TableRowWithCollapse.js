import React,{useMemo,useState} from "react";
import UfcApi from "../Api/UfcApi";
import TableRowWithSales from "../RMWISE/TableRowWithSales";

const TableRowWithCollapse = ({ pzone, startDate, endDate, select_type,region_name }) => {
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
      region_name: region_name

    });
  }, [startDate, endDate, region_name, select_type, pzone]);
  const transaction_summary_report_ufc = UfcApi(queryParams);
  
  const [clickedIndex, setClickedIndex] = useState(-1);
  const handleButtonClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(-1);
    } else {
      setClickedIndex(index); 
    }
  };
 
  return (
    <>
      <div className="new-component container-fluid p-0">
        <table className="table" >
          <thead style={{ backgroundColor: "#768780bf" }}>
            <tr className="">
              <th scope="col">UFC code</th>
              <th scope="col">UFC</th>
              <th scope="col"className="text-end">Equity</th>
              <th scope="col"className="text-end">Hybrid</th>
              <th scope="col"className="text-end">Arbitrage</th>
              <th scope="col"className="text-end">Passive(ex-Debt)</th>
              <th scope="col"className="text-end">Fixed Income</th>
              <th scope="col" className="text-end">Cash </th>
              <th scope="col"className="text-end" >Total</th>
            </tr>
          </thead>

          <tbody style={{ backgroundColor: "#8080805c" }}>
            {transaction_summary_report_ufc.map((ufc,index)=>(
                
                <React.Fragment key={index}>
                <tr >
                  <td>
                    <button
                      className="textlink"
                      onClick={() => handleButtonClick(index)}
                    >
                      <b>{ufc.UFC_CODE}</b>
                    </button>
                  </td>
                  <td>{ufc.UFC_NAME}</td>
                  <td className="text-end">{ufc.SEQUITY}</td>
                  <td className="text-end">{ufc.SHYBRID}</td>
                  <td className="text-end">{ufc.SARBITRAGE}</td> 
                  <td className="text-end">{ufc.SPASSIVE}</td> 
                  <td className="text-end">{ufc.SFIXED_INCOME}</td> 
                  <td className="text-end">{ufc.SCASH}</td>
                  <td className="text-end"style={{ backgroundColor: "#8080805c" }} ><b>{ufc.STOTAL}</b></td>  
                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                  <td colSpan="9" className="p-0">
                    {clickedIndex === index && 
                      <TableRowWithSales
                        startDate={startDate}
                        endDate={endDate}
                        select_type={select_type}
                        pzone={pzone}
                        region_name={region_name}
                        ufc_code={ufc.UFC_CODE}
                      />                     
                    }
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

export default TableRowWithCollapse;
