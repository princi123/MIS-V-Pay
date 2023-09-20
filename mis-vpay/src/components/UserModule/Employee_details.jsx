import React, { useState } from "react";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import "../UserModule/Employee_details.css";

const Employee_details = () => {
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
                <h4 className="p-3 a1">Employee Details</h4>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Employee ID</b></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label><b>Employee Name</b></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label><b>Email ID</b></label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Password</b></label>
                  <input type="password" className="form-control" />
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
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>CRM Reporting Role</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>CRM Power User</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Zone</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Region</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Location/UFC</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>KAM Group</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>NAM Group</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Functional Role</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>City</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Start Date</b></label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label><b>End Date</b></label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label><b>Status</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Petty Cash Claim</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-7">
                  <label><b>Remark</b></label>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>                   
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Select Quarter</b></label>
                  <select className="form-select">
                    <option value="">select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Valid From</b></label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label><b>Valid Upto</b></label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <label><b>HR Valid From</b></label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label><b>HR Valid Upto</b></label>
                  <input type="date" className="form-control" />
                </div>
              </div>



              <div className="col-md-12 d-flex justify-content-around mb-5 mt-5">
                <div className="col-md-9"></div>
                <div col-md-3>
                  <button type="btn" className="btn1"><b>Save</b></button>
                </div>
                <div col-md-3>
                  <button type="btn" className="btn1"><b>Cancel</b></button>
                </div>
                <div col-md-3>
                  <button type="btn" className="btn1"><b>Back</b></button>
                </div>           
              </div>
         

        </div>
      </div>
    </div >
      </div >
    </>
  )
}
export default Employee_details;