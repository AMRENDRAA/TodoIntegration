import React from 'react';
import './Mobilelist.css';


export default function Mobilelist(props){
const {image,title,price}=props;

    return (

 <div className='Mobilelist'>


        {console.log(props)}
<img className='Image' src={image}/>
<div>
<h1>{title} $ {price}</h1> 
<button> Add to card </button>
</div>
</div>
    )
}