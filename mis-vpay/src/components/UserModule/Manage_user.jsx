import React, { useState, useEffect } from "react";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import "../UserModule/Manage_user.css";
import { Link } from "react-router-dom";
import { API_MANAGE_EMPLOYEE_ROLE_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_USER_CHANNEL_CODE_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_LOCATION_DROPDOWN } from "../../Constant/apiConstant";

const Manage_user = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [employee_role, setEmployeeRole] = useState([]);
  const [channelCode, setChannelCode] = useState([]);
  const [locationUFC, setLocationUFC] = useState([]);

  const [isLocationDropdownActive, setLocationDropdownActive] = useState(false);
  const [isLoadingLocationDropdown, setLoadingLocationDropdown] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_MANAGE_USER_CHANNEL_CODE_DROPDOWN.DATA);
        const data = await response.json();
        setChannelCode(data);
      } catch (error) {
        console.error("Error fetching channel codes", error);
      }
    };
    fetchData();
  }, []);
 
  useEffect(() => {
    setEmployeeRole([]);
    setLocationUFC([]); 
    setSelectedRole("");
    setLocationDropdownActive(true);
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        channel_code: selectedChannel,
      });
      setLoadingLocationDropdown(true);
      try {
        const response = await fetch(API_MANAGE_EMPLOYEE_ROLE_DROPDOWN.DATA(queryParams));
        const data = await response.json();
        if (data && data.length > 0) {
          setEmployeeRole(data);
          setLocationDropdownActive(true);
        }
      } catch (error) {
        console.error("Error fetching employee roles", error);
      }
      finally {
        setLoadingLocationDropdown(false);
      }
    };
    if (selectedChannel !== "") {
      fetchData();
    }
  }, [selectedChannel]);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      employee_role: selectedRole,
    });
    const fetchData = async () => {
      setLoadingLocationDropdown(true);
      try {
        const response = await fetch(API_MANAGE_LOCATION_DROPDOWN.DATA(queryParams));
        const data = await response.json();
        setLocationUFC(data);
      } catch (error) {
        console.error("Error fetching locations/UFC", error);
      } finally {
        setLoadingLocationDropdown(false);
      }
    };
    if (selectedRole !== "") {
      fetchData();
    } else {
      setLocationUFC([]);
      setLocationDropdownActive(false);
    }
  }, [selectedRole]);
 

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
                    <label><b>Employee ID</b></label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label><b>Employee Name</b></label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <label><b>Channel Code</b></label>
                    <select className="form-select" value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
                      <option>Select</option>
                      {channelCode.map((item) =>
                        <option key={item.CHANNEL_CODE}>{item.CHANNEL_CODE}</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <div className="col-md-3">
                    <label><b>Status</b></label>
                    <select className="form-select">
                      <option>Select</option>
                      <option value="">Working</option>
                      <option value="">Not Working</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label><b>Employee Role</b></label>
                    <select className="form-select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}
                      disabled={!isLocationDropdownActive || isLoadingLocationDropdown}
                    >
                      <option>Select</option>
                      {employee_role.length > 0 && employee_role.map((item) => (
                        <option key={item.EMPLOYEE_ROLE_ID} value={item.DES}>{item.DES}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label><b>Location/UFC</b></label>
                    <select
                      className="form-select"
                      disabled={!isLocationDropdownActive || isLoadingLocationDropdown}
                    >
                      <option>Select</option>
                      {locationUFC.length > 0 && locationUFC.map((item) => (
                        selectedRole === 'RM' ? (
                          <option key={item.UFC_CODE} value={item.UFC_CODE}>{item.UFC_CODE} </option>
                        ) : (
                          <option key={item.REGION_CODE} value={item.REGION_CODE}>{item.REGION_CODE}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-around mb-5 mt-5">
                <div className="col-md-8"></div>
                <div>
                  <button type="btn" className="btn1"><b>Search</b></button>
                </div>
                <div className="mt-2">
                  <Link to="/employeedetails" className="btn1"><b>Add New Record</b></Link>
                </div>
                {/* 
                <div className="col-md-2">
                  <button type="btn" className="btn1"><b>Login As User</b></button>
                </div>
                <div className="col-md-2">
                  <button type="btn" className="btn1"><b>Download</b></button>
                </div> 
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage_user;
