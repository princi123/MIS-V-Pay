import  {  useState } from "react";
import { API_SUMMARY_TRANSACTION } from "../../../Constant/apiConstant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../../Constant/apiConstant";

const Api = ({headers}) => {
  const [hide, setHide] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState()
  const [select_type, setSelectType] = useState("");
  const [assetClass, setAssetClass] = useState();
  const [transaction_summary_report, setTransactionSummaryReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();
  const fetchTransactionSummary = async () => {
     
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
      if(startDate>endDate)
      {
       toast.error("End Date must be Greater Than Start Date")
       setLoading(false);
       
      }      
      else{
     
        setLoading(true);
      
      const response = await axiosInstance.get(
        API_SUMMARY_TRANSACTION.DATA(queryParams),
        {
          method: "GET",
        }
      );
      const data = response.data;
      // const data = await response.json();
      setTransactionSummaryReport(data);
      setLoading(false)
      setHide(true)
    
      }
    } catch (error) {
      console.error("error fetching transaction summary data", error);
      throw new Error("Error fetching transaction summary data");
    }
  };

  const togglehide = async () => {
    try {
      await fetchTransactionSummary();

      setHide(true);
    } catch (error) {
      setHide(false);

      console.log(hide, "hide");

      toast.error("Please fill all the fields");
    }
  };
  const formatNumberToIndianFormat = (number) => {
    if (typeof number !== "number") {
      return number;
    }
  
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  return{
    hide,startDate, endDate, select_type,assetClass,transaction_summary_report,loading,
    togglehide,setAssetClass,setEndDate,setHide,setLoading,setSelectType,setStartDate,formatNumberToIndianFormat
  }
  
}

export default Api
