import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandeler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandeler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            type="email"
            placeholder="Email"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium ">Enter Password</h3>
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] mb-7 rounded px-4 py-2  w-full text-white placeholder:text-base">
            Login
          </button>
          <Link
            to="/captain-signup"
            className="text-blue-600 text-center block"
          >
            register as captain
          </Link>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex justify-center items-center mb-7 rounded px-4 py-2  w-full text-white placeholder:text-base"
        >
          Sign In as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
