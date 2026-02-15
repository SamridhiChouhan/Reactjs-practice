import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import CardSection from "./CardSection";
import Login from "./login";
import Logout from "./Logout";
import { useState } from "react";
// import Login from "./Login"

function App() {
  const items = [
    {
      itemName: "Shirt",
      color: "Blue",
      price: 560,
    },
    { itemName: "T-Shirt", color: "Black", price: 800 },

    { itemName: "Jeans", color: "Blue", price: 1200 },
  ];
  let [user, setUser] = useState("Rani");

  function login() {
    setUser("Rani");
  }
  function logout() {
    setUser("");
  }

  return (
    <>
      {/* <Header />
      <CardSection items={items} />

      <Footer /> */}
      {/* {loggedin ? "You logged in successfully" : ""} */}
      {user ? <Login logout={logout} /> : <Logout login={login} />}
      {/* <Login login={login} /> */}
    </>
  );
}

export default App;
