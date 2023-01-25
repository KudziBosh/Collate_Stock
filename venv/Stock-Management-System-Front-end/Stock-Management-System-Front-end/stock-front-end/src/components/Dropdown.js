import React, {useState} from "react"
import {MdKeyboardArrowDown,MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link,NavLink} from 'react-router-dom';
function Dropdown(){
  const [isOpen, setIsOpen] =useState(true);
    return(
    <div class="flex flex-col  justify-center items-center">
        <button on onClick={()=> setIsOpen((prev)=>!prev)} className='flex flex-row gap-2 pb-2'>Employees
        <span className="rotate-90"><MdOutlineKeyboardArrowRight/></span>
        </button>
        {isOpen&&(
                <ul className="space-y-2 duration-300 ">
                <li>
                  <NavLink to="/Employees/AllEmployees" className={({isActive})=>isActive?"inline-block w-full p-2 hover:bg-indigo-400 border-l-4 border-black ":"inline-block w-full p-2"}>All Employees</NavLink>
                </li>
                <li>
                  <NavLink to="/Employees/Holidays " className={({isActive})=>isActive?" inline-block w-full p-2 hover:bg-indigo-400 border-l-4 border-black":"inline-block w-full p-2"}>Holidays</NavLink>
                  
                </li>
                <li>
                  <NavLink to="/Employees/Leave"className={({isActive})=>isActive?"inline-block w-full p-2 hover:bg-indigo-400 border-l-4 border-black":"inline-block w-full p-2"}>Leave</NavLink>
                  
                </li>
                <li>
                <NavLink to="/Employees/Attendance"className={({isActive})=>isActive?" inline-block w-full p-2 hover:bg-indigo-400 border-l-4 border-black":"inline-block w-full p-2"}>Attendance</NavLink>
                  
                </li>
              </ul>
        )}
    </div>
    );
}
export default Dropdown;