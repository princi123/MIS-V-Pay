import React from "react";
import "../Retail/ScheduleModal.css"
import { Link } from "react-router-dom";

const ScheduleModal = () => {

  return (
    <>
      <div>
        <div className="modal fade" id="scheduleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog " style={{ maxWidth: "615px" }}>
            <div className="modal-content border-dark">
              <div className="modal-header bgcolorBlue text-white text-center p-0">
                <h4 className="w-100 "> <b>Schedule</b> </h4>
              </div>
              <div className="modal-body">
                <div className="col-md-12 d-flex justify-content-center">
                  <button type="button" className="schedulebtn m-1" data-bs-target="#scheduleModal">One time</button>
                  <button href="/DailySchedule" type="button" className="schedulebtn m-1" data-bs-target="#scheduleModal">Daily</button>
                  <button type="button" className="schedulebtn m-1" >Weekly</button>
                  <button type="button" className="schedulebtn m-1" >Monthly</button>
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
    </>
  )
}
export default ScheduleModal;