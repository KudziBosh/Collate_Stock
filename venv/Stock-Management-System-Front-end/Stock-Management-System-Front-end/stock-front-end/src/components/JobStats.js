import {FiTrendingUp} from "react-icons/fi"
function JobStats(props){
    return(
        <div className="flex flex-col ml-10">
        <div className="pt-4">{props.View}</div>
        <div class="flex flex-row items-center gap-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><div className="font-bold text-xl pt-2 pb-2">{props.hed} </div>
    {<div className="flex flex-row bg-green-100 text-green-500 items-center h-6 rounded"><div>{props.num}</div> <div><FiTrendingUp/></div> </div>}</div>
        <div class="text-xs text-gray-500  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">{props.user}</div>
        
        </div>
    )
}

export default JobStats;