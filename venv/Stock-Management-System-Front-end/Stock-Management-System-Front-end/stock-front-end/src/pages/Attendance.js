import Navbar from "../layouts/Nav"
import AttendanceSearch from "../components/AttendanceSearch";
import AttendanceTable from "../components/AttendanceTable";
function Attendance()
{
    return(
        <div>
            <Navbar>
            <div className="font-bold ">
                    <h1 className="text-2xl">Attendance</h1>
                    <h6 className="text-xs">
                          DASHBOARD /
                          <h6 className="text-blue-300 inline-flex ml-2">
                            {" "}
                            Attendance
                          </h6>
                        </h6>
                    </div>
                    
                <AttendanceSearch/>
                <br/>
                <AttendanceTable/>

            </Navbar>

        </div>
    )
}
export default Attendance;