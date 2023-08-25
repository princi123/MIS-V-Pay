import React, { useEffect, useState } from "react";
import "./Retail.css";
import DropDown from "./DropDown";
import Filter from "./Filter";
import excel from "../Assets/images/excel_icon.png";
import pdf from "../Assets/images/pdf_icon.png";
import msg from "../Assets/images/msg_icon.png";
import calender from "../Assets/images/date-time_icon.png";
import SideBar from "../Shared/SideBar";
import Navbar from "../Shared/Navbar";
import SalesTable from "../Table/SalesTable";
import datetime from "../Assets/images/Vector (Stroke).png";
import ScheduleModal from "../Shared/Modal/ScheduleModal";
import Loading from "./Loading";
import Api from "./Api";
import { API_SCHEME_DETAILS } from "../../Constant/apiConstant";
import { ToastContainer } from "react-toastify";

const Retail_Transaction = ({headers}) => {
  const [scheme_details, setSchemeDetails] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    hide,
    startDate,
    endDate,
    assetClass,
    select_type,
    transaction_summary_report,
    loading,
    togglehide,
    setAssetClass,
    setEndDate,
    setSelectType,
    setStartDate,
  } = Api({headers});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_SCHEME_DETAILS.DATA);
        const data = await response.json();
        setSchemeDetails(data);
      } catch (error) {
        console.error("error fetching scheme details", error);
      }
    };
    fetchData();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <ToastContainer
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
      />

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
                    <h5 className="headline">
                      <b>RETAIL TRANSACTION SUMMARY REPORT ZONE WISE</b>
                    </h5>
                  </button>
                  <div>
                    <div className="col-lg-12 d-flex justify-content-lg-between mt-5 ">
                      <div className="form-group col-md-3">
                        <label
                          className="form-lables"
                          style={{ marginRight: "5px" }}
                        >
                          <b> Start Date </b>
                        </label>
                        <img src={datetime} alt="datetime" />
                        <input
                          type="date"
                          className="form-control mt-2"
                          placeholder="Project End Date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label
                          className="form-lables"
                          style={{ marginRight: "5px" }}
                        >
                          <b> End Date </b>
                        </label>
                        <img src={datetime} alt="datetime" />
                        <input
                          type="date"
                          className="form-control mt-2"
                          placeholder="Project End Date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                      {/* <div className="form-group col-md-2">
                      <label className="form-lables">
                        <b>Asset Class</b>
                      </label>
                      <select
                        name=""
                        id="ab"
                        className="form-select form-control mt-2"
                        value={assetClass}
                        onChange={(e) => setAssetClass(e.target.value)}
                      >
                        <option value="">All </option>
                        <option value="">Arbitrage </option>
                        <option value="">Cash </option>
                        <option value="">Equity </option>
                        <option value="">Fixed Income</option>
                      </select>
                    </div> */}
                      <div className="form-group col-md-2">
                        <label className="form-lables">
                          <b> Select Type</b>
                        </label>
                        <select
                          name=""
                          id="ab"
                          className="form-select form-control mt-2"
                          value={select_type}
                          onChange={(e) => setSelectType(e.target.value)}
                        >
                          <option>Choose Select Type </option>
                          <option value="netsales">NET SALES </option>
                          <option value="grosssales">GROSS SALES </option>
                        </select>
                      </div>
                      {/* <Filter />
                    <DropDown /> */}
                      {/* <div className="form-group col-md-2 mt-3">
                      <label className="form-lables">
                        <b> Scheme</b>
                      </label>
                      <select
                        name=""
                        id="ab"
                        className="form-select form-control mt-2"
                      >
                        {scheme_details.map((scheme) => (
                          <option value="" key={scheme.SCHEME}>
                            {scheme.SCHEME}
                          </option>
                        ))}
                      </select>
                    </div> */}
                      <div />
                      <div className="col-md-2 " style={{ marginTop: "30px" }}>
                        <p className="rcorners">
                          <img src={excel} alt="excelicon" /> |{" "}
                          <img src={pdf} alt="pdficon" />|{" "}
                          <img src={msg} alt="msgicon" /> |{" "}
                          <img
                            id="myImg"
                            src={calender}
                            alt="calendericon"
                            data-bs-toggle="modal"
                            data-bs-target="#scheduleModal"
                          />
                        </p>
                      </div>

                      <div className="col-md-1 " style={{ marginTop: "31px" }}>
                        <button
                          className="btn  BgcolorOrange "
                          onClick={togglehide}
                        >
                          <b className="colorwhite"> Search</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ScheduleModal />
              {hide && (
                <>
              
              <div className="Table">
                {loading ? (
                  <div className="text-center mt-4">
                    <i className="fas fa-spinner fa-spin fa-2x"></i> <Loading />
                  </div>
                ) : (
                  
                    <SalesTable
                      transaction_summary_report={transaction_summary_report}
                      startDate={startDate}
                      endDate={endDate}
                      assetClass={assetClass}
                      select_type={select_type}
                    />
                  
                )}
              </div>
              </>
                  )}
            </div>
          </div>
          </div>
          </div>
    </>
  );
};

export default Retail_Transaction;
