import HolidayDatePicker from "./HolidayDatePicker";
import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye,AiOutlineCalendar ,AiOutlineCloseCircle } from "react-icons/ai";
function LeavesSearch(){
    const [openEye, setOpenEye] = React.useState(false);
    const [openEye2, setOpenEye2] = React.useState(false);
    return(
        <div className="flex flex-row  justify-between pt-4 gap-6">
            <div className="w-full h-[60px]">
            
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
            
            </div>

            <div className="w-full ">
            
            
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Leave Type</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
                       
                        </div>

            <div className="w-full  ">
            
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
            
            </div>
            <div className="w-full ">
            
            
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Leave Status</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
           
            </div>
            <div >
        
        <div className="relative rounded-lg w-full inline-flex gap-2 items-center border border-gray-300 p-2.5  text-sm  focus:border-gray-400 bg-white">
        <HolidayDatePicker/><span onClick={() => setOpenEye2(!openEye2)}>
        {openEye2 ? <AiOutlineCalendar /> : <AiOutlineCalendar/>}
      </span></div>
        
        </div>
        <div >
       
        <div className="relative rounded-lg w-full inline-flex gap-2 items-center border border-gray-300 p-2.5  focus:border-gray-400 bg-white">
        <HolidayDatePicker/><span onClick={() => setOpenEye2(!openEye2)}>
        {openEye2 ? <AiOutlineCalendar /> : <AiOutlineCalendar/>}
      </span></div>
        
        </div>



            <div className="w-full ">
            
            <button type="email" id="helper-text" aria-describedby="helper-text-explanation" class="font-bold  bg-indigo-500 border border-gray-300 text-white  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                search
            </button>
            </div>
        </div>
    );
}
export default LeavesSearch;