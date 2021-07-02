import {React } from 'react';
import '../../App.css';

export default function featureHelp(){
    let help = "Welcome. You have two dropdowns below. In the first dropdown, select you <i>Main Feature</i> and in second select your <i> Corelational Features<i/> ";
    return(
        <div>
            <div className='featureHelp'>
                <h4 style={{'text-align':'center'}}>Welcome</h4>
                <p>
                    You see two options below. Select your Main Feature through first dropdown.
                    Through second dropdown, select the feature/s which you would like to relate to your Main feature. 
                    These are also called Corelational Features.

                </p>
            </div>
        </div>
    )
}