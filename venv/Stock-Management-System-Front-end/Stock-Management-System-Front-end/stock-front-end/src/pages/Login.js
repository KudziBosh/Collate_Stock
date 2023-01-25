import '../App.css';
import React from 'react';
import { Formik } from 'formik';
import Auth from '../layouts/Auth';
import {Link} from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    
    password: Yup.string()
      .required("Please Enter your password")
      ,
    
  });

function Basic(){ 
  const [openEye, setOpenEye] = React.useState(false);
  return(
 
   
    <Formik
    
    initialValues={{ email: '', password: '' }}
    validationSchema={registerSchema}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
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
      <Auth title='Login'>
      <form onSubmit={handleSubmit} className='max-w-[600px] w-full mx-auto bg-blue-50 p-8 px-8 rounded-lg flex flex-col space-y-1'>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
      <div className="relative w-full inline-flex gap-2 items-center border border-gray-300 p-2 rounded focus:border-gray-400">
      <input
          type="email"
          name="email"
          className="w-full"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
      </div>
        
        {errors.email && touched.email && errors.email}
        
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Your password</label>
        <div className="relative w-full inline-flex gap-2 items-center border border-gray-300 p-2 rounded focus:border-gray-400 ">
        <input
          type={openEye?"text":"password"}
          name="password"
          className="w-full"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
         <span onClick={() => setOpenEye(!openEye)}>
        {openEye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </span></div>
        {errors.password && touched.password && errors.password}
        <br></br>
        <div className="flex space-x-100  items-center h-5 justify-between ">
        <p><input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        <label htmlFor className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></p>
        <Link to="/ForgotPassword" className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 underline '>ForgotPassword?</Link>
      </div>
      <br></br>
      <Link to='/Overview' className='w-full'>
        <button type="submit" disabled={isSubmitting}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm min-w-[540px] sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          LOGIN
        </button>
        </Link>
        <div className="flex items-start mb-6 ml-2 text-sm font-medium gap-2">
      Don't have an Account? <Link to="/Register" className='underline text-blue-500 '>Sign Up</Link>
      </div>
      </form>
      </Auth>
    )}
   
  </Formik>
   
  
); } 

export default Basic;