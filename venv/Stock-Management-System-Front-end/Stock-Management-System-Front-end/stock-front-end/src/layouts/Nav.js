import Sidebar from '../components/Sidebar';
import SideBar2 from '../components/SideBar2';
import Searchbar from '../components/Searchbar';
import Notification from '../components/Notification';
import ProfileCard from '../components/ProfileCard';
import JobStats from '../components/JobStats';
import BarGraph from '../components/BarGraph';
import Piechart from '../components/DoughnutChart';
//import Piechart from './components/DoughnutChart';
import '../App.css';
import EmployeeStatus from '../components/EmployeeStatus';

function Navbar(props) {
  return (
    <div className="flex flex-row">
    <div className='  '>
     <SideBar2/>
     </div  >
     
     <div className=' w-full p-3 gap-4'>
     <div className=" pt-2 2xl:pt-4 pb-2 2xl:pb-4 pr-2  flex flex-row justify-between border-b">
    
     
    <div className=""><Searchbar/></div>
    <div className='flex flex-row gap-2'><div className="flex flex-row-reverse "><Notification/></div> 
    
   
    <div className="mr-2 pl-2"> <ProfileCard/> </div></div>
    
    </div>
 
    {props.children}
    
    
        
       
    
     </div>
     
     
     
     </div>
  );
}

export default Navbar;
