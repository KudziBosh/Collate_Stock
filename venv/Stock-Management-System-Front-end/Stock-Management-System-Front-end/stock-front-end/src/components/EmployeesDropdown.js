import React,{useState} from 'react'
import {MdKeyboardArrowDown,MdDelete} from "react-icons/md"
import {BiEditAlt,BiDotsVerticalRounded} from 'react-icons/bi'
function EmployeesDropdown() {
    const [isOpen, setIsOpen] =useState(false);
  return (
    <div><div class="flex flex-col  justify-center">
    <button on onClick={()=> setIsOpen((prev)=>!prev)} className=''>
    <BiDotsVerticalRounded/>
    </button>
    {isOpen&&(
        <div className="absolute left-auto z-10 mt-8 mb-2 ml-5 w-20 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="">
             <div className="flex-center "></div>
            <ul className="space-y-2 ">
            <li className="flex flex-row gap-1 " onClick={()=> setIsOpen((prev)=>!prev)}>
              <MdDelete/>Edit
            </li>
            <li className="flex flex-row gap-1">
             <BiEditAlt/> Delete
            </li>
            
          </ul>
          </div></div>
    )}
</div></div>
  )
}

export default EmployeesDropdown