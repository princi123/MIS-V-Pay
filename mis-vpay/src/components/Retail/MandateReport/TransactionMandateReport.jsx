import React, { useState } from "react";
import SideBar from "../../Shared/SideBar/SideBar";
import Navbar from "../../Shared/Navbar";
import "./TransactionMandateReport.css"
// import SalesTable from "../Table/SalesTable";
// import LoaderSearch from "../Table/SubTable/LoaderSearch";
// import Api from "./RetailApi/Api";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Scheme } from "../RetailApi/AUM_Api"; 
// import RedemptionTable from "../Table/RedemptionTable";
// import NetSalesTable from "../Table/NetSalesTable";
import { ExcelToExport } from "../ExcelToExport";
import ExportToPdf from "../ExportToPdf";

const TransactionMandateReport = () => {
  const { scheme_details } = Scheme();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

 

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}

      <div className="container-fluid p-0 home-main ">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >
            <div className="bg-white card m-4">
              <div className="col-l-12  ">
                <div className=" rounded-lg p-3">
                  <button
                    className="border-0 w-100 text-left bg-transparent "
                    type="button"
                  >
                    <h5 className="headline-2">
                      <b>RTL-SIP ZoneWise Transaction Summary</b>
                    </h5>
                  </button>
                  <div>
                    <div className="col-lg-12 d-flex justify-content-around mt-5 ">
                      <div className="form-group col-md-2">
                        <label className="form-lables-2">
                          <b>Asset Class</b>
                        </label>
                        <select
                          name=""
                          id="ab"
                          className="form-select form-control mt-2"
                          
                        //   onChange={(e) => setAssetClass(e.target.value)}
                        >
                          <option value="">All </option>
                          <option value="">Arbitrage </option>
                          <option value="">Cash </option>
                          <option value="">Equity </option>
                          <option value="">Fixed Income</option>
                          <option value="">Hybrid </option>
                          <option value="">Passive (EX DEBT)</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label className="form-lables-2">
                          <b>Status</b>
                        </label>
                        <select
                          name=""
                          id="ab"
                          className="form-select form-control mt-2"
                        //   onChange={(e) => setSelectType(e.target.value)}
                        >
                          <option>Live</option>
                          <option value="netsales">New Registration </option>
                          <option value="grosssales">Live-Base</option>
                          <option value="netsales">Terminated</option>
                          <option value="grosssales">Gross Sale</option>
                          <option value="grosssales">Farewell Login Contest</option>
                        </select>
                      </div>
                     
                  
                      <div className="form-group col-md-2 m-md-0 mt-3">
                        <label className="form-lables-2">
                          <b> Scheme</b>
                        </label>
                        {
                          <select
                          name=""
                          id="ab"
                          className="form-select form-control mt-2"
                          >
                            {scheme_details.map((item) => (
                                <option key={item.SCHEME}>{item.SCHEME}</option>
                                ))}
                          </select>
                        }
                      </div>
                      <div className="col-md-2">
                    <label className="form-lables-2 ">
                          <b>Transaction Type</b>
                        </label>
                        <select
                          className="form-select  mt-2"
                          //   onChange={(e) => setSelectType(e.target.value)}
                          >
                          <option value="netsales">SIP</option>
                          <option value="grosssales">STP</option>
                        </select>
                    </div>
                      <div />
                        </div>
                    <div className="d-flex">
                    <div  className="col-lg-12 d-flex justify-content-around ">
                        <div className="col-md-2"></div>
                       
                    <div className=" d-flex justify-content-between mt-5 ">
                    
                      <div className="col-md-2 ">
                        <button
                          className="btn  BgcolorOrange "
                          //   onClick={togglehide}
                          >
                          <b className="colorwhite"> Search</b>
                        </button>
                      </div>
                          <div className="col-md-4"></div>
                      <div className="col-md-2 ">
                        <p className="rcorners-2">
                          <ExcelToExport  />
                          |<ExportToPdf />
                        </p>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <>
                <div className="Table">
                  {/* {loading ? (
                    <div className="text-center mt-4">
                      <i className="fas fa-spinner fa-spin fa-2x"></i>{" "}
                      <LoaderSearch />
                    </div>
                  ) : (
                    hide && (
                      <div>
                        <SalesTable
                         
                        />
                        <RedemptionTable
                      
                        />
                        <NetSalesTable
                          
                        />
                      </div>
                    )
                  )} */}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TransactionMandateReport;
