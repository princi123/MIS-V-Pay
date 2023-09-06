import { useState, useEffect } from "react";
import { API_REGION } from "../../../../Constant/apiConstant";
import axiosInstance from "../../../../Constant/apiConstant";


const RegionApi = (queryParams) => {
  const[transaction_summary_report_region, setTransactionSummaryReportRegion] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await axiosInstance.get(API_REGION.DATA(queryParams));
        const data = response.data;
        // const data = await response.json();
        setTransactionSummaryReportRegion(data);
      } catch (error) {
        console.error("Error fetching transaction data", error);
      }
    };
    fetchTransactionData();
  }, [queryParams]);

  return transaction_summary_report_region;
};

export default RegionApi;
