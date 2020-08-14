import React from 'react'

// component imports
import NavButton from '../buttons/NavButton'

// style imports
import "./Header.css"
const Header = (props) => {

   return (
       <div>
           <ul className='headerUList'>
               <li>
                    <NavButton linkTo='sign up'/>    
               </li>
               <li>
                    <NavButton linkTo='log in'/>
               </li>
               <li>
                    <NavButton linkTo='guest'/>
               </li>
           </ul>
       </div>
   )
};

export default Header;