import React, { useState } from 'react';
import "./Filter.css";
import filter from  "../Assets/images/table_icon.png"
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTables, setSelectedTables] = useState([]);

  const handleToggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleTableSelection = (tableName) => {
    setSelectedTables(prevSelectedTables => {
      if (prevSelectedTables.includes(tableName)) {
        return prevSelectedTables.filter(table => table !== tableName);
      } else {
        return [...prevSelectedTables, tableName];
      }
    });
  };

  const closeTab = () => {
    console.log("Selected tables:", selectedTables);
  
  };

  return (
    <div className="form-group col-md-2">
      <label>
        <img src={filter} alt="filter" />
        <b> Select Table</b>
      </label>
      <div className={`custom-dropdown ${isOpen ? 'active' : ''}`}>
      <button
            className="form-control dropdown-toggle mt-2"
            onClick={handleToggleDropdown}
          >
            Select Table
          </button>
        <div className="dropdown-menu">
          <div>
            <input
             className='m-1'
              type="checkbox"
              id="salesCheckbox"
              name="tables"
              value="Sales"
              onChange={() => handleTableSelection("Sales")}
            />
            <label htmlFor="salesCheckbox " className='m-2'>Sales</label>
          </div>
          <div>
            <input
             className='m-1'
              type="checkbox"
              id="redemptionCheckbox"
              name="tables"
              value="Redemption"
              onChange={() => handleTableSelection("Redemption")}
            />
            <label htmlFor="redemptionCheckbox" className='m-2'>Redemption</label>
          </div>
          <div>
            <input
            className='m-1'
              type="checkbox"
              id="netSalesCheckbox"
              name="tables"
              value="Net Sales"
              onChange={() => handleTableSelection("Net Sales")}
            />
            <label htmlFor="netSalesCheckbox"className='m-2'>Net Sales</label>
          </div>
          <div>
            <button
              className="btn BgcolorOrange text-white"
              style={{ marginLeft: "6rem" }}
              onClick={closeTab}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
