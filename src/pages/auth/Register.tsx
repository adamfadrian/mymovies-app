import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Upload from "src/assets/Upload.png";
import { Button } from "components/Button";
import Layout from "components/Layout";

const Register = () =>{
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        if (name && email && phone && address && password) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
    }, [name, email, phone, address, password]);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const body = {
          name,
          email,
          phone,
          address,
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

    return (
        <Layout>
            <div className="w-full h-screen flex flex-col overflow-auto bg-slate-600">
                <div className="w-full hp-screen">
                    <div className="flex flex-row pb-20">
                        <div className="flex-1 bg-white">
                            <div className="flex flex-col">
                                <form
                                    className="mx-auto"
                                    onSubmit={(e) => handleSubmit(e)}
                               >
                                    <h2
                                        style={{
                                            fontFamily: "Poppins",
                                            fontSize: "1.75em",
                                            fontWeight:"700",
                                            textAlign: "center",
                                            color: "#22CAB6",
                                        }}
                                    >
                                        Register
                                    </h2>
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input
                                        id="inputName"
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Enter your name"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        id="inputEmail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        id="inputPhone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text"
                                        placeholder="+6281299997777"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        id="inputAddress"
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        placeholder="Enter your address"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        id="inputPassword"
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="******************"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px solid #22CAB6" }}
                                    />
                                    <Button
                                        id="btn-register"
                                        label="Signup"
                                        loading={loading || disabled}
                                    />
                                </form>
                                <p className="text-black mx-auto mt-5">
                                    have an account?{" "}
                                    <Link id="to-login" to="/login">
                                        <span className="text-blue-600 font-bold">Login</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 bg-white">
                            <img
                                src={Upload}
                                className="mx-auto alig-center justify-center mt-20"
                                style={{ width: "60%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Register;