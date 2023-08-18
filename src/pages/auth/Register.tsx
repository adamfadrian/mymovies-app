import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff, HiOutlineMail, HiOutlineUserCircle } from "react-icons/hi";
import { TfiUnlock } from "react-icons/tfi";
import axios from "axios";

import Upload from "src/assets/Upload.png";
import Container from "components/Container";
import Layout from "components/Layout";

const Register = () =>{
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (name && email && password) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
    }, [name, email, password]);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const body = {
          name,
          email,
          password,
        };
        await axios
    //       .post("", body)
    //       .then((res) => {
    //         const { message, data } = res.data;
           
    //           title: "Success",
    //           text: "Account created",
    //           showCancelButton: false,
    //         });
    //         if (res) {
    //           navigate("/login");
    //         }
    //       })
    //       .catch((err) => {
    //         const { message } = err.response;
           
    //           title: "Failed",
    //           text: "Please use another email",
    //           showCancelButton: false,
    //         });
    //       })
    //       .finally(() => setLoading(false));
    };


    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Layout>
            <Container>
                {
                    screen.width > 767 ? 
                    <div className="h-screen w-screen ">
                        <div className="flex h-screen items-center xl:ml-[200px] md:ml">
                            <div className="w-fit p-6 bg-blue-500 align-middle rounded-xl shadow-xl 2xl:max-w-md 2xl:max-h-[800px] lg:max-h-[600px] xl:max-w-lg">
                                <h1 className="text-2xl 2xl:text-5xl font-bold text-center text-white uppercase py-5 ">
                                    REGISTER
                                </h1>
                                <p className="text-white text-center 2xl:mb-20 mb-10   ">
                                    To keep connected with us please Register with your personal
                                    information by email adress, password and username
                                </p>

                                    <form className="flex flex-col" >
                                        <div className="relative z-0 w-full mb-10 group ">
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className=" block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer active:outline-none active:bg-transparent active:ring-0"
                                                placeholder=""
                                                required
                                            />
                                            <label
                                                htmlFor="email"
                                                className="peer-focus:font-xl flex flex-row gap-2 absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                <HiOutlineMail size={20} /> Email address
                                            </label>
                                        </div>
                    
                                        <div className="relative z-0 w-full mb-10 group">
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="password"
                                                className="flex flex-row gap-2 peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                <TfiUnlock size={20} /> Password
                                            </label>
                                            <button
                                                type="button"
                                                className="absolute right-2 top-2 text-white"
                                                onClick={handleTogglePassword}
                                            >
                                                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                            </button>
                                        </div>
                                        <div className="relative z-0 w-full mb-10 group">
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                type="username"
                                                name="username"
                                                id="username"
                                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="username"
                                                className="flex flex-row gap-2 peer-focus:font-xl absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                <HiOutlineUserCircle size={20} /> Username
                                            </label>
                                        </div>

                                        <button
                                            onClick={handleTogglePassword}
                                            className="btn btn-wide btn-md 2xl:btn-lg flex mx-auto 2xl:mt-10 mt-5 mb-10 px-4 py-2 tracking-wide border-orange-alta hover:border-orange-alta text-white transition-colors duration-200 transform bg-orange-alta rounded-md hover:bg-orange-700 focus:outline-none focus:bg-dark-alta"
                                        >
                                            <p className="text-2xl">SignUp</p>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div> 
      
                        :
                        <div className="flex flex-col w-screen">
                            <div className="h-full w-full bg-blue-500 z-10"></div>
                            <div className="flex h-screen items-center xl:ml-[200px] md:ml">
                                <div className="w-full h-auto p-6 bg-blue-500 align-middle  shadow-xl lg:max-w-xl">
                                    <h1 className="text-2xl font-bold text-center text-white uppercase mt-4 mb-10">
                                        REGISTER
                                    </h1>
                                    <form className="flex flex-col" >
                                        <div className="relative z-0 w-full mb-10 group ">
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none active:bg-transparent active:ring-0"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="email"
                                                className="peer-focus:font-xl flex flex-row gap-2 absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                <HiOutlineMail size={20} /> Email address
                                            </label>
                                        </div>

                                        <div className="relative z-0 w-full mb-10 group">
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="password"
                                                className="flex flex-row gap-2 peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                <TfiUnlock size={20} /> Password
                                            </label>
                                            <button
                                                type="button"
                                                className="absolute right-2 top-2 text-white"
                                                onClick={handleTogglePassword}
                                            >
                                                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                            </button>
                                        </div>
                                        <div className="relative z-0 w-full mb-10 group">
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                type="name"
                                                name="name"
                                                id="name"
                                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="username"
                                                className="flex flex-row gap-2 peer-focus:font-xl absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                <HiOutlineUserCircle size={20} /> Username  
                                            </label>
                                        </div>

                                        <button
                                            onClick={handleTogglePassword}
                                            className="btn btn-wide sm:btn-sm md:btn-md lg:btn-lg flex mx-auto mt-10 mb-10 px-4 py-2 tracking-wide border-orange-alta hover:border-orange-alta text-white transition-colors duration-200 transform bg-orange-alta rounded-md hover:bg-orange-700 focus:outline-none focus:bg-dark-alta"
                                        >
                                            <p className="text-2xl">SignUp</p>
                                        </button>
                                        <p>Already have an account </p>
                                    </form>
                                </div>
                            </div>

                        </div>
                }
            </Container>
        </Layout>
    );
};

export default Register;