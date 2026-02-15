function Logout(props) {
  return (
    <>
      <div className="box">
        <h3>Logout</h3>
        {/* Name : <br /> */}
        {/* <input type="text" placeholder="Write your name" /> */}
        <button onClick={props.login}>Login</button>
      </div>
    </>
  );
}

export default Logout;
