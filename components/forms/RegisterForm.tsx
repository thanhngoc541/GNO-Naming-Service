
"use client"

import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <form  onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">
          Username <span>**</span>
        </label>
        <input id="name" type="text" placeholder="Enter Username..." />
        <label htmlFor="email-id">
          Email Address <span>**</span>
        </label>
        <input id="email-id" type="text" placeholder="Email address..." />
        <label htmlFor="pass">
          Password <span>**</span>
        </label>
        <input id="pass" type="password" placeholder="Enter password..." />
        <div className="mt-10"></div>
        <button className="btn btn-2 w-100" type="submit">Register Now</button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <Link href={"/login"}>
            <button className="btn btn-2 w-100">login Now</button>
        </Link>

      </form>
    </>
  );
};

export default RegisterForm;
