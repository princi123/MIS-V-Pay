import React, { useState } from "react";
import "./Retail.css";
import DropDown from "./DropDown";
import Filter from "./Filter";
import excel from "../Assets/images/excel_icon.png";
import pdf from "../Assets/images/pdf_icon.png";
import msg from "../Assets/images/msg_icon.png";
import calender from "../Assets/images/date-time_icon.png";
import SideBar from "../Shared/SideBar";
import Navbar from "../Shared/Navbar";
import { Link } from "react-router-dom";
import SalesTable from "../Table/SalesTable";
import datetime from "../Assets/images/Vector (Stroke).png";
import ScheduleModal from "../Shared/Modal/ScheduleModal";
const Retail_Transaction = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const togglehide = () => {
    setHide(!hide);
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
            <div className="col-lg-12  ">
              <div className=" rounded-lg p-3">
                <button
                  className="border-0 w-100 text-left bg-transparent "
                  type="button"
                >
                  <h5 className="headline">
                    <b>RETAIL TRANSACTION SUMMARY REPORT ZONE WISE</b>
                  </h5>
                </button>
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md-3 ">
                      <div className="col-md-6">
                        <label className="form-lables gap-2">
                          <b> Start Date </b>
                        </label>{""}
                        <img src={datetime} alt="datetime" />
                      </div>
                      <input
                        type="date"
                        className="form-control mt-2"
                        placeholder="Project Start Date"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label className="form-lables">
                        <b> End Date </b>
                      </label>
                      <img src={datetime} alt="datetime" />
                      <input
                        type="date"
                        className="form-control mt-2"
                        placeholder="Project End Date"
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <label className="form-lables">
                        <b>Asset Class</b>
                      </label>
                      <select
                        name=""
                        id="ab"
                        className="form-select form-control mt-2"
                      >
                        <option value="">All </option>
                        <option value="">Arbitrage </option>
                        <option value="">Cash </option>
                        <option value="">Equity </option>
                        <option value="">Fixed Income</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label className="form-lables">
                        <b> Select Type</b>
                      </label>
                      <select
                        name=""
                        id="ab"
                        className="form-select form-control mt-2"
                      >
                        <option value="">Net sales </option>
                        <option value="">SIP Gross sales </option>
                      </select>
                    </div>
                    <Filter />
                    <DropDown />
                    <div className="form-group col-md-2 mt-3">
                      <label className="form-lables">
                        <b> Scheme</b>
                      </label>
                      <select
                        name=""
                        id="ab"
                        className="form-select form-control mt-2"
                      >
                        <option value="">grid 9 </option>
                      </select>
                    </div>
                    <div className="col-md-5" />
                    <div className="col-md-2 mt-5">
                      <p className="rcorners">
                        <img src={excel} alt="excelicon" /> |{" "}
                        <img src={pdf} alt="pdficon" />|{" "}
                        <img src={msg} alt="msgicon" /> |{" "}
                        <img id="myImg" src={calender} alt="calendericon" data-bs-toggle="modal" data-bs-target="#scheduleModal"/>
                      </p>
                    </div>
                    
                    <div className="col-md-1 mt-5">
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
            <ScheduleModal/>
            <div className="Table">{hide ? <SalesTable /> : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail_Transaction;
