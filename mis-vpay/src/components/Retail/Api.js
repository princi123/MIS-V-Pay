import  {  useState } from "react";
import { API_SUMMARY_TRANSACTION } from "../../Constant/apiConstant";

const Api = () => {
  const [hide, setHide] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState()
  const [select_type, setSelectType] = useState("");
  const [assetClass, setAssetClass] = useState();
  const [transaction_summary_report, setTransactionSummaryReport] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchTransactionSummary = async () => {
     setLoading(true);
    try {
      const formattedStartDate = startDate.split("-").reverse().join("/");
      const formattedEndDate = endDate.split("-").reverse().join("/");

      const queryParams = new URLSearchParams({
        start_date: formattedStartDate,
        end_date: formattedEndDate,
        asset_class: 1,
        select_type: select_type,
        employee_code: 2941,
      });
      const response = await fetch(
        API_SUMMARY_TRANSACTION.DATA(queryParams)
      );
      const data = await response.json();
      setTransactionSummaryReport(data);
      setLoading(false)
    } catch (error) {
      console.error("error fetching transaction summary data", error);
    }
  };

  const togglehide = () => {
    fetchTransactionSummary();
    setHide(true);
  };

  return{
    hide,startDate, endDate, select_type,assetClass,transaction_summary_report,loading,
    togglehide,setAssetClass,setEndDate,setHide,setLoading,setSelectType,setStartDate
  }
  
}

export default Api
