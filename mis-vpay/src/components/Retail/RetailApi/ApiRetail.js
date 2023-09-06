// import React,{useState} from "react";
// import { SalesTable } from "../../Table/SalesTable";
// import { useEffect } from "react";
// import { API_SUMMARY_TRANSACTION } from "../../../Constant/apiConstant";



// export const ApiRetail =()=>{

    
//     // const [startDate, setStartDate] = useState("01/04/2023");
//     // const [endDate, setEndDate] = useState("30/09/2023")
//     //  const [select_type, setSelectType] = useState("");
//     // const [assetClass, setAssetClass] = useState(1);
//     // const [transaction_summary_report, setTransactionSummaryReport] = useState([]);
//     // console.log(startDate,"2")
//     // console.log(endDate,"2")
//     // console.log(select_type,"2")
//     // const fetchTransactionSummary = async () => {
//     //     console.log(startDate,"4")
//     //     console.log(endDate,"4")
//     //     console.log(select_type,"4")
//     //     try {
//     //       const formattedStartDate = startDate.split("-").reverse().join("/");
//     //       const formattedEndDate = endDate.split("-").reverse().join("/");
          
//     //       const queryParams = new URLSearchParams({
//     //         start_date:startDate ,
//     //         end_date:endDate ,
//     //         asset_class: 1,
//     //         select_type: "netsales",
//     //         employee_code: 2941,
//     //       });
//     //       if(startDate>endDate)
//     //       {
//     //     //    toast.error("End Date must be Greater Than Start Date")
//     //     //    setLoading(false);
           
//     //       }      
//     //       else{
//     //       const response = await fetch(
//     //         API_SUMMARY_TRANSACTION.DATA(queryParams),
//     //         {
//     //           method: "GET",
             
//     //         }
//     //       );
//     //       const data = await response.json();
//     //       console.log(transaction_summary_report,"sasa")
//     //     //   setTransactionSummaryReport(d);
         
        
//     //       }
//     //     } catch (error) {
//     //       console.error("error fetching transaction summary data", error);
//     //       throw new Error("Error fetching transaction summary data");
//     //     }
//     //   };
 
//     // useEffect(()=>{
//     //     fetchTransactionSummary();
//     // },[])
//    return(
//     <>
//      {/* <SalesTable  
//      transaction_summary_report={transaction_summary_report} 
//      startDate={startDate}  
//      endDate={endDate} 
//      select_type={select_type}
//      assetClass={assetClass}
     
//      /> */}
       
//     </>
//  )


// }
