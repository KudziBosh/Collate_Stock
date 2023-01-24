import React, {useState} from "react"
import { Formik } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup'
import { AiOutlineEyeInvisible, AiOutlineEye,AiOutlineCalendar ,AiOutlineCloseCircle } from "react-icons/ai";
import {BsPlusLg} from 'react-icons/bs' 
import HolidayDatePicker from "./HolidayDatePicker";

const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    specialityId: Yup.string().required("Specialty is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!\"\,;\/.\(\)\?\:`@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, Atleast One Uppercase, Atleast One Lowercase, Atleast One Number and One Special Case Character"
      ),
    cpassword: Yup.string()
      .required("Password Confirmation is required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
      name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
  });
function Modal (){

    const [modal, setModal]= useState(false);
    const toggleModal= ()=>{
        setModal(!modal)
    } 
    const [openEye, setOpenEye] = React.useState(false);
    const [openEye2, setOpenEye2] = React.useState(false);
    

    return(
<div>
    <button onClick={toggleModal} className="bg-indigo-500 hover:bg-blue-700 text-white text-sm  py-2 px-4 rounded-full">
            + Add Leave
    </button>
    {modal&& (
             <div  className="bg-blue-400 bg-opacity-30 fixed inset-0 z-50">
             <div className="flex h-screen justify-center items-center">
                 <div className="flex-center ">

                 <Formik
    
    initialValues={{ email: '',name:'', password: '',cpassword: '' }}
    validationSchema={registerSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      console.log("Form values", values)
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      
      <form onSubmit={handleSubmit} className='min-w-[800px] w-full o bg-blue-50 p-8 px-8 rounded-lg flex flex-col space-y-1 text-sm'>
        <div className="flex flex-row-reverse">
            <div className="hover:font-blue-500" onClick={toggleModal}><AiOutlineCloseCircle/></div>
          </div>
        <div className="text-center text-xl"><h1>Add Leave</h1></div>
        <div className="grid grid-cols-1 gap-2">
        
        <div className="w-full ">
            
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Leave Type</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
           
            </div>    
     
            <div >
        <label htmlFor="cpassword" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pb-2">From</label>
        <div className="relative w-full inline-flex justify-between gap-2 items-center border border-gray-300 p-2  focus:border-gray-400 bg-white">
        <HolidayDatePicker/><span onClick={() => setOpenEye2(!openEye2)}>
        {openEye2 ? <AiOutlineCalendar /> : <AiOutlineCalendar/>}
      </span></div>
        <p className='error text-red-500 text-sm'>{errors.cpassword && touched.cpassword && errors.cpassword}</p>
        </div>
        
       
        <div >
        <label htmlFor="cpassword" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pb-2">To</label>
        <div className="relative w-full inline-flex justify-between gap-2 items-center border border-gray-300 p-2  focus:border-gray-400 bg-white">
        <HolidayDatePicker/><span onClick={() => setOpenEye2(!openEye2)}>
        {openEye2 ? <AiOutlineCalendar /> : <AiOutlineCalendar/>}
      </span></div>
        <p className='error text-red-500 text-sm'>{errors.cpassword && touched.cpassword && errors.cpassword}</p>
        </div>

        <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number of days</label>
        <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <p className='error text-red-500'>{errors.name && touched.name && errors.name}</p>
        </div>

        <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remaining Leaves</label>
        <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <p className='error text-red-500'>{errors.name && touched.name && errors.name}</p>
        </div>

        <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Leave Reason</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write reason..."></textarea>

        <p className='error text-red-500'>{errors.name && touched.name && errors.name}</p>
        </div>

        </div>

        
        
        
      <br></br>
        <button type="submit" disabled={isSubmitting} onClick={toggleModal}
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
        
      </form>
     
    )}
   
  </Formik>
                 
                 </div>
             
              </div>
         </div>
    )}
       
             

</div>

    )
} 
export default Modal;