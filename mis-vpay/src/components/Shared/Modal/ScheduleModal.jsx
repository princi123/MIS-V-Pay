import React from "react";
import "../Modal/ScheduleModal.css";
import DailyModal from "./DailyModal";
import MonthlyModal from "./MonthlyModal"
import WeeklyModal from "./WeeklyModal"

const ScheduleModal = () => {
  return (

    <div>
      <div className="modal fade" id="scheduleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ maxWidth: "615px" }}>
          <div className="modal-content border-dark">
            <div className="modal-header bgcolorBlue text-white text-center p-0">
              <h4 className="w-100">
                <b>Schedule</b>
              </h4>
            </div>
            <div className="modal-body">
              <div className="nav nav-pills mb-3 d-flex" id="pills-tab" role="tablist">
                <div className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    OneTime
                  </button>
                </div>
                <div className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Daily
                  </button>
                </div>
                <div className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Weekly
                  </button>
                </div>
                <div className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-monthly-tab"
                    data-bs-toggle="pill"
                    href="#pills-monthly"
                    role="tab"
                    aria-controls="pills-monthly"
                    aria-selected="false"
                  >
                    Monthly
                  </button>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  
                </div>
                
                
                <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
                <MonthlyModal />
                </div>
              </div>
              <div className="card mt-4 modalcard">

                <div className="row mt-2 rowfirst">

                  <div className="col-md-4">

                    <input className="form-control" type="text" placeholder="Today" />

                  </div>

                  <div className="col-md-4">

                    <input className="form-control" type="text" placeholder="Monday" />

                  </div>

                </div>

                <div className="row rowfirst ">

                  <div className="col-md-4">

                    <label htmlFor><b>Date</b></label>

                    <input className="form-control" type="date" />

                  </div>

                  <div className="col-md-4">

                    <label htmlFor><b>Time</b></label>

                    <input className="form-control" type="time" />

                  </div>

                </div>


                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                 <DailyModal /> 
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                 <WeeklyModal />
                </div>



                <div className="row m-4">

                  <div className="col-md-2">

                    <button className="form-control">To</button>

                  </div>

                  <div className="col-md-10">

                    <input className="form-control mail-inputbox " type="text" />

                  </div>

                  <div className="col-md-2 mt-3">

                    <button className="form-control">Cc</button>

                  </div>

                  <div className="col-md-10 mt-3">

                    <input className="form-control  mail-inputbox" type="text" />

                  </div>

                </div>

                <div className="col-md-12 d-flex justify-content-center">

                  <textarea className="form-control" placeholder="message" style={{ width: "95%" }} />

                </div>

                <div className=" col-md-12 d-flex mt-4 mb-4">

                  <div className="col-md-8"></div>

                  <div className="col-md-4">

                    <button type="button" className="btn BgcolorOrange colorwhite m-1 closebuttons" data-bs-dismiss="modal">Discard</button>

                    <button type="button" className="btn BgcolorOrange colorwhite m-1 closebuttons">Save</button>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
