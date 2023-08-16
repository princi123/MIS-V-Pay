import React from "react";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar";
import "../Assets/css/Dashboard/Home.css";
import PieChartComponent from "../Shared/PieChartComponent";
const Home = () => {

    return (
        <>
            <div className="container-fluid p-0 home-main" >
                <Navbar />
                <div className="col-md-12 d-flex">
                    <SideBar />
                    <div className="col-md-12" style={{ width: "83%" }} >


                        <div style={{ marginLeft: "25px", marginRight: "20px" }}>
                            <marquee behavior direction="left">
                                <p className="marquee-p ">! Currently Displayed Data Is as of - June
                                    Some versions of Microsoft Word also generate the
                                    text using the =lorem() function. Just type it in your Word document and you will ge</p>
                            </marquee>

                            <div>
                                <div class="accordion " id="accordionExample">
                                    <div className="accordion-item acc-main">
                                        <h2 className="accordion-header acc-main " id="headingOne">
                                            <div className="">
                                            <button className="accordion-button acc-main" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                               <div style={{color:"#EE8B3A",fontSize:"12px",fontWeight:700}}>
                                               MIS Updates
                                               </div>
                                            </button>
                                           </div> 
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show acc-main" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body acc-main">
                                                <ul >
                                                    <li>you may now login to MIS VPAY using your AD password, which is the same used
                                                        to access other application like HRMS etc..</li>
                                                    <li>sales data on display up to 20-jun-2023 on Batchclose date for 202324Q1..
                                                    </li>
                                                    <li>Addition of Newly Empanelled IFA's in the ARN master is done till
                                                        19-jun-2023..</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                               <div className="row">
                                 <div className="card" id="PieChart-card">
                                    <h4>Retail</h4>
                                    <div >
                                    <PieChartComponent/>
                                    </div>
                                  
                                 </div>

                                 <div className="card ">
                                    <h4>Retail</h4>
                                   <PieChartComponent/>
                                 </div>

                                 <div className="card ">
                                    <h4>Retail</h4>
                                   <PieChartComponent/>
                                 </div>
                               </div>
                            <div>
                                
                            </div>     




                        </div>
                   </div>
                </div>
            </div>
        </>
    )



}
export default Home;