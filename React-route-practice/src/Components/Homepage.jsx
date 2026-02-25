import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./Contact";
import Services from "./Services";
import Aboutpage from "./Aboutpage";

function Homepage() {
  return (
    <>
      <div>
        <h1>Welcome to BrightSmile Dental Clinic</h1>
        <h3>Your Trusted Family Dentist in Kota</h3>
        <p>Healthy teeth. Confident smiles. Gentle care.</p>
        <p>
          At BrightSmile Dental Clinic, we provide comprehensive dental care for
          patients of all ages. From routine cleanings to advanced cosmetic
          dentistry, our goal is to help you achieve a healthy, beautiful smile
          in a comfortable and stress-free environment.
        </p>
        <button>Book now</button>
      </div>
    </>
  );
}

export default Homepage;
