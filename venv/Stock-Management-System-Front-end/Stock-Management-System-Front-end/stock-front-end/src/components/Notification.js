import {BiBell} from 'react-icons/bi'
function Notification(){

    return(
        <div className="">

<button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-gray-700 bg-white rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  
  <div className='scale-150'><BiBell/></div>
  
  <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-2 h-2 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">.</div>
</button>

</div>
    );
}  
export default Notification;