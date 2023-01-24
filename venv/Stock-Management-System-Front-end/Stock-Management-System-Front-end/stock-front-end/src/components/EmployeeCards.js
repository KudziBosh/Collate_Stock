import {BsChevronExpand} from 'react-icons/bs'
import {BiDownArrow} from 'react-icons/bi'
import EmployeesDropdown from './EmployeesDropdown';
function EmployeeCard(props){
    return(
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
       <EmployeesDropdown/>
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://source.unsplash.com/75x75/?portrait" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        
    </div>
</div>
    )
}
export default EmployeeCard;