import React from 'react'

// component imports
import NavButton from '../buttons/NavButton'

// style imports
import "./Header.css"
const Header = (props) => {

   return (
       <div>
           <ul>
               <li>
                    <NavButton linkTo='sign up'/>    
               </li>
               <li>
                    <NavButton linkTo='log in'/>
               </li>
               <li>
               <li>
                    <NavButton linkTo='guest'/>
               </li>
               </li>
           </ul>
       </div>
   )
};

export default Header;