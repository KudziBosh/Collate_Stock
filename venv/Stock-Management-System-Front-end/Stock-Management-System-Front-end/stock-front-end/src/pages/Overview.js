import Sidebar from "../components/Sidebar";
import SideBar2 from "../components/SideBar2";
import Searchbar from "../components/Searchbar";
import Notification from "../components/Notification";
import ProfileCard from "../components/ProfileCard";
import JobStats from "../components/JobStats";
import BarGraph from "../components/BarGraph";
import Piechart from "../components/DoughnutChart";
import DatePicker from "../components/DatePicker";
import { FiTrendingUp } from "react-icons/fi";
import { GiFireworkRocket } from "react-icons/gi";
import DoughnutChartDemo from "../components/Doughnut2.0";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import Filter from "../components/Filter";
import EmployeesDropdown from "../components/EmployeesDropdown";

//import Piechart from './components/DoughnutChart';
import "../App.css";
import EmployeeStatus from "../components/EmployeeStatus";

function Overview() {
  return (
    <div className="flex flex-row">
      <div className="  ">
        <SideBar2 />
      </div>

      <div className=" w-full p-4">
        <div className=" pt-2 2xl:pt-4 pb-2 2xl:pb-4   flex flex-row justify-between border-b">
          <div className="">
            <Searchbar />
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row-reverse ">
              <Notification />
            </div>

            <div className="mr-2 pl-2">
              {" "}
              <ProfileCard />{" "}
            </div>
          </div>
        </div>

        <div className="pt-2 2xl:pt-4 col-span-12 flex flex-row justify-between min-w-[1200px] ">
          {" "}
          <div className=" flex items-center  col-span-2 text-left text-lg text-gray-700 font-bold">
            Overview
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <EmployeesDropdown />
            </div>
            <div class="flex flex-col items-center pb-10">
              <h5 class="mb-1 text-8xl font-medium text-gray-900 dark:text-white">
                <BsList />
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Purchase Order Records
              </span>
            </div>
          </div>

          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <EmployeesDropdown />
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://source.unsplash.com/75x75/?portrait"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Sales Records
              </span>
            </div>
          </div>

          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <EmployeesDropdown />
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://source.unsplash.com/75x75/?portrait"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Back order items
              </span>
            </div>
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <EmployeesDropdown />
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://source.unsplash.com/75x75/?portrait"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Layby items
              </span>
            </div>
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <EmployeesDropdown />
            </div>
            <div class="flex flex-col items-center pb-10">
              <h5 class="mb-1 text-8xl font-medium text-gray-900 dark:text-white">
                <BsFillGrid3X3GapFill />
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Creditors List
              </span>
            </div>
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <EmployeesDropdown />
            </div>
            <div class="flex flex-col items-center pb-10">
              <h5 class="mb-1 text-8xl font-medium text-gray-900 dark:text-white">
                <BsFillGrid3X3GapFill />
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Payments Record
              </span>
            </div>
          </div>
        </div>

        <br></br>

        <br></br>

        <br></br>
      </div>
    </div>
  );
}

export default Overview;
