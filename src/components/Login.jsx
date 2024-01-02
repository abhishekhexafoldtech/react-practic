import { useState } from "react"
import { Link, Navigate } from "react-router-dom";

function Login() {

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    function getFormData(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData, [name]:value
        });
    }

    function submit() {
        console.log(formData);
        <Navigate 
            to="/crud"
        />
    }                                                                                                                                                               

    return (
        <>  
            <div className="w-1/2 min-h-screen">
                <div className="bg-white mx-56 my-60 px-5 py-5 pb-20 flex flex-col rounded-2xl">
                    <h1 className="text-center font-bold text-2xl">Sign In</h1>
                    <span className="text-center my-5">Enter your email and password to sign in</span>
                    <input name="userName" onChange={ getFormData} className="border mx-2 my-3 rounded-md h-10 px-3" placeholder="Email/Phone Number" type="text" /> 
                    <input name="password" onChange={ getFormData} className="border mx-2 my-3 rounded-md h-10 px-3" placeholder="Password" type="password" /> 
                    <span className="text-right my-5">forgot password</span>
                    <Link to='/base'>  </Link>
                        <button onClick={ submit }  className="bg-blue-600 text-white py-3 px-3 rounded-xl">Sign In</button>
                  
                </div>
            </div>
        </>
    )
}



export default Login