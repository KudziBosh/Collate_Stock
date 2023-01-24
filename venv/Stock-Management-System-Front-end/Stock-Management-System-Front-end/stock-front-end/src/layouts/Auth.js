import React from "react";
import logImg from '../assets/1.jpg'

function Auth (props){
    return(
        

      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-thin bg-primary mx-auto  rounded-l-lg max-w-[1500px] ' >
      <div className='bg-white-800 flex flex-col justify-center '>
      <label className="text-left text-center text-2xl text-gray-700 font-bold ">
      {props.title}
                  </label>
                      {props.children}
      </div>
      <div className='bg-white-800 flex flex-col justify-center'> <div className='max-w-[1000px] w-full mx-auto max-h-[600px]  p-8 px-8 rounded-lg flex flex-col space-y-1'>
      
        <img className='w-full h-screen scale-120' src={logImg} alt=""/>
      </div></div>
     
    </div>

    )
}

export default Auth;