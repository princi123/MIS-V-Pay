import React from "react";

const MonthlyModal = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor><b>Month</b>
                    </label>
                    <select name id="ab" className="form-select form-control">
                        <option value>All </option>
                        <option value>Jan </option>
                        <option value>Fab</option>
                        <option value>March </option>
                        <option value>April</option>
                        <option value>May</option>
                        <option value>Jun</option>
                        <option value>July</option>
                        <option value>August</option>
                        <option value>Sep</option>
                        <option value>Oct</option>
                        <option value>Nov</option>
                        <option value>Dec</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor><b>Days</b>
                    </label>
                    <select name id="ab" className="form-select form-control">
                        <option value>All </option>
                        <option value>1 </option>
                        <option value>2 </option>
                        <option value>3 </option>
                        <option value>4</option>
                    </select>
                </div>
                <div className="col-md-4" />
            </div>


        </>
    )
}
export default MonthlyModal;