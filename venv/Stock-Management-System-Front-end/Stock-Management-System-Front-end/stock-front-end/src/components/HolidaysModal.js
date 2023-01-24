import React, {useState} from "react"
import { Formik } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup'
import { AiOutlineCloseCircle, AiOutlineEye,AiOutlineCalendar } from "react-icons/ai";
import {BsPlusLg} from 'react-icons/bs'
import DatePicker from "./DatePicker";
import HolidayDatePicker from "./HolidayDatePicker"
import {IoCloseOutline} from 'react-icons/io';

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
     global:Yup.string().required("Required")
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
    <button onClick={toggleModal} className="bg-indigo-500 hover:bg-blue-800 text-white  py-2 px-4 rounded-full text-sm">
            + Add Holiday
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
      
      <form onSubmit={handleSubmit} className='min-w-[600px] w-full mx-auto bg-blue-50 p-8 px-8 rounded-lg flex flex-col space-y-1'>
        <div className="grid grid-cols-1 gap-2">
        <div className="text-center text-xl"><h1>Add Holiday</h1></div>
          <div className="flex flex-row-reverse">
            <div className="hover:font-blue-500" onClick={toggleModal}><AiOutlineCloseCircle/></div>
          </div>
        <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Holiday Name</label>
        <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <p className='error text-red-500 text-sm'>{errors.name && touched.name && errors.name}</p>
        </div>
      
       
        
       
        
        <div >
        <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pb-2">Holiday Date</label>
        <div className="relative w-full inline-flex gap-2 justify-between items-center border border-gray-300 p-2 rounded focus:border-gray-400 bg-white">
        <HolidayDatePicker/><span onClick={() => setOpenEye2(!openEye2)}>
        {openEye2 ? <AiOutlineCalendar /> : <AiOutlineCalendar/>}
      </span></div>
        <p className='error text-red-500 text-sm'>{errors.cpassword && touched.cpassword && errors.cpassword}</p>
        </div>
        </div>
        
        
      <br></br>
        <button type="submit" disabled={isSubmitting} onClick={toggleModal}
        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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