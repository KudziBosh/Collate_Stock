import React from 'react'

const Sidebar3 = () => {
    const closeBet = () => {
        setActive(false);
     }
     const [active, setActive] = useState('');
     const [open, setOpen] = useState(true);
  
     React.useEffect (() =>{
         
     },[active])
     console.log("active",active)
     const [openEye, setOpenEye] = React.useState(false);
  
  return (
    <div>Sidebar3</div>
  )
}

export default Sidebar3