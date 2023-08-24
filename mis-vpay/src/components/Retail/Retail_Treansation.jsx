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
const Retail_Treansation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [scheme_details, setSchemeDetails] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [select_type, setSelectType] = useState("");
  const [assetClass, setAssetClass] = useState();
  const [transaction_summary_report, setTransactionSummaryReport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:3000/api/v1/scheme_details"
        );
        const data = await response.json();
        setSchemeDetails(data);
      } catch (error) {
        console.error("error fetching scheme details", error);
      }
    };
    fetchData();
  }, []);

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
      const response = await fetch(
        `http://127.0.0.1:3000/api/v1/summary_transactions?${queryParams}`
      );
      const data = await response.json();
      setTransactionSummaryReport(data);
    } catch (error) {
      console.error("error fetching transaction summary data", error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const togglehide = () => {
    fetchTransactionSummary();
    setHide(true);
  };

  return (
    <div className="container-fluid p-0 home-main ">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
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
            <div className="Table">
              {hide ? (
                <SalesTable
                  transaction_summary_report={transaction_summary_report}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail_Treansation;
