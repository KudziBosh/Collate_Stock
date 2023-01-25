import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import {CiExport} from "react-icons/ci"
function HolidayDatePicker(){
    

    const [selectedDate, setSelectedDate] = useState(null)
    
    return(
        
            
<div class="flex flex-row ">
    <div className="text-sm w-full">
    <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}  />
    </div>
    
           
        </div>
    )
}
export default HolidayDatePicker;