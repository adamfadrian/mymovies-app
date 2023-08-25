import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

import login from "src/assets/Login.png";
import Container from "components/Container";
import Layout from "components/Layout";
import { setUser } from "utils/redux/reducers/user/userSlice";

interface UserData {
    email: string;
    password: string;
    fullname: string;
}

const Login = () => {
    const [password, setPassword] = useState<any>("");
    const [email, setEmail] = useState("");
    const [cookies, setCookie] = useCookies(["userToken"]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user')
            if (res) {
                return res.data
            }
        } catch (error) {
            console.log('error please run the db.json', error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        try {
            const currentUsers = await getUser()

            const user = currentUsers.find((user: UserData) => user.email === email && user.password === password)
            if (user) {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: "You have successfully logged in.",
                });
                dispatch(setUser(user));
                navigate("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Invalid Credentials",
                    text: "Please check your email and password.",
                });
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    return (
        <Layout>
            <Container>
                <div className="relative flex flex-col w-full bg-dark-alta">
                    <div className="flex items-center justify-center  my-auto">
                        <img src={login} width={450} alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full h-screen ">
                    <div className="w-full p-5 m-auto bg-zinc-200 rounded-md shadow-xl lg:max-w-xl justify-center ">
                        <h1 className="text-5xl font-bold text-center text-dark-alta uppercase mt-10 mb-10">
                            Sign in
                        </h1>
                        <form
                            className="mt-6 flex flex-col justify-center align-middle"
                            onSubmit={handleLogin}
                        >
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
                            <div className="flex flex-row justify-between ">
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
                            </div>
                            <div className="mt-10 mx-auto ">
                                <button
                                    type="submit"
                                    className="btn btn-wide mx-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-alta rounded-md hover:bg-orange-700 focus:outline-none focus:bg-dark-alta"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-xs font-light text-center text-dark-alta mb-10">
                            {" "}
                            Don't have an account?{" "}
                            <a href="Register" className="font-medium text-dark-alta hover:underline">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>


            </Container>
        </Layout>

    );
};



export default Login;