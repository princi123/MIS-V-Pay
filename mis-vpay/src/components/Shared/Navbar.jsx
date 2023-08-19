import React from "react";
import '../Assets/css/navbar.css';
import logo from '../Assets/images/logo.svg';
import hambuger from '../Assets/images/hamburger.svg';
import bell from "../Assets/images/bell.svg";
import Navi from "../Assets/images/navigation.svg";
import Profile from "../Assets/images/profile.svg";
import logout from "../Assets/images/logout icon.png";



const Navbar = ({ onToggle }) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-0" >
                <div className="container-fluid " id="nav-card">
                   <div className="col-md-12"> 
                     <div className="row">
                     <div className="col-md-2" id="nav-card">

<img src={logo} alt="logo" />

<button className="btn-hamburger openbtn" onClick={onToggle}>

    <img src={hambuger} alt="logo" />

</button>

</div>
                    <div className="col-md-2 pt-1" >
                        <h5 className="nav-h4">Welcome, Admin</h5>
                        <p>Quarter <span>:</span><strong><span>2023-24 Q1</span></strong></p>
                    </div>
                    <div className="col-md-2" >
                        <div id="third-nav" className="pt-1">
                            <div >
                            <p className="nav-para" >Channel <span>:</span><strong>All</strong></p>   
                            </div>
                            <div  className="nav-div">
                            <img src={Navi} alt="navi" /> <strong>Mumbai</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 " id="nav-fourth">
                        <button className="quarter">Select Quarter <span><i class="bi-arrow-down-square"></i></span></button>

                        <button type="button" class="btn btn-group" id="nav-sixth">
                            <img src={bell} alt="bell" width="15%" height="15%" />
                            {/* <span className="ribbon">9</span> */}
                        </button>
                    </div>
                      <div className="col-md-3" id="nav-fifth">
                        <ul className="list-unstyled m-0">
                            <li  id="nav-admin" >
                                <img src={Profile}  alt="..." width="25%" height="25%" className="mt-4"/>
                                <div  className="m-2 w-100">
                                    <h5 className="nav-heading" >Role : Admin</h5>
                                    <p >21 June 2023, 16:40</p>
                                </div>
                            </li>
                        </ul>
                      <div className="col-md-2" >  
                        <button className="text-center btn-logout" >
                              <img src={logout} alt="logout" />     
                        </button>
                      <strong>Logout</strong>  
                      </div>  
                    </div>
                    </div> 
                  </div>
                </div>
            </nav>
   
          
         


        </>
    )


}
export default Navbar;