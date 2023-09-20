import React, { useState } from "react";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import "../UserModule/Manage_user.css";

const Manage_user = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
        >
          <div className="container pt-3">
            <div className="card" style={{ borderRadius: "10px 10px 10px 10px " }}>
              <div>
                <h4 className="p-3 a1">Employee Search</h4>
              </div>
              <div>
                <div className="d-flex justify-content-around mt-3">
                  <div className="col-md-3">
                    <label> <b>Employee ID</b></label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label><b>Employee Name</b></label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label><b>Channel Code</b></label>
                    <select class="form-select">
                      <option>Select</option>
                      <option value="">PSUC</option>
                      <option value="">INST</option>
                      <option value="">SIP</option>
                      <option value="">PRDCT</option>
                      <option value="">UTIMF</option>
                      <option value="">RTL</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <div className="col-md-3">
                    <label><b>Status</b></label>
                    <select class="form-select">
                      <option>Select</option>
                      <option value="">Working</option>
                      <option value="">Not Working</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label><b>Employee Role</b></label>
                    <select class="form-select">
                      <option>Select</option>
                      <option value="">VRM</option>
                      <option value="">Dept of Fund Accounting</option>
                      <option value="">Region Head</option>
                      <option value="">Head (PRM)</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label><b>Location/UFC</b></label>
                    <select class="form-select">
                      <option value="">Select</option>
                      <option value="">Akola</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-around mb-5 mt-5">
                <div className="col-md-8"></div>
                <div col-md-3>
                  <button type="btn" className="btn1"><b>Search</b></button>
                </div>
                <div col-md-3>
                  <button type="btn" className="btn1"><b>Add New Record</b></button>
                </div>
                {/* <div col-md-2>
                  <button type="btn" className="btn1"><b>Login As User</b></button>
                </div>
                <div col-md-2>
                  <button type="btn" className="btn1"><b>Download</b></button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Manage_user;
