import { React, useState } from "react";
import Add from "../img/add.png";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const [errMsg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log("Firebase error:", err.code, err.message);
      setMsg(err.message);
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">We Talk, NonStop</span>
        <span className="title">Login Below</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Type your email Id" />
          <input type="password" placeholder="Type your password" />
          <button>Sign In</button>
          {err && <span>{errMsg}</span>}
        </form>
        <p>
          You Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
