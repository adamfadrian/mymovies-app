import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import { Button } from "components/Button";
import login from "src/assets/Login.png";
import Layout from "components/Layout";

const Login = () =>{
    const [, setCookie] = useCookies(["token", "id"]);
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        if (email && password) {
            setDisabled(false);
        } else{
            setDisabled(true);
        }
    }, [email, password]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const body = {
            email,
            password,
        };
        await axios
            .post("login")
    };

    return (
        <Layout>
            <div className="w-full h-screen flex flex-col overflow-auto bg-white">
                <div className="w-full hp-screen">
                    <div className="flex flex-row">
                        <div className="flex-1 bg-white">
                            <div className="flex flex-col">
                                <form 
                                    className="mx-auto mt-20" 
                                    onSubmit={(e) => handleSubmit(e)}
                                >
                                    <h2
                                        style={{
                                            fontFamily: "Poppins",
                                            fontSize: "1.75em",
                                            fontWeight: "700",
                                            textAlign: "center",
                                            color: "#22CAB6",
                                        }}
                                    >
                                        Login
                                    </h2>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        id="input-email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6"}}
                                    />
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        id="input-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="****************"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6"}}
                                    />
                                    <Button
                                        id="btn-login"
                                        label="Login"
                                        className="btn btn-wide btn-md 2xl:btn-lg flex mx-auto 2xl:mt-10 2xl:mb-10 px-4 py-2 tracking-wide border-orange-alta hover:border-orange-alta text-white transition-colors duration-200 transform bg-orange-alta rounded-md hover:bg-orange-700 focus:outline-none focus:bg-dark-alta"
                                        loading={loading || disabled}
                                    />
                                </form>
                                <p className="text-black mx-auto mt-5">
                                    don't have an account??{" "}
                                    <Link id="to-register" to="/register">
                                        <span className="text-blue-600 font-bold">Sign Up</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 bg-white">
                            <img 
                                src={login}
                                className="mx-auto align-center justify-center mt-20"
                                style={{ width: "60%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};



export default Login;