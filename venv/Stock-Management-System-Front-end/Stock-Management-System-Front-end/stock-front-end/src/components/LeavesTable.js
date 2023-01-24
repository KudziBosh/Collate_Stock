import HolidayDropdown from "./HolidayDropDown";
import {TbArrowsDownUp} from "react-icons/tb"
import {SiTarget} from 'react-icons/si'
function LeavesTable(){
    return (
        <div>
            <div >
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border px-8 ">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Employee <TbArrowsDownUp/></span></th>
      <th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Leave Type<TbArrowsDownUp/></span></th>
      
      <th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">From<TbArrowsDownUp/></span></th>
      <th scope="col" class="py-3 px-6 "><span className="flex flex-row justify-between">To<TbArrowsDownUp/></span></th>
      <th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">No of Days<TbArrowsDownUp/></span></th>
      <th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Reasons<TbArrowsDownUp/></span></th>
      <th scope="col" class="py-3 px-6 "><span className="flex flex-row justify-between">Status<TbArrowsDownUp/></span></th>
      <th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Actions<TbArrowsDownUp/></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="py-4 px-6"> <div class="flex items-center space-x-4 ">
		
      <div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Lewis N. Clark
			</p>
		</div>
        </div>
        </td>
      <td class="py-4 px-6">Front-end Developer</td>
      <td class="py-4 px-6">15 Jan 2023</td>
      <td class="py-4 px-6">25 Jan 2023</td>
      <td class="py-4 px-6">10 days</td>
      <td class="py-4 px-6">Going to Hospital</td>
      <td class="py-4 px-6">
        
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="volvo " className="rounded border-gray-400">Approved</option >
            <option value="saab" className="rounded border-gray-400">Saab</option>
            <option value="mercedes" className="rounded border-gray-400">Mercedes</option>
            <option value="audi" className="rounded border-gray-400">Audi</option>
                            </select>
        </td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>

    <tr className="bg-slate-200">
      <td class="py-4 px-6"> <div class="flex items-center space-x-4 ">
		
      <div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Lewis N. Clark
			</p>
		</div>
        </div>
        </td>
      <td class="py-4 px-6">Front-end Developer</td>
      <td class="py-4 px-6">15 Jan 2023</td>
      <td class="py-4 px-6">25 Jan 2023</td>
      <td class="py-4 px-6">10 days</td>
      <td class="py-4 px-6">Going to Hospital</td>
      <td class="py-4 px-6 ">
        
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="volvo " className="rounded border-gray-400 flex flex-row gap-3"><SiTarget/>Approved</option >
            <option value="saab" className="rounded border-gray-400">Saab</option>
            <option value="mercedes" className="rounded border-gray-400">Mercedes</option>
            <option value="audi" className="rounded border-gray-400">Audi</option>
                            </select>
        </td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>
    <tr>
      <td class="py-4 px-6"> <div class="flex items-center space-x-4 ">
		
      <div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Lewis N. Clark
			</p>
		</div>
        </div>
        </td>
      <td class="py-4 px-6">Front-end Developer</td>
      <td class="py-4 px-6">15 Jan 2023</td>
      <td class="py-4 px-6">25 Jan 2023</td>
      <td class="py-4 px-6">10 days</td>
      <td class="py-4 px-6">Going to Hospital</td>
      <td class="py-4 px-6">
        
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="volvo " className="rounded border-gray-400">Approved</option >
            <option value="saab" className="rounded border-gray-400">Saab</option>
            <option value="mercedes" className="rounded border-gray-400">Mercedes</option>
            <option value="audi" className="rounded border-gray-400">Audi</option>
                            </select>
        </td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>
    <tr className="bg-slate-200">
      <td class="py-4 px-6"> <div class="flex items-center space-x-4 ">
		
      <div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Lewis N. Clark
			</p>
		</div>
        </div>
        </td>
      <td class="py-4 px-6">Front-end Developer</td>
      <td class="py-4 px-6">15 Jan 2023</td>
      <td class="py-4 px-6">25 Jan 2023</td>
      <td class="py-4 px-6">10 days</td>
      <td class="py-4 px-6">Going to Hospital</td>
      <td class="py-4 px-6">
        
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="volvo " className="rounded border-gray-400">Approved</option >
            <option value="saab" className="rounded border-gray-400">Saab</option>
            <option value="mercedes" className="rounded border-gray-400">Mercedes</option>
            <option value="audi" className="rounded border-gray-400">Audi</option>
                            </select>
        </td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>
    
    
  </tbody>
</table>
        </div>
        </div>
    )
}
export default LeavesTable;