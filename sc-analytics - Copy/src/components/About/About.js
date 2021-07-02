import {React } from 'react';
import logo from '../../My Images/logo.png';

export default function about(){
    return(
        <div className='About'>
            <h1 style={{'text-shadow': '-2px 2px 1px grey' , 'color':'#303030'}}>About Us</h1>
            <img style={{ 'width': '20%', 'paddingRight':'18px' }} id='image' src={logo} alt={'Monkey'}></img>
            <p style={{'color':'teal', 'opacity':'0.7'}}>We are a group of rag-tag developers trying to make it through this semester. Pls Welp. This project has our heart and soul.</p>
            <div style={{'border':'1px solid teal', 'display':'inline-block', 'padding':'1%', 'border-radius':'10px', 'box-shadow':'2px 2px 5px grey'}}>
                <p>This is a A-Ha Moment Finder Website.</p>
                <p>You can use this website to find out the co-relation between any two features in your own website/webapp. Just head on over to out our main page to get started.</p>
            </div>
        </div>
    )
}