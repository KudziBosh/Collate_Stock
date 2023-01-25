import React from 'react'
import Logo from '../../components/Logo';
// import TransparentLogo from '../../components/TransparentLogo';
import { Link, useNavigate } from 'react-router-dom';
import { FaJenkins } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { logout } from '../../api/userApi'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBagPlusFill } from "react-icons/bs";

export const Sidebar = () => {
    const navigate = useNavigate();

    const [active, setActive] = React.useState('');

    React.useEffect (() =>{
        
    },[active])

    const handleLogout = () => {
        logout();
        navigate('/')
    }

    return (

        <div className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-button shadow-lg">
            <div className='py-2 bg-primary'><Logo className='w-3/5 mx-auto' /></div>
            <hr className=' shadow' />
            <div class="overflow-y-auto py-4 px-3 mt-3 bg-button ">
                <ul class="space-y-2 text-white ml-3">
                    <li>
                        <Link to='/dashboard' class="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white">
                            <button onClick={() => setActive('dashboard')} className={`inline-block w-full  ${active === 'dashboard' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}> <FaChartPie className='w-6 h-6 text-white mr-3' />Dashboard</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/clients' class="flex items-center p-2 text-base font-normal  rounded-lg dark:text-white">
                            <button onClick={() => setActive('clients')} className={`inline-block w-full  ${active === 'clients' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><FaJenkins className='w-6 h-6 text-white mr-3' />Clients</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/carers' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                           <button onClick={() => setActive('carers')} className={`inline-block w-full focus:outline-none  ${active === 'carers' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><FaPeopleCarry className='w-6 h-6 text-white mr-3' />Carers</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/staff' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                            <button onClick={() => setActive('staff')} className={`inline-block w-full focus:outline-none ${active === 'staff' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><FaUsers className='w-6 h-6 text-white mr-3' />Office Staff</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/finance' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                            <button onClick={() => setActive('finance')} className={`inline-block w-full focus:outline-none ${active === 'finance' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><FaUniversity className='w-6 h-6 text-white mr-3' />Finance</button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/recruitment' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                            <button onClick={() => setActive('recruitment')} className={`inline-block w-full focus:outline-none ${active === 'recruitment' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><FaUserGraduate className='w-6 h-6 text-white mr-3' />Recruitment</button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/care-plans' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                            <button onClick={() => setActive('careplans')} className={`inline-block w-full focus:outline-none ${active === 'careplans' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><BsFillBagPlusFill className='w-6 h-6 text-white mr-3' />Care Plans</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/configurations' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                            <button onClick={() => setActive('configurations')} className={`inline-block w-full focus:outline-none ${active === 'configurations' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><FaCogs className='w-6 h-6 text-white mr-3' />Configurations</button>
                        </Link>
                    </li><hr />
                    <li>
                        <Link to='/my-account' class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white">
                            <button onClick={() => setActive('myaccount')} className={`inline-block w-full focus:outline-none ${active === 'myaccount' ? "flex items-center p-2 text-base font-normal border-l-2 border-secondary  dark:text-white bg-button" : "flex items-center p-2 text-base font-normal  rounded dark:text-white hover:bg-secondary dark:hover:bg-gray-700"}`}><BsFillPersonFill className='w-6 h-6 text-white mr-3' />My Account</button>
                        </Link>
                    </li><hr />
                    <li>

                        <button onClick={() => handleLogout()} class="flex items-center p-2 px-5 text-base font-normal rounded-lg dark:text-white hover:bg-secondary w-full dark:hover:bg-gray-700">
                            <HiLogout className='w-6 h-6 text-white' />
                            <span class="ml-3">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )

}