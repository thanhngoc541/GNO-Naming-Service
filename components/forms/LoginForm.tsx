"use client"

import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">
          Email Address <span>**</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Username or Email address..."
        />
        <label htmlFor="pass">
          Password <span>**</span>
        </label>
        <input id="pass" type="password" placeholder="Enter password..." />
        <div className="login-action mb-20 fix">
          <span className="log-rem f-left">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me!</label>
          </span>
          <span className="forgot-login f-right">
            <a href="#">Lost your password?</a>
          </span>
        </div>
        <button className="btn btn-2 btn-black w-100" type="submit">Login Now</button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <Link href={"/register"}>
            <button className="btn btn-2 w-100">Register Now</button>        
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
