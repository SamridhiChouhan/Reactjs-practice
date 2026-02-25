import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <header>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/services">Services</Link>&nbsp;
        <Link to="/about">About us</Link>&nbsp;
        <Link to="/contact">Contact us</Link>
      </header>
    </>
  );
}

export default Navbar;
