import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Payroll from "./pages/Payroll";
import Employees from "./pages/Employees";
import Candidates from "./pages/Candidates";
import Help from "./pages/Help Center";
import Jobs from "./pages/Jobs";
import Basic from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Calendar from "./pages/Calendar"
import Holidays from "./pages/Holidays";
import Leave from "./pages/Leave"
import Attendance from "./pages/Attendance";
//import Piechart from './components/DoughnutChart';
import './App.css';
import Settings from "./pages/Settings";
import ListItems from "./pages/ListItems";


function App() {
  return (
    <Router>
           <Routes>
                   
                 <Route exact path='/' element={< ListItems/>}></Route>
                 <Route exact path='/Overview' element={<Overview />}></Route>  
                 <Route exact path='/Payroll' element={<Payroll />}></Route>            
                 <Route exact path='/Employees/AllEmployees' element={<Employees />}></Route> 
                 <Route exact path='/Jobs' element={<Jobs />}></Route> 
                 <Route exact path='/Help' element={<Help />}></Route> 
                 <Route exact path='/Candidates' element={<Candidates />}></Route> 
                 <Route exact path='/Settings' element={<Settings />}></Route> 
                 <Route exact path='/Register' element={< Register />}></Route>
                 <Route exact path='/ForgotPassword' element={<ForgotPassword/>}></Route>
                 <Route exact path='/Calendar' element={<Calendar/>}></Route>
                 <Route exact path='/Employees/Holidays' element={<Holidays/>}></Route>
                 <Route exact path='/Employees/Leave' element={<Leave/>}></Route>
                 <Route exact path='/Employees/Attendance' element={<Attendance/>}></Route>
                 
              
          </Routes> 
       </Router>
  );
}

export default App;
