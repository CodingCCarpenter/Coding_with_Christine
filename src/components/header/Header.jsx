import React from 'react'

// component imports
import NavButton from '../buttons/NavLink'

// style imports
import "./Header.css"
const Header = (props) => {

   return (
       <div>
           <ul className='nav'>
               <li>
                    <NavButton link='Browse'/>    
               </li>
               <li>
                    <NavButton link='About'/>
               </li>
               <li>
                    <NavButton link='Contact'/>
               </li>
           </ul>
       </div>
   )
};

export default Header;