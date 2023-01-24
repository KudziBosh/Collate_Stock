import Navbar from "../layouts/Nav"
import Modal from  "../components/LeavesModal"
import LeavesTable from "../components/LeavesTable";
import LeavesSearch from "../components/LeavesSearch";
function Leave()
{
    return(
        <div>
            <Navbar>
            <div className="font-bold  pt-5 text-left flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Leaves</h1>
                    <h6 className="text-xs">
                          DASHBOARD /
                          <h6 className="text-blue-200 inline-flex ml-2">
                            {" "}
                            Leaves
                          </h6>
                        </h6>
                    </div>
                    <div className="flex flex-row h-full text-2xl gap-2">
                        <Modal/>
                            
                                              

                    </div>
                    
                    
                </div>
                

                <div className="font-bold  pt-5 text-left flex flex-row justify-between">
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 p-2 dark:border-gray-700 items-center text-center">
                    <div className="flex flex-col"><span className="text-sm font-bold  p-2">Today Presents</span> <span className="text-3xl font-bold ">12/60</span></div>

                </div>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center text-center">
                    <div className="flex flex-col"><span className="text-sm font-bold p-2 ">Planned Leaves</span> <span className="text-3xl font-bold ">8 <span className="text-sm">Today</span></span></div>

                </div>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center text-center">
                    <div className="flex flex-col"><span className="text-sm font-bold  p-2">Unplanned Leaves</span> <span className="text-3xl font-bold ">0 <span className="text-sm">Today</span></span></div>

                </div>

                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 items-center text-center">
                    <div className="flex flex-col"><span className="text-sm font-bold  p-2">Penting Requests</span> <span className="text-3xl font-bold ">12</span></div>

                </div>
                </div>
                <br/>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">Show <div><select name="cars" id="cars">
                                    <option value="volvo">5</option>
                                    <option value="saab">10</option>
                                    <option value="opel">15</option>
                                    <option value="audi">20</option>
                                </select></div><div>Entries</div> </div>
                                <div className="flex flex-row gap-2">Search:<div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"><input   name="cpassword"   className="w-full border-black"/></div></div>
                </div>
                <LeavesSearch/>
                <br></br>
                <LeavesTable/>

            </Navbar>

        </div>
    )
}
export default Leave;