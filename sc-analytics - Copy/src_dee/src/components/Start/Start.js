import React from 'react';
import {Link} from 'react-router-dom';


export default function start(){
    return(
        <Link style={{textDecoration: 'none'}} to="/feature-dropdown">
            <div className='start-div'>
                <div style={{textAlign:'center', padding:'10px 0'}}>Get Started</div>
            </div>
        </Link>
    )
}