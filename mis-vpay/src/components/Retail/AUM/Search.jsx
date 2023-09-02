import { React, useState } from "react";
import "../AUM/Search.css";
import Navbar from '../../Shared/Navbar';
import SideBar from '../../Shared/SideBar';
import Aum from "./Aum";
import Button from "../../Shared/Button";

const Search=()=> {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Replace 'fetchDataFromApi' with the actual function to fetch data from your API.
  const fetchDataFromApi = async () => {
    try {
      // Simulating fetching data from API.
      const response = await fetch("your_api_endpoint_here");
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sesss=()=>{
    console.log("fg")
  }

  return (
   
    <div className="container-fluid p-0 home-main ">
     <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >

   
   <div className="bg-white card m-4" style={{borderRadius:"10px"}}>
    <div className="col-md-12">
        <div className="headline pt-4" style={{paddingLeft:"20px"}}>
        <b >Daily Retail RH CH RM Zone Wise Performance</b>
        </div>
      <div className="d-flex justify-content-center mb-5 mt-5">
        <div className="col-md-8 d-flex"> 
         <div className="col-md-6 ">
         <label style={{paddingLeft:"10px"}}> <b>Select Period</b></label>
        <select className="form-select m-2" >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        </div>
        <div  style={{marginLeft:"10px",marginTop:"19px",padding:"10px 10px 10px 10px"}}>
        <Button className="BgcolorOrange btn"  style={{marginRight:"5px",padding:"11px"}} onClick={sesss}>Search</Button>
        <button className="BgcolorOrange btn "style={{marginRight:"5px",padding:"11px"}} >Export</button> 
        </div>
        </div>
      </div>
      
    </div>
    <Aum/>
      </div>
      </div>
    </div>   
    </div>
  );
}

export default Search;

