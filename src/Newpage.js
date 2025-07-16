import {React} from 'react';

export function NewPage(props){
  let a=6;
  let b="Component";
  let fruits=["Apple","banana","Pineapple","Mango"];

  return (

    <div className='App'>


      <h1> Hello from Component NewPage </h1>
      {a}
      <h2> Component is included </h2>
      {b}
      <h3> Fruits list is :</h3>
      <ul>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}

      </ul>
    </div>





  )
}

export default NewPage;