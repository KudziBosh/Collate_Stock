import Navbar from "../layouts/Nav"
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeCard from "../components/EmployeeCards";
import {BsFillGrid3X3GapFill,BsList}   from 'react-icons/bs'
import EmployeeModal from "../components/HolidaysModal";
import Modal from "../components/EmployeeModal";

function Employees(){
    
    return(
        <div>
            <Navbar>
                <div className="font-bold  pt-5 text-left flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Employee</h1>
                    <h6 className="text-xs">
                          DASHBOARD /
                          <h6 className="text-blue-200 inline-flex ml-2">
                            {" "}
                            Employee
                          </h6>
                        </h6>
                    </div>
                    <div className="flex flex-row h-full text-2xl gap-2">
                    <div className="opacity-0"><button className="flex flex-row bg-indigo-500 border-indigo-200 rounded text-white h-full w-full text-center items-center text-lg gap-1 p-2"><div><BsFillGrid3X3GapFill/></div></button></div>
                    <div><button className="flex flex-row opacity-0 bg-indigo-500 border-indigo-200 rounded text-white h-full w-full text-center items-center text-lg gap-1 p-2"><BsList/></button></div>
                    <div><Modal/></div>
                            
                                              

                    </div>
                    
                    
                </div>
                <EmployeeSearch/>
               <div className="grid lg:grid-cols-4 gap-4 p-4 md:grid-cols-2 sm:grid-cols-2 "><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/><EmployeeCard name='John Doe'/></div>
                
             
                
                </Navbar>
        </div>
    )
}
export  default Employees;