import {React,useState} from 'react'
import "./Schema.css";

function Schema() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    return (
      <div className="form-group col-md-2 mt-3">
        <label htmlFor="">
          <b>Schema</b>
        </label>
        <div className="dropdown">
          <div className="custom-dropdown">
            <button
              className="form-control dropdown-toggle  mt-2"
              onClick={toggleDropdown}
            >
              Schema
            </button>
            <div
              className="dropdown-content forwidth p-0"
              id="checkboxContainer"
              style={{ display: dropdownVisible ? 'block' : 'none' }}
            >
              
               <label htmlFor="" className="BgcolorOrange2 colorwhite m-0">
               All
          </label>
          <br/>
          <label>
            <input type="checkbox" name="item" defaultValue="item1" />{" "}00-Zero balance folio
          </label>
          <br/>
          <label>
            <input type="checkbox" name="item" defaultValue="item2" /> {" "}002-UTI- Unit Linked insura..{" "}
          </label>
          <br/>
          <label>
            <input type="checkbox" name="item" defaultValue="item3" /> 003-UTI-Charitable & Relig..
          </label>
          <br/>
          <label>
            <input type="checkbox" name="item" defaultValue="item4" />{" "}
            017-UTI-Mastershare Unit S..{" "}
          </label>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Schema
