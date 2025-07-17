import React,{useState} from 'react'
export const Form =()=>{

    // const [name ,setname ]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");


    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
    })


    const handleinput=(e)=>{

        const {name ,value}=e.target;
        setFormData({...formData,
            [name]:value
        })




    }

    

    // const handlename =(e)=>{
    //     console.log(e);
    //     setname(e.target.value);

    // }

    //   const handlepassword=(e)=>{
    //     console.log(e);
    //     setPassword(e.target.value);

    // }

    // const handleemail=(e)=>{
    //     console.log(e);
    //     setEmail(e.target.value)
    // }

    const handlesubmit=(e)=>{
        console.log(e);
        e.preventDefault();

    }


    return(

        <form onSubmit={handlesubmit}>


            <label>

                Name :
                <input type='Text' value={formData.name} name="name" onChange={handleinput}  />
            </label>
            <br>
            </br>
            <br></br>
             <label>

                email :
                <input type='Email' value={formData.email} name="email" onChange={handleinput }  />
            
            </label>
            <br></br>

             <label>

                Password
                <input type='password' value={formData.password} name="password" onChange={handleinput }  />
            </label>
            <br></br>

            <button type="submit">submit </button>




        </form>
    )
}

export default Form;