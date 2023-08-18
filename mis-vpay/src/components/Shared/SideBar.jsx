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

const SideBar = ({isOpen}) => {

 return (
        <>
         <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="col-md-2 w-100" style={{marginLeft:"5px",marginBottom:"5px"}} >
                <div className="card card_active" id="main-side-card-active">
                    <Link className="side-link"to >
                        <div className="side-home">
                            <img src={home} alt="home"  className=" side-img p-1" /> Home
                        </div>
                    </Link>
                </div>
                {/* Code For Second */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 id="flush-headingOne">
                            <button className="accordion-button collapsed p-0  py-1 side-link " id="main-side-card" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              <div className="side-home w-100">
                                <img src={Retails} alt="home"  width="12%" height="12%" className=" side-img p-1" /> Retail
                              </div>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body p-0">
                                <div className="accordion accordion-flush" id="subAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sub-accordion-headingOne" style={{backgroundColor:"#EE8B3A",marginLeft:"5px",marginRight:"10px",borderRadius:"5px"}} >
                                            <button className=" collapsed m-2 p-0 sales-retails border-0" type="button" data-bs-toggle="collapse" data-bs-target="#sub-accordion-collapseOne" aria-expanded="false" aria-controls="sub-accordion-collapseOne">
                                            Sales/Redemption/Net/
                                                SIP Sales Reports
                                            </button>
                                        </h2>
                                        <div id="sub-accordion-collapseOne" className="accordion-collapse collapse" aria-labelledby="sub-accordion-headingOne" data-bs-parent="#subAccordion">
                                            <div className="accordion-body p-0 text-center">
                                                <button className="sub-accor-active">Transaction Summary Reports</button>
                                                <button className="sub-accor">Transaction Amount Summary </button>
                                                <button  className="sub-accor"style={{marginLeft:"24px",marginRight:"29px"}} >ARN Transaction Reports</button>
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
                            <img src={mapping} alt="home" className=" side-img p-1" /> Mapping
                        </div>
                    </Link>
                </div>

                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={Retails_bank} alt="home" className=" side-img p-1" /> Retail Bank
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={Named_inst} alt="home" className=" side-img p-1" /> Named Inst
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={Digital_Team} alt="home" className=" side-img p-1" /> Digital Team
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={Manager_user} alt="home" className=" side-img p-1" /> Manager User
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={Service_request} alt="home" className=" side-img p-1" /> Service Request
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={statistics} alt="home" className=" side-img p-1" /> Statistics Report
        
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={ stragies} alt="home" className=" side-img p-1" /> Strategic Alliance
      
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                            <img src={Channel} alt="home" className=" side-img p-1" /> Channel Wise Sales
      
                        </div>
                    </Link>
                </div>
                <div className="card" id="main-side-card">
                    <Link className="side-link" >
                        <div className="side-home">
                          PRM Sales Management
                        </div>
                    </Link>
                </div>
            </div>
         </div>   
        </>
    )
}
export default SideBar;