import { useState } from "react";

function Login(props) {
  console.log(props.login);
  let [message, setMessage] = useState("");
  function msg(params) {
    setMessage("You logged in Successfully!");
  }
  return (
    <>
      <div className="box">
        <h3>Login</h3>
        Name : <br />
        <input type="text" placeholder="Write your name" />
        <button onClick={msg}>Submit</button>
        <button onClick={props.logout}>Logout</button>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Login;
