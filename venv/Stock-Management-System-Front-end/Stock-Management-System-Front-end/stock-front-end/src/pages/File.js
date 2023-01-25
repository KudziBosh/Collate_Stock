import '../app.css'; 
import React, { useState } from 'react'
import { BiArrowToLeft, BiHomeCircle, BiHelpCircle } from "react-icons/bi";
import logo from '../Assets/logo1.png'
import { MdOutlineLightMode, MdOutlineNightlight, MdOutlinePeople } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineDocumentText, } from "react-icons/hi";
import { IoMdContact, } from "react-icons/io";
import { Link } from "react-router-dom";

import Topbar from './Topbar';

function Overview(props) {
    const [open, setOpen] = useState(true);
    const menus = [
        { name: "Overview", link: "/overview", icon: BiHomeCircle },
        { name: "Payroll", link: "/payroll", icon: HiOutlineDocumentText },
        { name: "Employees", link: "/employees", icon: MdOutlinePeople },
        { name: "Jobs", link: "/jobs", icon: BsBriefcase, },
        { name: "Candidates ", link: "/candidates", icon: IoMdContact },
        { name: "Calender", link: "/calender", icon: CiCalendarDate },
    ];
    const menue = [
        { name: "Setting", link: "/settings", icon: RiSettings4Line },
        { name: "Help Center", link: "/help-center", icon: BiHelpCircle },
    ];
    const [openEye, setOpenEye] = React.useState(false);
    return (
        <div className="flex  max-w-screen  top-0">
            <div
                className={` md:min-h-screen  border border-r text-gray-700 px-4 
                ${open ? "w-60" : "w-16"  }`} >
                <div className=" flex justify-between  items-center" >
                    <img
                        src={logo}
                        alt='Cursor'
                        className={`cursor-pointer w-45 h-12 duration-300 ${!open && "hidden w-10"}`}
                    />
                    <BiArrowToLeft
                        size={18}
                        className={` bg-gray-100 cursor-pointer justify-end ${!open && " flex justify-center items-center"}`}
                        onClick={() => setOpen(!open)}
                    />

                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    <h1 className={`text-grey-700 origin-left text-sm font-light text-x1 duration-300 px-5 pt-2 border-t
          ${!open && 'scale-0'}`} > General</h1>
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-2  hover:bg-violet-100 hover:text-violet-700`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "18" })}</div>
                            <h2

                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <span
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white whitespace-pre text-gray-700  drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </span>
                        </Link>
                    ))}

                    <h1 className={`text-grey-700 origin-left text-sm font-light text-x1 duration-300 px-5 pt-2 border-t
          ${!open && 'scale-0'}`} > Support</h1>
                    {menue?.map((menu, i) => (

                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-2   hover:bg-violet-100 hover:text-violet-700 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "18" })}</div>
                            <h2

                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <span
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white whitespace-pre text-gray-700 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </span>
                        </Link>
                    ))}


                </div>

                <div class=" relative my-4 ">
                    <div className=''>
                        <h1 className={`text-grey-700 origin-left text-sm font-light text-x1 duration-300 px-5 pt-2 
          ${!open && 'scale-0'}`} > Appearence</h1>
                        <div class="bg-gray-50  absolute inset-x-0  w-full inline-flex justify-between items-center border border-gray-300 p-2 rounded focus:border-gray-400">
                            <span onClick={() => setOpenEye(!openEye)}>
                                <MdOutlineLightMode />
                            </span>
                            <span onClick={() => setOpenEye(!openEye)}>
                                <MdOutlineNightlight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] '>
                <Topbar />
                <div className='px-5 pb-5'>
                    {props.children}

                </div>

            </div>
        </div>

    );
}

export default Overview;
