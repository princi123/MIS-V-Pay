import React, { useState, useEffect } from "react";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import "../UserModule/Employee_details.css";
import { Link } from "react-router-dom";
import { API_MANAGE_USER_CHANNEL_CODE_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_EMPLOYEE_ROLE_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_REGION_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_UFC_LOCATION_DROPDOWN } from "../../Constant/apiConstant";
import { API_MANAGE_USER_ZONE_DROPDOWN } from "../../Constant/apiConstant";
import { Usermodulereportingroledropdown } from "./Usermoduleapi";
import { Usermodulepoweruserdropdown } from "./Usermoduleapi";
import { Usermodulfunctionalroledropdown } from "./Usermoduleapi";
import { Usermodulecitydropdown } from "./Usermoduleapi";
import { UsermodulQuarterdropdown } from "./Usermoduleapi_1";

const Employee_details = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [employee_role, setEmployee_role] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("");
  const [regionCode, setRegionCode] = useState("");
  const [zoneCode, setZoneCode] = useState(""); 
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isLoadingDropdown, setLoadingDropdown] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const queryParams = new URLSearchParams({
    city_type: 'T5',
    valid_upto: '30-12-99',
  });

  const { reporting_role } = Usermodulereportingroledropdown();
  const { power_user } = Usermodulepoweruserdropdown();
  const { functional_role } = Usermodulfunctionalroledropdown();
  const { quarter } = UsermodulQuarterdropdown();
  const { city } = Usermodulecitydropdown(queryParams);

  const [channelCode, setChannelCode] = useState([]);
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
  if (setChannelCode == "") {
    setEmployee_role([]);
  }

  useEffect(() => {
    setEmployee_role([]);
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        channel_code: selectedChannel,
      });
      setLoadingDropdown(true);
      try {
        const response = await fetch(API_MANAGE_EMPLOYEE_ROLE_DROPDOWN.DATA(queryParams));
        const data = await response.json();
        if (data && data.length > 0) {
          setEmployee_role(data);
          setDropdownActive(true);
        }
      } catch (error) {
        console.error("Error fetching employee roles", error);
      }
      finally {
        setLoadingDropdown(false);
      }
    };
    if (selectedChannel !== "") {
      fetchData();
    }
  }, [selectedChannel]);

  const [zone, setZone] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        channel_code: selectedChannel,
        valid_upto: '30-12-99',
      })
      setLoadingDropdown(true);
      try {
        const response = await fetch(API_MANAGE_USER_ZONE_DROPDOWN.DATA(queryParams));
        const data = await response.json();
        setZone(data);
      } catch (error) {
        console.error("Error fetching region details", error);
      }finally {
        setLoadingDropdown(false);
      }
    };
    fetchData();
  }, [selectedChannel]);

  const [region, setRegion] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        channel_code: selectedChannel,
        valid_upto: '30-12-99',
      })
      setLoadingDropdown(true);
      try {
        const response = await fetch(API_MANAGE_REGION_DROPDOWN.DATA(queryParams));
        const data = await response.json();
        setRegion(data);
      } catch (error) {
        console.error("Error fetching region details", error);
      }
      finally {
        setLoadingDropdown(false);
      }
    };
    fetchData();
  }, [selectedChannel]);

  const [loactionUfc, setLocationUfc] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        region_code: regionCode,
        channel_code: selectedChannel,
        valid_upto: '30-12-99',
      })
      setLoadingDropdown(true);
      try {
        const response = await fetch(API_MANAGE_UFC_LOCATION_DROPDOWN.DATA(queryParams));
        const data = await response.json();
        setLocationUfc(data);
      } catch (error) {
        console.error("Error fetching region details", error);
      }finally {
        setLoadingDropdown(false);
      }
    };
    fetchData();
  }, [regionCode, selectedChannel])

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
                  <select class="form-select" value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
                    <option>Select</option>
                    {channelCode.map((item) =>
                      <option key={item.CHANNEL_CODE}>{item.CHANNEL_CODE}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Employee Role</b></label>
                  <select className="form-select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}
                    disabled={!isDropdownActive || isLoadingDropdown}
                  >
                    <option>Select</option>
                    {employee_role.length > 0 && employee_role.map((item) => (
                      <option key={item.EMPLOYEE_ROLE_ID} value={item.DES}>{item.DES}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>CRM Reporting Role</b></label>
                  <select class="form-select">
                    <option>Select</option>
                    {reporting_role.map((item) =>
                      <option >{item.REPORTING_ROLE}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>CRM Power User</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                    {power_user.map((item) =>
                      <option >{item.POWER_USER_CODE_DESC}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Zone</b></label>
                  <select class="form-select" value={zoneCode} onChange={(e) => setZoneCode(e.target.value)}
                    disabled={!isDropdownActive || isLoadingDropdown}
                  >
                    <option value="">select</option>
                    {zone.length > 0 && zone.map((item) =>
                      <option key={item.ZONE}>{item.ZONE}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Region</b></label>
                  <select className="form-select" value={regionCode} onChange={(e) => setRegionCode(e.target.value)}
                    disabled={!isDropdownActive || isLoadingDropdown}>
                    <option>Select</option>
                    {region.length > 0 && region.map((item) =>
                      <option key={item.REGION_CODE}>{item.REGION_CODE}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Location/UFC</b></label>
                  <select class="form-select" disabled={!isDropdownActive || isLoadingDropdown}>
                    <option value="">select</option>
                    {loactionUfc.length > 0 && loactionUfc.map((item) =>
                      <option key={item.UFC_NAME} value={item.UFC_NAME}>{item.UFC_NAME}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>KAM Group</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                    <option value="">BOTH</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>NAM Group</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                    <option value="">BOTH</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>Functional Role</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                    {functional_role.map((item) =>
                      <option >{item.FUNCTION}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label><b>City</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                    {city.map((item) =>
                      <option >{item.CITY_NAME}</option>
                    )}
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
                    <option value="">Working</option>
                    <option value="">Not Working</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <div className="col-md-3">
                  <label><b>Petty Cash Claim</b></label>
                  <select class="form-select">
                    <option value="">select</option>
                    <option value="">YES</option>
                    <option value="">NO</option>
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
                    {quarter.map((item) =>
                      <option >{item.YEAR}</option>
                    )}
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
                <div >
                  <button type="btn" className="btn1" ><b>Save</b></button>
                </div>
                <div >
                  <button type="btn" className="btn1"><b>Cancel</b></button>
                </div>
                <div className="mt-2">
                  <Link to="/manageuser" className="btn1" ><b>Back</b></Link>
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
