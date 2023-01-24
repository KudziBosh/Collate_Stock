import React from 'react'

function Nav () {
  return (
    <div>
    <div className='grid grid-cols-12'>
        <div className='grid-start-1 grid-end-3 border-r border-b'>
            <ul>
                <li>vvvvv</li>
                <li>nnnn</li>
            </ul>
        </div>
        <div className='grid-start-3 grid-end-12 w-[2000px] border-b'></div>
    </div>
    <div className='grid grid-cols-12'>
        <div className='grid-start-1 grid-end-3 border-r h-[1000px]'></div>
        <div></div>
    </div>
    </div>
    
  )
}
export default Nav;
