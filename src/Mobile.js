import React from 'react'
import Mobilelist from './Mobilelist';

const book1=[{
image :'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70',

title: 'Motorola G85',
 price:'100'

},

{
image :'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/e/n/-original-imahcd9jfafm3s5g.jpeg?q=70',

title: 'Motorola G65',
 price:'120'

}
]


export default function Mobile(){

    return(
        <div>

            {book1.map((ele)=>{
                return<Mobilelist
                image={ele.image}
                title={ele.title}
                price={ele.price}/>
            })}
           
            Hello Mobile
            
        </div>
    )
}