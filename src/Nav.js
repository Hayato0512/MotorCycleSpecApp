import React, { Component } from 'react';
import { DirectionsBike } from '@material-ui/icons';
import {Link} from 'react-router-dom';



function Nav(){


    return (
        <nav>
        <DirectionsBike/>
       <ul>
       <Link to = '/'>
         <li onClick={() => window.location.reload(false)}>Home</li>
       </Link>
       <Link to = '/about'>
         <li>About</li>
       </Link>
       </ul> 
        </nav>
    )
}


export default Nav;