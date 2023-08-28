import React,{useState} from 'react'
import "./AumReport.css"
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar"

const  AumReport=()=> {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    const data = [
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC001',
            UFC: 'UFC One',
            RMCode: 'RM001',
            RMName: 'John Doe',
            TotalAUM: 1000000,
            AUM: {
                Equity: 400000,
                Hybrid: 200000,
                Arbitrage: 100000,
                Passive: 150000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },
        {

            Zone: 'EAST',
            Region: 'NORTH EAST',
            UFCCode: 'UFC002',
            UFC: 'UFC Two',
            RMCode: 'RM002',
            RMName: 'Jane hvf mh',
            TotalAUM: 800000,
            AUM: {
                Equity: 300000,
                Hybrid: 150000,
                Arbitrage: 80000,
                Passive: 120000,
                'Fixed Income': 100000,
                Cash: 50000,
            },
        },

    ];

    return (
        <>
            <div className="container-fluid p-0 home-main">
                <Navbar onToggle={toggleSidebar} />
                <div className="d-flex">
                    <SideBar isOpen={sidebarOpen} />
                    <div
                        className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"
                            }`}
                    >
                        <div className="card mt-4 m-3">
                            <div className='headline mt-2'>
                                <h4><b>Retail UFCWise AUM Report</b></h4>
                            </div>
                            <div className='col-md-12 col-md-12 d-flex justify-content-center mt-3'>
                                
                                    <div className='d-flex justify-content-center'>
                                        <button className='btn export'>Export</button>
                                    </div>
                                
                            </div>
                            <p className='text-center mt-2'><b>Rs. in Lakhs</b></p>
                            <div className="col-md-12">
                            <table className="table table-bordered table-striped p-1">
                                <thead className="Bgcolor">
                                    <tr className='mid '>
                                        <th rowSpan="2">Zone</th>
                                        <th rowSpan="2">Region</th>
                                        <th rowSpan="2">UFC Code</th>
                                        <th rowSpan="2">UFC</th>
                                        <th rowSpan="2">RM Code</th>
                                        <th rowSpan="2">RM Name</th>
                                        <th rowSpan="2">Total AUM</th>
                                        <th colSpan="6">AUM</th>
                                    </tr>
                                    <tr>
                                        <th>Equity</th>
                                        <th>Hybrid</th>
                                        <th>Arbitrage</th>
                                        <th>Passive(ex-Debt)</th>
                                        <th>Fixed Income</th>
                                        <th>Cash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.SrNo}>
                                            <td>{item.Zone}</td>
                                            <td>{item.Region}</td>
                                            <td>{item.UFCCode}</td>
                                            <td>{item.UFC}</td>
                                            <td>{item.RMCode}</td>
                                            <td>{item.RMName}</td>
                                            <td>{item.TotalAUM}</td>
                                            <td>{item.AUM.Equity}</td>
                                            <td>{item.AUM.Hybrid}</td>
                                            <td>{item.AUM.Arbitrage}</td>
                                            <td>{item.AUM.Passive}</td>
                                            <td>{item.AUM['Fixed Income']}</td>
                                            <td>{item.AUM.Cash}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AumReport