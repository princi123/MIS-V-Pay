import React, { useState, useEffect } from "react";
import "../AUM/Search.css";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import Aum from "./Aum";
import { usePeriodApi } from "../RetailApi/AUM_Api";
import excel from "../../Assets/images/excel_icon.png";
import { ExportToExcel } from "./ExportToExcel";
import ExportToPDF from "./ExportToPDF";
const Search = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hide, setHide] = useState(false);

  const { aum_period } = usePeriodApi();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExport = () => {
    ExportToExcel(aum_period, "AUM Report");
  };
  const SearchOnClick = async (e) => {
    setHide(true);
  };

  return (
    <div className="container-fluid p-0 home-main">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
        >
          <div className="bg-white card m-4" style={{ borderRadius: "10px" }}>
            <div className="col-md-12">
              <div className="headline pt-4" style={{ paddingLeft: "20px" }}>
                <b>Daily Retail RH CH RM Zone Wise Performance</b>
              </div>
              <div className="d-flex justify-content-center mb-5 mt-5">
                <div className="col-md-8 d-flex">
                  <div className="col-md-6">
                    <label style={{ paddingLeft: "10px" }}>
                      {" "}
                      <b>Select Period</b>
                    </label>
                    <select className="form-select m-2">
                      <option value="">Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="d-flex mx-3">
                    <div className="col-md-6" style={{ marginTop: "30px" }}>
                      <button
                        className="BgcolorOrange btn"
                        style={{ marginRight: "5px", padding: "11px" }}
                        onClick={SearchOnClick}
                      >
                        Search
                      </button>
                    </div>
                    <div className="col-md-6  " style={{ marginTop: "30px" }}>
                      <p className="icon">
                        <button onClick={handleExport} className="border-0">
                          <img src={excel} alt="excelicon" />
                        </button>
                        |
                        <ExportToPDF />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {hide && <Aum />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
