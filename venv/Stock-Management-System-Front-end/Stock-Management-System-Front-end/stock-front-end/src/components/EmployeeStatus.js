function EmployeeStatus(){
    return(
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg min-w-[700px] min-h-[400px]">
        <div >
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="py-3 px-6">Employee Name</th>
      <th scope="col" class="py-3 px-6">Job Title</th>
      <th scope="col" class="py-3 px-6">Team Lead</th>
      <th scope="col" class="py-3 px-6">Status</th>
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
		
	</div></td>
      <td class="py-4 px-6">Front-end Developer</td>
      <td class="py-4 px-6">Donatella Nobatti</td>
      <td class="py-4 px-6"><div className=" bg-yellow-100 text-yellow-500">Offboarding</div></td>
    </tr>
    <tr>
    <td class="py-4 px-6"><div class="flex items-center space-x-4 ">
		<div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Christian Mingle
			</p>
		</div>
		
	</div></td>
      <td class="py-4 px-6">Project Manager</td>
      <td class="py-4 px-6">Hogo First</td>
      <td class="py-4 px-6"><div className=" bg-green-100 text-green-500">Onboarding</div></td>
    </tr>
    <tr>
    <td class="py-4 px-6"><div class="flex items-center space-x-4 ">
		<div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Sara Bellum
			</p>
		</div>
		
	</div></td>
      <td class="py-4 px-6">Senior UX Designer</td>
      <td class="py-4 px-6">Mike Roscope</td>
      <td class="py-4 px-6"><div className="  bg-green-100 text-green-500">Onboarding</div></td>
    </tr>
    <tr>
    <td class="py-4 px-6"><div class="flex items-center space-x-4 ">
		<div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Frank Senbeans
			</p>
		</div>
		
	</div></td>
      <td class="py-4 px-6">UX Designer</td>
      <td class="py-4 px-6">Mike Roscope</td>
      <td class="fill-green-500 py-4 px-6"><div className=" bg-green-100 text-green-500">Onboarding</div></td>
    </tr>
    <tr>
    <td class="py-4 px-6"><div class="flex items-center space-x-4 ">
		<div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            Sarah Yevo
			</p>
		</div>
		
	</div></td>
      <td class="py-4 px-6">UI Designer</td>
      <td class="py-4 px-6">Mike Roscope</td>
      <td class="py-4 px-6"><div className=" bg-yellow-100 text-yellow-500">Offboarding</div></td>
    </tr>
  </tbody>
</table>
        </div>
        <div className="w-full ">
        <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
  <li className="ml-2 mr-20">
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500   hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Showing 1 to 5 of 300 entries</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">..</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">75</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>
        </div>
        </div>
    )
}
export default EmployeeStatus;