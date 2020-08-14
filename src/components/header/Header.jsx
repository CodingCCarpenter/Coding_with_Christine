import React from 'react'

// component imports
import NavButton from '../../components/'

const Header = (props) => {

   return (
       <div>
           <ul>
               <li>
                    <NavButton />    
               </li>
               <li>
                    <NavButton />
               </li>
           </ul>
       </div>
   )
};

export default Header;