import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Assets/css/Shared/Sidebar.css';
import home from "../Assets/images/home.svg";
import Retails from "../Assets/images/retail.svg";
import mapping from "../Assets/images/mapping icon.png";
import Retails_bank from "../Assets/images/Retail Bank icon.png";
import Named_inst from "../Assets/images/Named Inst icon.png";
import Digital_Team from "../Assets/images/Digital Team icon.png";
import Manager_user from "../Assets/images/manage user.png";
import Service_request from "../Assets/images/Service request icon.png";
import statistics from "../Assets/images/Statistics Report icon.png";
import stragies from "../Assets/images/Strategic Alliance icon.png";
import Channel from "../Assets/images/Channel Wise Sales icon.png";

const SideBar = ({ isOpen }) => {

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="col-md-2 w-100" style={{ marginLeft: "5px", marginBottom: "5px" }} >
          <div className="card card_active" id="main-side-card-active">
            <Link className="side-link-active" to="/Home" >
              <div className="side-home">
                <img src={home} alt="home" className=" side-img p-1" />
                <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Home</span>
              </div>
            </Link>
          </div>
          {/* Code For Second */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 id="flush-headingOne" style={{ paddingLeft: "-1px", paddingRight: "5px", marginTop: "-2px", marginBottom: "-4px" }}>
                <button className=" collapsed p-0  py-1 side-link  " id="main-side-c" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className=" mt-1 side-home text-start w-100">
                    <img src={Retails} alt="home" width="12%" height="12%" className=" side-img p-1" />
                    <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Retail</span>
                  </div>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body p-0">
                  <div className="accordion accordion-flush" id="subAccordion1">
                    <div className="accordion-item">
                      <h2 className="" id="sub-accordion-heading1" style={{ backgroundColor: "#EE8B3A", marginLeft: "5px", marginRight: "10px", borderRadius: "5px" }} >
                        <button className=" collapsed m-2 p-0 sales-retails border-0" type="button" data-bs-toggle="collapse" data-bs-target="#sub-accordion-collapse" aria-expanded="false" aria-controls="sub-accordion-collapseOne">
                          <span className={`sidebar ${isOpen ? '' : 'closed'}`}>
                            Sales/Redemption/Net/ SIP Sales Reports
                          </span>
                        </button>
                      </h2>
                      <div id="sub-accordion-collapse" className="accordion-collapse collapse" aria-labelledby="sub-accordion-heading1" data-bs-parent="#subAccordion1">
                        <div className="accordion-body p-0 text-center">
                          <Link to="/Transaction" id="sub-accor-active"> <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Transaction Summary Reports</span></Link>
                          <button className="mt-2 p-0 pb-2 pt-2" id="sub-accor" ><span className={`sidebar ${isOpen ? '' : 'closed'}`} style={{ marginLeft: "21px", marginRight: "11px" }}>Transaction Amount Summary</span> </button>
                          <button id="sub-accor"><span className={`sidebar ${isOpen ? '' : 'closed'}`}>ARN Transaction Reports</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body p-0">
                  <div className="accordion accordion-flush" id="subAccordion">
                    <div className="accordion-item">
                      <h2 className="" id="sub-accordion-headingOne" style={{ backgroundColor: "#EE8B3A", marginLeft: "5px", marginRight: "10px", borderRadius: "5px" }} >
                        <button className=" collapsed m-2 p-0 sales-retails border-0" type="button" data-bs-toggle="collapse" data-bs-target="#sub-accordion-collapseOne" aria-expanded="false" aria-controls="sub-accordion-collapseOne">
                          <span className={`m-3 sidebar ${isOpen ? '' : 'closed'}`}>
                            AUM/KRA Based Reports
                          </span>
                        </button>
                      </h2>
                      <div id="sub-accordion-collapseOne" className="accordion-collapse collapse" aria-labelledby="sub-accordion-headingOne" data-bs-parent="#subAccordion">
                        <div className="accordion-body p-0 text-center">
                          <Link to="/Aum" > <span className={`sidebar ${isOpen ? '' : 'closed'}`} style={{ backgroundColor: "#352d94", color: "white", paddingLeft: "4px", paddingTop: "12px", paddingBottom: "10px", fontSize: "12px", fontWeight: "bold", paddingRight: "5px", borderRadius: "5px", borderColor: "white", textDecoration: "none" }}>CH/ZH/RH/CM/RM Performance Report</span></Link>
                          <button className="mt-2 p-0 pb-2 pt-2" id="sub-accor" ><span className={`sidebar ${isOpen ? '' : 'closed'}`} style={{ marginLeft: "61px", marginRight: "59px" }}>Detail View Report</span> </button>
                          <button id="sub-accor"><span className={`sidebar ${isOpen ? '' : 'closed'}`} >ARM Wise Report</span></button>
                          <button id="sub-accor"><span className={`sidebar ${isOpen ? '' : 'closed'}`} >Scheme Wise Report</span></button>
                          <button id="sub-accor"><span className={`sidebar ${isOpen ? '' : 'closed'}`}>Direct RM Business</span></button>
                          <button id="sub-accor"><span className={`sidebar ${isOpen ? '' : 'closed'}`}>Direct RIA Business</span></button>
                          <button id="sub-accor"><span className={`sidebar ${isOpen ? '' : 'closed'}`}>Multicity ARMWise Scheme Report </span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Code For Second Ended */}

          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={mapping} alt="home" className=" side-img p-1" /> <span className={`sidebar ${isOpen ? '' : 'closed'}`}> Mapping</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={Retails_bank} alt="home" className=" side-img p-1" /> <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Retail Bank</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={Named_inst} alt="home" className=" side-img p-1" /> <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Named Inst</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={Digital_Team} alt="home" className=" side-img p-1" /> <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Digital Team</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={Manager_user} alt="home" className=" side-img p-1" /><span className={`sidebar ${isOpen ? '' : 'closed'}`}> Manager User</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={Service_request} alt="home" className=" side-img p-1" /><span className={`sidebar ${isOpen ? '' : 'closed'}`}>Service Request</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={statistics} alt="home" className=" side-img p-1" /> <span className={`sidebar ${isOpen ? '' : 'closed'}`}>Statistics Report</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={stragies} alt="home" className=" side-img p-1" /><span className={`sidebar ${isOpen ? '' : 'closed'}`}>Strategic Alliance</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <img src={Channel} alt="home" className=" side-img p-1" /><span className={`sidebar ${isOpen ? '' : 'closed'}`}>Channel Wise Sales</span>
              </div>
            </Link>
          </div>
          <div className="card" id="main-side-card">
            <Link className="side-link" >
              <div className="side-home">
                <span className={`sidebar ${isOpen ? '' : 'closed'}`}>  PRM Sales Management</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default SideBar;

