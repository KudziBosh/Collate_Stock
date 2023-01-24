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

function Sidebar() {
   const closeBet = () => {
      setActive(false);
   }
   const [active, setActive] = useState('');
   const [open, setOpen] = useState(true);

   React.useEffect (() =>{
       
   },[active])
   console.log("active",active)
   const [openEye, setOpenEye] = React.useState(false);

    return (
     
        
<div  aria-label="Sidebar" className={ `${open ? "w-60" : "w-16"  } duration-300 sticky h-screen  top-0`}>
   <div className=" py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-full">
   <div  class="flex items-center pl-2.5 mb-5 justify-between border-b">
         <img src={logImg} class="mr-3 h-8 sm:h-12" alt="Growthsense logo" 
         className={`cursor-pointer w-45 h-12 duration-300 ${!open && "hidden w-10"}`}/>
         <button 
         className={`self-center text-xl font-semibold whitespace-nowrap dark:text-whiterounded scale-125 bg-gray-200 ${!open && " rotate-180 duration-150 flex justify-center items-center"}`}
         onClick={() => setOpen(!open)}><BiArrowToLeft/></button>
      </div>
      <nav>
      <ul class="space-y-2 text-sm">
         <li>
            <a href="#" class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
               <span 
               className={`ml-3
               ${!open && 'scale-0'}`}>General</span>
            </a>
         </li>
         
         <li>
         <NavLink to="/Overview" onClick={()=> setActive('Overview')} className={`inline-block w-full hover:bg-indigo-400  ${active === 'Overview' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button bg-indigo-500 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}
               style={isActive => ({
                  color: isActive ? "" : "blue"
                  ,background: isActive? "":"blue"
                })}
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
         <Link to="/Payroll" onClick={()=> setActive('Payroll')} className={`inline-block w-full hover:bg-indigo-400 ${active === 'Payroll' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-500 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}>
         <a href="#" class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
               
               <MdRequestPage/> <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Payroll</span>
               
            </a>
            </Link>
            
         </li>
         <NavLink to="/Employees" onClick={()=> setActive('Employees')}  className={`inline-block w-full hover:bg-indigo-400  ${active === 'Employees' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-500 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}
       >
         <li>
            <button class="flex items-center flex-col p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
              
               <div className='flex flex-row '><span className=''><MdOutlinePeople/></span><span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Employees</span></div>
               <div><Dropdown/></div>
            </button>
         </li>
         </NavLink>
         <NavLink to="/Jobs " onClick={()=> setActive('Jobs')} className={`inline-block w-full hover:bg-indigo-400  ${active === 'Jobs' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-500 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`} >
         <li>
         <button class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
               <FiBriefcase/><span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Jobs</span>
            </button>
         </li>
         </NavLink>
         <NavLink to="/Candidates "onClick={()=> setActive('Candidates')} className={`inline-block w-full hover:bg-indigo-400 ${active === 'Candidates' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-500 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}>
         <li>
            <button href="#"   class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700"> 
               <BiUserCircle/>
               <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Candidates</span>
            </button>
         </li>
         </NavLink>
         <NavLink to="/Calendar"  onClick={()=> setActive('Calendar')} className={`inline-block w-full  hover:bg-indigo-400 ${active === 'Calendar' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-500 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}>
         <li>
         <button href="#"  class="flex items-center p-2  text-sm font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700"> 
               <TbCalendar/>
               <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Calendar</span>
            </button>
         </li>
         </NavLink>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
      <li>
            <a href="#" class="flex items-center p-2 text-sm font-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
               <span className={`ml-3
               ${!open && 'scale-0'}`}>Support</span>
            </a>
         </li>
         <NavLink to="/Settings" onClick={()=> setActive('Settings')} className={`inline-block w-full hover:bg-indigo-400  ${active === 'Settings' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-400 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}>
         <li>
         <button href="#" class="flex items-center p-2 text-sm font-base text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700" > 
            <FiSettings/>
            <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Settings</span>
            </button>
         </li>
         </NavLink>
         <li>
         <NavLink to="/Help" onClick={()=> setActive('Help')} className={`inline-block w-full hover:bg-indigo-400  ${active === 'Help' ? "flex items-center p-2 text-base  border-l-2 border-secondary  dark:text-white bg-button  bg-indigo-400 rounded" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}>
            <a href="#" class="flex items-center p-2 text-sm font-thin text-gray-900 rounded-lg transition duration-75  dark:hover:bg-gray-700 dark:text-white group">
              <BiHelpCircle/>
               <span className={`flex-1 ml-3 whitespace-nowrap ${!open && "opacity-0 translate-x-28 overflow-hidden scale-0"
            }`}>Help Center</span>
            </a>
            </NavLink>
         </li>
         <li>
         
         </li>
      </ul>

      
      </nav>
   </div>
</div>

     
    );
  }
  
  export default Sidebar;
  