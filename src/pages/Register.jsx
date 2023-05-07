import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">We Talk, NonStop</span>
        <span className="title"> Register To Know More</span>
        <form>
          <input type="text" placeholder="Type your name here" />
          <input type="email" placeholder="your email Id" />
          <input type="password" placeholder="Type your password Secretly" />
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src="" alt=""/>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? LogIn</p>
      </div>
    </div>
  );
};

export default Register;
