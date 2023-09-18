import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import upload from "assets/Upload.png";
import Container from "components/Container";
import Layout from "components/Layout";

const Registrasi = () =>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const navigate = useNavigate();


    const handleRegister = async() => {
        const data = {
            email: email,
            password: password,
            fullname: fullname
        }
        try {
            const res = await axios.post('http://localhost:3000/user', data)
            console.log(res.data)
            if(res){
                navigate('/login')
            }
        } catch (error) {
            
        }
    }  


    return (
        <Layout>
            <Container>
                <div className="relative flex flex-col w-full bg-dark-alta">
                    <div className="flex items-center justify-center  my-auto">
                        <img src={upload} width={450} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full h-screen ">
                    <div className="w-full p-3 m-auto bg-zinc-200 rounded-md shadow-xl lg:max-w-xl justify-center ">
                        <h1 className="text-5xl font-bold text-center text-dark-alta uppercase mt-10 mb-10">
                            Sign Up
                        </h1>
                        <form
                            className="mt-7 flex flex-col justify-center align-middle"
                            onSubmit={handleRegister}
                        >
                            <div className="mb-5 mx-auto">
                                <label
                                    htmlFor="fullname"
                                    className="block text-sm font-semibold text-dark-alta"
                                >
                                    Full Name
                                </label>
                                <input
                                    placeholder="example"
                                    required
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    type="fullname"
                                    className="input input-md block w-[400px] px-4  py-2 mt-2 text-dark-alta bg-white border rounded-md focus:border-dark-alta focus:ring-dark-alta outline-dark-alta outline outline-1 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-5 mx-auto">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-dark-alta"
                                >
                                    Email
                                </label>
                                <input
                                    placeholder="example@gmail.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="input input-md block w-[400px] px-4  py-2 mt-2 text-dark-alta bg-white border rounded-md focus:border-dark-alta focus:ring-dark-alta outline-dark-alta outline outline-1 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2 mx-auto">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-dark-alta"
                                >
                                    Password
                                </label>
                                <input
                                    placeholder="Type your password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="input input-md w-[400px] block mx-auto px-4 py-2 mt-2 text-dark-alta bg-white border rounded-md focus:border-dark-alta focus:ring-dark-alta outline-dark-alta outline outline-1 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            {/* <div className="flex flex-row justify-between ">
                                <p className="flex items-center text-dark-alta text-xs ml-16">
                                    <input
                                    className="mr-1 text-dark-alta checkbox checkbox-xs  "
                                    type="checkbox"
                                    />
                                    Remember Me
                                </p>
                                <a
                                    href="#"
                                    className="text-xs text-dark-alta hover:underline mr-16"
                                >
                                    Forget Password?
                                </a>
                            </div> */}
                            <div className="mt-10 mx-auto ">
                            <button
                                // onClick={() => handleLogin()}
                                className="btn btn-wide mx-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-alta rounded-md hover:bg-orange-700 focus:outline-none focus:bg-dark-alta"
                            >
                                Register
                            </button>
                            </div>
                        </form>

                        <p className="mt-8 text-xs font-light text-center text-dark-alta mb-10">
                            {" "}
                            Already have an account?{" "}
                            <a href="Login" className="font-medium text-dark-alta hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                </div>

                
            </Container>
        </Layout>

    );
};



export default Registrasi;