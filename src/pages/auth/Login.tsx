import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { TfiLock } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import axios from "axios";

import login from "src/assets/Login.png";
import Footer from "components/Footer";
import Alert from "components/Alert";

const Login = () =>{
    const [alert, setAlert] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let username = "";
    const [idUser, setIdUser] = useState<any>([]);
    const [cookies, setCookie] = useCookies();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (email && password) {
    //         setDisabled(false);
    //     } else{
    //         setDisabled(true);
    //     }
    // }, [email, password]);

    const handleModal = () => {
        setIsActive(true);
    };
    
    const handleEmail = (e: string) => {
        setEmail(e);
    };
    
    const handlePassword = (e: string) => {
        setPassword(e);
    };
    
        async function handleLogin(e:any) {
            if (email && password !== '') {
                axios.post("https://altaimmersive.site/login ", {
                    "email": `${email}`,
                    "password": `${password}`
                })
                    .then((response) => {
                        const { name } = response.data.data;
                        const { id } = response.data.data;
                        const token = response.data.token
                        username = name
                        idUser.push(id)
                        setCookie('username', username, { path: "/" })
                        setCookie('id', idUser, { path: "/" })
                        setCookie('token', token, { path: "/" })
                        navigate(`/Dashboard/${username}`, {
                            state: {
                                userId: idUser
                            }
                        })
                        window.location.reload()
                    })
                    .catch((error) => {
                        setAlert(true)
                        const result = isAlert();
                    });
            } else {
                // jika username dan password kosong
                setAlert(true)
                const result = await isAlert();
            }
        }

        // alert arror login
        function isAlert() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    setAlert(false);
                }, 7000);
            });
        }

        // ketika username masih tersimpan di cookie ,user tidak perlu login kembali
        if (cookies.username) {
            navigate(`/Dashboard/${cookies.username}`);
        }


    return (
        <div>
            {screen.width >= 885 ? (
                // dekstop
                <>
                    <div className={`absolute top-0 z-50 w-full px-5 mt-5 duration-400 ${alert ? "block" : "hidden"}  `}>
                        <Alert />
                    </div>
                    <div className="w-full h-full flex flex-row px-16">
                        <div className="w-3/4 flex items-center ">
                            <img className="w-full" src={login} alt="" />
                        </div>
                        <div className="w-2/5 flex flex-col gap-8 px-2">
                            <h1 className="text-4xl">Welcome Back</h1>
                            <p>To keep conected with us please login with your personal information by email adress and password </p>
                            <form className="flex flex-col gap-2 ">
                                <div className="flex items-center gap-3 p-2 rounded-lg bg-grayalta">
                                    <CiMail className="text-2xl" />
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[12px]">Email Adress</label>
                                        <input onChange={(e) => handleEmail(e.target.value)} className="bg-transparent text-[16px] h-4 outline-none " type="email" required />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded-lg bg-grayalta">
                                    <TfiLock className="text-2xl" />
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[12px]">Password</label>
                                        <input onChange={(e) => handlePassword(e.target.value)} className="bg-transparent text-[16px] h-4 outline-none " type="password" required />
                                    </div>
                                </div>
                            </form>
                            <div className="flex justify-between ">
                                <div>
                                    <input id="remember" className="cursor-pointer mr-2" type="checkbox" />
                                    <label htmlFor="remember" className="cursor-pointer">
                                        Remember Me
                                    </label>
                                </div>
                                <label className="cursor-pointer">Forget password?</label>
                            </div>
                            <div>
                                <button onClick={handleLogin} className="w-24 h-10 bg-blue text-white rounded-lg">
                                    {" "}
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (

                // mobile & ipad
                <div className="bg-gray-100 duration-500">
                    <div className={`absolute top-0 z-50 w-full px-5 mt-5 duration-400 ${alert ? "block" : "hidden"}  `}>
                        <Alert />
                    </div>
                    <div className=" h-screen overflow-auto bg-gray-100 ">
                        <div className="flex flex-col justify-center py-5 px-3 items-center gap-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-blue">Welcome </h1>
                            <img src={login} alt="" />
                            <p className="text-center tetx-2xl md:text-2xl ">Start your career as a company's dream Software Engineer through the Immersive Program!</p>
                            <button onClick={handleModal} className="w-56 h-12 rounded-full bg-blue text-white text-xl font-semibold">
                                Login
                            </button>
                            <button className="w-56 h-12 rounded-full bg-blue text-white text-xl font-semibold">Register</button>
                        </div>
                    </div>

                    {/* modal */}
                    <div className={`${isActive ? "-translate-y-full" : "translate-y-full"} shadow-2xl shadow-black w-full h-4/5  fixed duration-500 bg-white flex flex-col items-center gap-8 p-3`}>
                        <h1 className="text-3xl font-semibold text-blue">Login</h1>
                        <p className="text-center text-blue">To keep conected with us please login with your personal information by email adress and password </p>
                        <form className="flex flex-col gap-4">
                            <input onChange={(e) => handleEmail(e.target.value)} className="p-2 px-5 outline-none bg-gray-100 rounded-full" type="email" placeholder="Email" required />
                            <input onChange={(e) => handlePassword(e.target.value)} className="p-2 px-5 outline-none bg-gray-100 rounded-full" type="password" placeholder="Password" required />
                            <button onClick={(e) => handleLogin(e.preventDefault())} className="w-58 h-8 bg-blue text-white rounded-full">
                                Login
                            </button>
                        </form>
                        <p className="text-md font-semibold text-blue">Forget Password?</p>
                        <p className="text-blue">
                        Dont have an account? <span className="text-orange">Register</span>
                        </p>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
};



export default Login;