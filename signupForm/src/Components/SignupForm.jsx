import { useState } from "react";

function SignupForm() {
  let [user, setUser] = useState({
    name: "",
    password: "",
  });
  function onChange(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(user);
  }
  return (
    <>
      <form>
        Name :{" "}
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          value={user.name}
        />
        <br />
        Password :
        <input
          type="text"
          id="password"
          name="password"
          onChange={onChange}
          value={user.password}
        />
        <br />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
}

export default SignupForm;
