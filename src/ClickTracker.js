import React ,{useEffect,useState} from "react";

const ClickTracker=()=>{

        const [clicked ,setclicked ]=useState();

        const[count,setcount]=useState(0);

    useEffect(()=>{
        console.log('WE ARE IN USESTATE');
    },[count]);





    return(
        <div>
            <button onClick={()=>setclicked('Subscribe')}> Subscribe </button>
            <br/>
            <hr/>
            <button onClick={()=>setclicked('To')}> To</button>
            <br/>
            <hr/>
            <button onClick={()=>setclicked('Pandit')}>Pandit </button>
            <br/>
            <hr/>

            <h1> {clicked }</h1>

            <button onClick={()=>setcount(count+1)}>increment by 1 </button>
            <h2> count is {count}</h2>
        </div>
    )




}

export default ClickTracker;