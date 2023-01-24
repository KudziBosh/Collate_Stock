import '../App.css';
import React,{ useState } from 'react';
import logImg from '../assets/Logo.png'
import {BiHomeAlt,BiUserCircle,BiHelpCircle,BiArrowToLeft} from "react-icons/bi"
import {MdRequestPage,MdOutlinePeople} from "react-icons/md"
import {FiBriefcase,FiSettings} from "react-icons/fi"
import {TbCalendar} from 'react-icons/tb';
import {BsArrowBarLeft} from 'react-icons/bs'
import Switch from '../components/Switch';
import {Link,NavLink} from 'react-router-dom';
import Dropdown from './Dropdown';


const SideBar2 = () => {
    const [open, setOpen] = useState(true);
  return (
    
    <div className={ `${open ? "w-60" : "w-16"  } duration-300 sticky h-screen  top-0`}>
   <div class=" px-3 py-4 -auto rounded bg-gray-50 dark:bg-gray-800 h-screen">
    <div  class="flex items-center pl-2.5 mb-5 justify-between border-b">
         <img src={logImg} class="mr-3 h-8 sm:h-12" alt="Growthsense logo" 
         className={`cursor-pointer w-45 h-12 duration-300 ${!open && "hidden w-10"}`}/>
         <button 
         className={`self-center text-xl font-semibold whitespace-nowrap dark:text-whiterounded scale-125 bg-gray-200 ${!open && " rotate-180 duration-150 flex justify-center items-center"}`}
         onClick={() => setOpen(!open)}><BiArrowToLeft/></button>
      </div>
      <ul class="space-y-2">
         <li>
         <NavLink to="/Overview"     className={({isActive})=>isActive?" inline-block w-full p-2 hover:bg-indigo-400 flex items-center p-2 text-base  border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"}
              
                activeclassName='active'>
         <a href="#" class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
              
              <BiHomeAlt/>
              <span 
              className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}
    >
               Overview</span>
              
           </a>
         </NavLink>
         </li>
         <li>
         <NavLink to="/Payroll" className={({isActive})=>isActive?" inline-block w-full  hover:bg-indigo-400  items-center p-2 text-base  border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"}>
         <a href="#" class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
               
               <MdRequestPage/> <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Payroll</span>
               
            </a>
            </NavLink>
         </li>
         <li>
            <div className="inline-block w-full  items-center p-2 text-base hover:bg-indigo-400   border-secondary"
       >
         <li>
            <button class="flex items-center flex-col p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
              
               <div className='flex flex-row '><span className=''><MdOutlinePeople/></span><span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}><Dropdown/></span></div>
               <div></div>
            </button>
         </li>
         </div>
         </li>
         <li>
         <NavLink to="/Jobs " className={({isActive})=>isActive?" inline-block w-full  hover:bg-indigo-400  items-center p-2 text-base   border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"} >
         <li>
         <button class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
               <FiBriefcase/><span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Jobs</span>
            </button>
         </li>
         </NavLink>
         </li>
         <li>
         <NavLink to="/Candidates "className={({isActive})=>isActive?"  inline-block w-full p-2 hover:bg-indigo-400 flex items-center p-2 text-base  border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"}>
         <li>
            <button href="#"   class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700"> 
               <BiUserCircle/>
               <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Candidates</span>
            </button>
         </li>
         </NavLink>
         </li>
         <li>
         <NavLink to="/Calendar"  className={({isActive})=>isActive?" inline-block w-full  hover:bg-indigo-400  items-center p-2 text-base  border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"}>
         <li>
         <button href="#"  class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700"> 
               <TbCalendar/>
               <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Calendar</span>
            </button>
         </li>
         </NavLink>
         </li>
         <li>
         <a href="#" class="flex items-center p-2 text-sm font-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
               <span className={`ml-3
               ${!open && 'scale-0'}`}>Support</span>
            </a>
         </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
         <li>
         <NavLink to="/Settings" className={({isActive})=>isActive?" inline-block w-full  hover:bg-indigo-400 items-center p-2 text-base  border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"}>
         <li>
         <button href="#" class="flex items-center p-2 text-sm font-base text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700" > 
            <FiSettings/>
            <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Settings</span>
            </button>
         </li>
         </NavLink>
         </li>
         <li>
         <NavLink to="/Help" className={({isActive})=>isActive?" inline-block w-full  hover:bg-indigo-400 flex items-center p-2 text-base border-l-4 border-black":" inline-block w-full hover:bg-indigo-400 flex items-center p-2 text-base font-normal"}>
            <a href="#" class="flex items-center p-2 text-sm font-thin text-gray-900 rounded-lg transition duration-75  dark:hover:bg-gray-700 dark:text-white group">
              <BiHelpCircle/>
               <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Help Center</span>
            </a>
            </NavLink>
         </li>
         
      </ul>
   </div>
   </div>


  )
}

export default SideBar2