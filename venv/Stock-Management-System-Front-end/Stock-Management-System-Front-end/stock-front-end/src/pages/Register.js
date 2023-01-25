import React from 'react';
import { Formik } from 'formik';
import Auth from '../layouts/Auth';
import {Link} from 'react-router-dom';
import * as Yup from 'yup'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

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

function Register  () { 
  const [openEye, setOpenEye] = React.useState(false);
  const [openEye2, setOpenEye2] = React.useState(false);
  return (
 
   
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
        <Auth title='Register'>
        <form onSubmit={handleSubmit} className='max-w-[600px] w-full mx-auto bg-blue-50 p-8 px-8 rounded-lg flex flex-col space-y-1'>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <p className='error text-red-500'>{errors.name && touched.name && errors.name}</p>
          
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pb-2">Your email</label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p className='error text-red-500'>
          {errors.email && touched.email && errors.email}</p>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pb-2">Your password</label>
          <div className="relative w-full inline-flex gap-2 items-center border border-gray-300 p-2 rounded focus:border-gray-400">
          <input
            type={openEye?"text":"password"}
            name="password"
            className="w-full"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          /><span onClick={() => setOpenEye(!openEye)}>
          {openEye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span></div>
          <p className='error text-red-500'>
          {errors.password && touched.password && errors.password}</p>
          <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pb-2">Confirm password</label>
          <div className="relative w-full inline-flex gap-2 items-center border border-gray-300 p-2 rounded focus:border-gray-400">
          <input
            type={openEye2?"text":"password"}
            name="cpassword"
            className="w-full"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpassword}
          /><span onClick={() => setOpenEye2(!openEye2)}>
          {openEye2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span></div>
          <p className='error text-red-500'>{errors.cpassword && touched.cpassword && errors.cpassword}</p>
        <br></br>
          <button type="submit" disabled={isSubmitting}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
          <div className="flex items-start mb-6 ml-2 text-sm font-medium gap-2">
        Already have an Account?<Link to="/" className='underline text-blue-500 '>Sign In</Link>
        </div>
        </form>
        </Auth>
      )}
     
    </Formik>
    
  
);}

export default Register;