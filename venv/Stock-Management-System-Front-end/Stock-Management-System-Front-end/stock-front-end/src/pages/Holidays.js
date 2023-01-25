import Navbar from "../layouts/Nav"
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeCard from "../components/EmployeeCards";
import {BsFillGrid3X3GapFill,BsList}   from 'react-icons/bs'
import EmployeeModal from "../components/HolidaysModal";
import HolidaysTable from "../components/HolidaysTable";
import Modal from "../components/HolidaysModal";

function Holidays (){
    return(
        <div>
                <Navbar>
                <div className="font-bold  pt-5 text-left flex flex-row justify-between">
                    <div>
                    <h1 className="text-2xl">Holidays 2023</h1>
                    <h6 className="text-xs">
                          DASHBOARD /
                          <h6 className="text-holiday-200 text-blue-400 inline-flex ml-2">
                            {" "}
                            Holidays
                          </h6>
                        </h6>
                    </div>
                    <div className="flex flex-row h-full text-2xl gap-2">
                    
                    <div><Modal/></div>
                    
                                          

                    </div>
                    
                    
                </div>
                <br></br>
                <div><HolidaysTable/></div>
             
                
                </Navbar>
        </div>
    )
}

export default Holidays;