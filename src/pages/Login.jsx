import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState('')
    const [password, setPassword] = useState("")
    const { user, logIn } = UserAuth()
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await logIn(email, password);
          navigate('/')
        } catch (error) {
          console.log(error);
          setError(error.message)
        }
      };

  return (
    <div>
        <div className="w-full h-screen">
            <img className="hidden sm:block absolute w-full object-cover h-full " src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/920ce59c-55a5-40fe-acb3-a9189783886f/US-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

            <div className="bg-black/40 fixed top-0 left-0 w-full h-screen"></div>

            <div className="fixed w-full px-4 py-24 z-50" > 
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white" >
                    <div className="max-w-[320px] mx-auto py-16" >
                        <h1 className="text-3xl font-bold" >Sign In</h1>
                        {error ? <p className="p-3 bg-red-500 my-2 ">{error}</p> : null}
                        <form onSubmit={submitHandler} className="w-full flex flex-col py-4" >
                            <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-600/60 rounded " type="email" placeholder="Email" autoComplete="email" />
                            <input 
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 my-2 bg-gray-600/60 rounded " type="password" placeholder="Password" autoComplete="current-password" />

                            <button className="bg-red-600 py-3 my-6 rounded font-bold" >
                                Sign In 
                            </button>
                            
                            <div className="flex items-center justify-between text-sm text-gray-200">
                                <p className="mr-2"> 
                                    <input type="checkbox" /> Auto Sign-in
                                </p>
                                <p>Help?</p>
                            </div>
                            
                            <p className="py-8">
                                <span className="text-gray-500 mr-2">Not a subscriber?</span>
                                <Link to="/signup">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login