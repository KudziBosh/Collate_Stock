import React from 'react';
import { Formik } from 'formik';
import Auth from '../layouts/Auth';
import {Link} from 'react-router-dom';
import * as Yup from 'yup'


    const registerSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
       
      });
    
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const ForgotPassword= () =>(
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
      <Auth title='Reset Password'>
      <form onSubmit={handleSubmit} className='max-w-[600px] w-full mx-auto bg-blue-50 p-8 px-8 rounded-lg flex flex-col space-y-1'>

        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input
          type="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <p className='error text-red-500'>{errors.email && touched.email && errors.email}</p>
       
       
      <br></br>
        <button type="submit" disabled={isSubmitting}
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
        <div className="flex items-start mb-6 ml-2 text-sm font-medium gap-2 pt-2">
      Remembered Password?<Link to="/" className='underline text-blue-500 '>Sign In</Link>
      </div>
      </form>
      </Auth>
    )}
   
  </Formik>
  );

export default ForgotPassword;