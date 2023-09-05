import React from 'react'

 const Dropdown = () => {
  return (
    <div><label className="form-lables">
    <b> Select Type</b>
  </label>
  <select
    name=""
    id="ab"
    className="form-select form-control mt-2"
    value={select_type}
    onChange={(e) => setSelectType(e.target.value)}
  >
    <option>Choose Select Type </option>
    <option value="netsales">NET SALES </option>
    <option value="grosssales">GROSS SALES </option>
  </select></div>
  )
}
export default Dropdown