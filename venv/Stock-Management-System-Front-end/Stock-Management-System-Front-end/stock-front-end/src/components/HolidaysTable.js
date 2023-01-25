import HolidayDropdown from "./HolidayDropDown";
function HolidaysTable(){
    return (
        <div>
            <div >
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-50">
    <tr>
      <th scope="col" class="py-3 px-6">#</th>
      <th scope="col" class="py-3 px-6">Tittle</th>
      <th scope="col" class="py-3 px-6">Holiday Date</th>
      <th scope="col" class="py-3 px-6">Day</th>
      <th scope="col" class="py-3 px-6">Action</th>
    </tr>
  </thead>
  <tbody className="">
    <tr className="hover:bg-gray-50">
      <td class="py-4 px-6 "> <div class="flex items-center space-x-4 ">
		1
        </div>
        </td>
      <td class="py-4 px-6">New Year</td>
      <td class="py-4 px-6">1 Jan 2019</td>
      <td class="py-4 px-6"><div className="">Sunday</div></td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>
    <tr className="hover:bg-gray-300  bg-gray-300">
    <td class="py-4 px-6"><div class="flex items-center space-x-4 ">
		2
		
	</div></td>
      <td class="py-4 px-6">Good Friday</td>
      <td class="py-4 px-6">14 Apr 2019</td>
      <td class="py-4 px-6"><div >Friday</div></td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>
    <tr className="hover:bg-gray-300">
    <td class="py-4 px-6"><div class="flex items-center space-x-4 ">
		3
		
	</div></td>
      <td class="py-4 px-6">May Day</td>
      <td class="py-4 px-6">1 May 2019</td>
      <td class="py-4 px-6"><div >Monday</div></td>
      <td class="py-4 px-6"><HolidayDropdown/></td>
    </tr>
    
  </tbody>
</table>
        </div>
        </div>
    )
}
export default HolidaysTable;