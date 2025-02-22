import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

useEffect(() => {
  console.log(userData)
}, [userData])


  const submitHandeler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: { firstName: firstName, lastName: lastName },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setfirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7Hq-yscGkE8H0nUd5F4VVMpz_oN0EQPtjrMEe7k3RobJPtpSfa222NMSwk8DOc3vEJc&usqp=CAU"
          alt=""
        />
        <form onSubmit={(e) => submitHandeler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              autoComplete="email"
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2   text-lg placeholder:text-base"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="email"
              type="text"
              placeholder="last name"
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2  text-lg placeholder:text-base"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            type="email"
            placeholder="Email"
            className="bg-[#eeeeee] mb-5  rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium ">Enter Password</h3>
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] mb-5 rounded px-4 py-2  w-full text-white placeholder:text-base">
            Login
          </button>
          <Link to="/login" className="text-blue-600 text-center block">
            already have account?
          </Link>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore!
          Suscipit illo enim illum vero fugit excepturi tempore reiciendis dolor
          ipsa.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
