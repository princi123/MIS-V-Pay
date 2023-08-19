import React from "react";

const WeeklyModal = () => {
    return (
        <>
            <div className=" row">
                <div className="col-md-3">
                    <span>Recur every :</span>
                </div>
                <div className="col-md-1"><button className="form-control w-auto">01</button></div>
                <div className="col-md-8"><p>Weeks on :</p></div>
                <div className="col-md-3"><input type="checkbox" />Sunday</div>
                <div className="col-md-3"><input type="checkbox" />Monday</div>
                <div className="col-md-3"><input type="checkbox" />Teusday</div>
                <div className="col-md-3"><input type="checkbox" />Wednesday</div>
                <div className="col-md-3"><input type="checkbox" />Thursday</div>
                <div className="col-md-3"><input type="checkbox" />Friday</div>
                <div className="col-md-3"><input type="checkbox" />Saturday</div>
            </div>

        </>

    )
}
export default WeeklyModal;