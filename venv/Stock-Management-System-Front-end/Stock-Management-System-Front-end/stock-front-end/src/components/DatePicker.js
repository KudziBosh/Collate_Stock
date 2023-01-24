import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import {CiExport} from "react-icons/ci"
function DatePicker(){
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    return(
        
            
<div class="flex flex-row gap-3 h-11">
    <div className="w-60 border rounded gap-1 h-11">
    <Datepicker
                value={value}
                onChange={handleValueChange}
            />
    </div>
    <div>
        <button className="flex flex-row bg-indigo-500 border-indigo-200 rounded text-white h-full w-full text-center items-center text-lg gap-1 p-2"><div className=" scale-100"><CiExport className="scale 150"/></div>Export
        </button>
        </div>        
        </div>
    )
}
export default DatePicker;