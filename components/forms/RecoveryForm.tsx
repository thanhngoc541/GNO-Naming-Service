"use client"

const RecoveryForm = () => {
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
        <button className="btn btn-2 w-100">Get Password</button>
        <div className="or-divide">
          <span>or</span>
        </div>
        <button className="btn btn-2 w-100">Register Now</button>
      </form>
    </>
  );
};

export default RecoveryForm;
